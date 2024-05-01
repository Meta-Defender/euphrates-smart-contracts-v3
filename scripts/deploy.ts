import { ethers, network } from "hardhat";
import { MarketMathCore, MarketState } from "./calculation";
import { ContractTransactionResponse, ZeroAddress } from "ethers";
import BigNumber from "bignumber.js";
import {
  ActionSwapPT,
  ActionSwapYT,
  FractleMarketV3,
  FractleYieldTokenV3,
} from "../typechain-types";
import { bignumber } from "mathjs";

async function main() {
  console.log("detected network " + network.name);
  const signers = await ethers.getSigners();

  // step0: deploy the EUSD
  const _EUSD = await ethers.getContractFactory("EUSDMock");
  const EUSD = await _EUSD.deploy(ZeroAddress);
  await EUSD.deploymentTransaction()?.wait();
  console.log("EUSD deployed at: " + (await EUSD.getAddress()));
  // step1: deploy the SY, in this case we deploy the FractleEUSDSY.sol
  const _FractleEUSDSY = await ethers.getContractFactory("FractleEUSDSY");
  const FractleEUSDSY = await _FractleEUSDSY.deploy(
    "EUSDSY",
    "EUSDSY",
    await EUSD.getAddress(),
  );
  await FractleEUSDSY.deploymentTransaction()?.wait();
  console.log("SY deployed at: " + (await FractleEUSDSY.getAddress()));
  // deploy oracleLib
  const _OracleLib = await ethers.getContractFactory("OracleLib");
  const OracleLib = await _OracleLib.deploy();
  await OracleLib.deploymentTransaction()?.wait();
  console.log("OracleLib deployed to:", await OracleLib.getAddress());

  const _FractleYieldTokenFactoryV3 = await ethers.getContractFactory(
    "FractleYieldContractFactoryV3",
  );
  const FractleYieldTokenFactoryV3 = await _FractleYieldTokenFactoryV3.deploy();
  await FractleYieldTokenFactoryV3.deploymentTransaction()?.wait();
  console.log(
    "yield token factory deployed at: " +
      (await FractleYieldTokenFactoryV3.getAddress()),
  );
  // now we initialize the factory
  const initializationTx = await FractleYieldTokenFactoryV3.initialize(
    // a day
    86400,
    // 6%
    ethers.parseEther(String(0.06)),
    // 2%
    ethers.parseEther(String(0.02)),
    // treasury
    await EUSD.getAddress(),
  );
  await initializationTx.wait();

  // begin to deployPT and YT
  const ptToDeploy = await ethers.getContractFactory("FractlePrincipalTokenV3");
  const deployedPT = await ptToDeploy.deploy(
    await FractleEUSDSY.getAddress(),
    "EUSD1739145600",
    "EUSD1739145600",
    18,
    1739145600,
  ); //1739145600 is 20250208
  await deployedPT.deploymentTransaction()?.wait();
  console.log("successfully deployed pt", await deployedPT.getAddress());

  // then we deploy the YT
  const ytToDeploy = await ethers.getContractFactory("FractleYieldTokenV3");
  const deployedYT = await ytToDeploy.deploy(
    await FractleEUSDSY.getAddress(), //SY
    await deployedPT.getAddress(), //PT
    await FractleYieldTokenFactoryV3.getAddress(), //factory
    "EUSD1739145600YT", //name
    "EUSD1739145600YT", //symbol
    18, //decimal
    1739145600, //expiry
    ethers.parseEther(String(0.02)), //sapr 2%
    365, //lifeCircle
    false,
  );
  await deployedYT.deploymentTransaction()?.wait();
  console.log("successfully deployed yt", await deployedYT.getAddress());

  // the use the YT to initialize the PT.
  const initializationTxPTYT = await FractleYieldTokenFactoryV3.initializePTYT(
    await FractleEUSDSY.getAddress(),
    await deployedPT.getAddress(),
    await deployedYT.getAddress(),
    1739145600,
  );
  await initializationTxPTYT.wait();

  // we can check if yt and sy address are stored in the pt address sucessfully.
  const syAddressFromPt = await deployedPT.SY();
  const ytAddressFromPt = await deployedPT.YT();
  console.log("sy address from pt: " + syAddressFromPt);
  console.log("yt address from pt: " + ytAddressFromPt);

  const ytContract = await ethers.getContractFactory("FractleYieldTokenV3");
  const yt = ytContract.attach(await deployedYT.getAddress());
  console.log(await yt.isExpired());

  // we deploy and initialize the marketFactory.
  const _FractleMarketFactoryV3 = await ethers.getContractFactory(
    "FractleMarketFactoryV3",
  );
  const FractleMarketFactoryV3 = await _FractleMarketFactoryV3.deploy(
    await FractleYieldTokenFactoryV3.getAddress(),
  );
  await FractleMarketFactoryV3.deploymentTransaction()?.wait();
  console.log(
    "market factory deployed at: " +
      (await FractleMarketFactoryV3.getAddress()),
  );
  // now we initialize the factory
  const initializeFractleMarket = await FractleMarketFactoryV3.initialize(
    await EUSD.getAddress(),
    ethers.parseEther(String(0.000999500333083533)),
    80,
    // external rewards distributor, don't need to set it currently.
    await EUSD.getAddress(),
  );
  await initializeFractleMarket.wait();

  // we have to deploy the market manually.
  const _FractleMarket = await ethers.getContractFactory("FractleMarketV3", {
    libraries: {
      OracleLib: await OracleLib.getAddress(),
    },
  });
  const deployedFractleMarket = await _FractleMarket.deploy(
    await deployedPT.getAddress(),
    ethers.parseEther(String(76.56895)),
    ethers.parseEther(String(1.04573897412)), //1.04573897412,absolutely 1 year round
    await EUSD.getAddress(),
    await EUSD.getAddress(),
    await FractleMarketFactoryV3.getAddress(),
  );
  await deployedFractleMarket.deploymentTransaction()?.wait();
  console.log(
    "market deployed at :" + (await deployedFractleMarket.getAddress()),
  );

  const createMarket = await FractleMarketFactoryV3.createNewMarket(
    await deployedPT.getAddress(),
    await deployedFractleMarket.getAddress(),
    ethers.parseEther(String(76.56895)),
    ethers.parseEther(String(1.04573897412)),
  );
  await createMarket.wait();

  // // then we begin to deploy actions
  // const actionInfoStatic = await ethers.getContractFactory("ActionInfoStatic");
  // const actionInfoStaticInstance = await actionInfoStatic.deploy();
  // console.log("actionInfoStatic deployed at: " + await actionInfoStaticInstance.getAddress());

  // const actionMarketAuxStatic = await ethers.getContractFactory("ActionMarketAuxStatic");
  // const actionMarketAuxStaticInstance = await actionMarketAuxStatic.deploy();
  // console.log("auctionMarketStatic deployed at: " + await actionMarketAuxStaticInstance.getAddress());

  // const actionMarketCoreStatic =  await ethers.getContractFactory("ActionMarketCoreStatic");
  // const actionMarketCoreStaticInstance = await actionMarketCoreStatic.deploy();
  // console.log("actionMarketCoreStatic deployed at: " + await actionMarketCoreStaticInstance.getAddress());

  // const actionMintRedeemStatic = await ethers.getContractFactory("ActionMintRedeemStatic");
  // const actionMintRedeemStaticInstance = await actionMintRedeemStatic.deploy();
  // console.log("auctionMintRedeemStatic deployed at: " + await actionMintRedeemStaticInstance.getAddress());

  // const actionStorageStatic = await ethers.getContractFactory("ActionStorageStatic");
  // const actionStorageStaticInstance = await actionStorageStatic.deploy();
  // console.log("actionStorageStatic deployed at: " + await actionStorageStaticInstance.getAddress());

  const actionAddRemoveLiq =
    await ethers.getContractFactory("ActionAddRemoveLiq");
  const actionAddRemoveLiqInstance = await actionAddRemoveLiq.deploy();
  await actionAddRemoveLiqInstance.deploymentTransaction()?.wait();
  console.log(
    "actionAddRemoveLiq deployed at: " +
      (await actionAddRemoveLiqInstance.getAddress()),
  );

  const actionMintRedeem = await ethers.getContractFactory("ActionMintRedeem");
  const actionMintRedeemInstance = await actionMintRedeem.deploy();
  await actionMintRedeemInstance.deploymentTransaction()?.wait();
  console.log(
    "actionMintRedeem deployed at: " +
      (await actionMintRedeemInstance.getAddress()),
  );

  const actionMisc = await ethers.getContractFactory("ActionMisc");
  const actionMiscInstance = await actionMisc.deploy();
  await actionMiscInstance.deploymentTransaction()?.wait();
  console.log(
    "actionMisc deployed at: " + (await actionMiscInstance.getAddress()),
  );

  const actionSwapPT = await ethers.getContractFactory("ActionSwapPT");
  const actionSwapPTInstance = await actionSwapPT.deploy();
  await actionSwapPTInstance.deploymentTransaction()?.wait();
  console.log(
    "actionSwapPT deployed at: " + (await actionSwapPTInstance.getAddress()),
  );

  const addressProvider = await ethers.getContractFactory("AddressProvider");
  const addressProviderInstance = await addressProvider.deploy();
  await addressProviderInstance.deploymentTransaction()?.wait();
  console.log(
    "addressProvider deployed at: " +
      (await addressProviderInstance.getAddress()),
  );

  // set market factory
  const initializeProviderInstance = await addressProviderInstance.initialize();
  await initializeProviderInstance.wait();
  const setProviderInstance = await addressProviderInstance.set(
    10086,
    await FractleMarketFactoryV3.getAddress(),
  );
  await setProviderInstance.wait();

  const actionSwapYT = await ethers.getContractFactory("ActionSwapYT");
  const actionSwapYTInstance = await actionSwapYT.deploy(
    await addressProviderInstance.getAddress(),
    10086,
  );
  await actionSwapYTInstance.deploymentTransaction()?.wait();
  console.log(
    "actionSwapYT deployed at: " + (await actionSwapYTInstance.getAddress()),
  );

  const approval1 = await EUSD.approve(
    await FractleEUSDSY.getAddress(),
    ethers.parseEther("1000000000000000000000000000000000"),
  );
  await approval1.wait();
  const approval2 = await EUSD.approve(
    await actionMintRedeemInstance.getAddress(),
    ethers.parseEther("10000000000000000000000000000"),
  );
  await approval2.wait();

  // first of all, we have to mint sy from token.
  const input = {
    tokenIn: await EUSD.getAddress(),
    netTokenIn: 10000000000000000000000n,
    tokenMintSy: await EUSD.getAddress(),
  };
  const mintedToken = await actionMintRedeemInstance.mintSyFromToken(
    signers[0].getAddress(),
    await FractleEUSDSY.getAddress(),
    0,
    input,
  );
  await mintedToken.wait();
  console.log(await FractleEUSDSY.balanceOf(signers[0].getAddress()));

  /**
   * @notice Tokenize SY into PT + YT of equal qty. Every unit of asset of SY will create 1 PT + 1 YT
   * @dev SY must be transferred to this contract prior to calling
   * 要先把SY转到合约中，然后再mintPTYT，否则出错。
   */
  const transfer = await FractleEUSDSY.transfer(
    await deployedYT.getAddress(),
    5000000000000000000000n,
  );
  await transfer.wait();

  // begin to mint ptyt
  await deployedYT.mintPY(signers[0].getAddress(), signers[0].getAddress());
  console.log(
    "FPT balance after initial mint :" +
      (await deployedYT.balanceOf(signers[0].getAddress())),
  );
  console.log(
    "DYT balance after initial mint :" +
      (await deployedPT.balanceOf(signers[0].getAddress())),
  );

  // read state
  const market_instance = await ethers.getContractFactory("FractleMarketV3", {
    libraries: {
      OracleLib: await OracleLib.getAddress(),
    },
  });
  const deployedMarketV3 = market_instance.attach(
    await deployedFractleMarket.getAddress(),
  );
  console.log(await deployedMarketV3.isExpired());

  // now we can begin to add liquidity
  console.log(
    "actionAddRemoveLiqInstanceAddress",
    await actionAddRemoveLiqInstance.getAddress(),
  );
  console.log("deployedPTAddress", await deployedPT.getAddress());

  const approvalPTtoPool = await deployedPT.approve(
    await actionAddRemoveLiqInstance.getAddress(),
    ethers.parseEther("100000000000"),
  );
  await approvalPTtoPool.wait();
  const approvalEUSDSYtoPool = await FractleEUSDSY.approve(
    await actionAddRemoveLiqInstance.getAddress(),
    ethers.parseEther("100000000000"),
  );
  await approvalEUSDSYtoPool.wait();
  const approvalPTtoMarket = await deployedPT.approve(
    await deployedFractleMarket.getAddress(),
    ethers.parseEther("100000000000"),
  );
  await approvalPTtoMarket.wait();
  const approvalEUSDSYtoMarket = await FractleEUSDSY.approve(
    await deployedFractleMarket.getAddress(),
    ethers.parseEther("100000000000"),
  );
  await approvalEUSDSYtoMarket.wait();

  //actually, we'd better get this approx data with a calculation function
  //but if we have determined the inital implied rata. we are sure what to fill in here
  //and we calculate the initial anchor by this initial implied rate
  //the calculated anchor has been used just now while initiating the market
  const calldata00 = {
    guessMin: String(BigNumber(495e14)), //4.95%
    guessMax: String(BigNumber(505e14)), //5.05%
    guessOffchain: String(BigNumber(5e16)), //5%
    maxIteration: String(BigNumber(7)),
    eps: String(BigNumber(1e14)),
  };
  const addLiquidity = await actionAddRemoveLiqInstance.addLiquidityDualSyAndPt(
    signers[0].getAddress(),
    await deployedFractleMarket.getAddress(),
    300000000000000000000n,
    100000000000000000000n,
    0,
    calldata00,
  );
  await addLiquidity.wait();

  // how much lp do we have? // 172205
  console.log(await deployedFractleMarket.balanceOf(signers[0].getAddress()));
  const approvalToMarket = await deployedFractleMarket.approve(
    await actionAddRemoveLiqInstance.getAddress(),
    ethers.parseEther("100000000"),
  );
  await approvalToMarket.wait();

  const approvalPT = await deployedPT.approve(
    actionSwapPTInstance.getAddress(),
    ethers.parseEther("100000000000"),
  );
  await approvalPT.wait();
  const approvalSY = await FractleEUSDSY.approve(
    actionSwapPTInstance.getAddress(),
    ethers.parseEther("100000000000"),
  );
  await approvalSY.wait();

  // begin to swap 0.01 PT for SY
  const res_swapPtForSy = await preCalculationSwapPt(
    deployedFractleMarket,
    actionSwapPTInstance,
    deployedYT,
    {
      exactPtIn: BigNumber("-10000000000000000"),
    },
  );
  const actionSwapPtForSy = await actionSwapPTInstance.swapExactPtForSy(
    signers[0].getAddress(),
    await deployedFractleMarket.getAddress(),
    10000000000000000n,
    0,
    res_swapPtForSy.calldata_guessR,
  );
  await actionSwapPtForSy.wait();
  //
  // swap exact 0.01 SY for PT
  const res_swapSyForPt = await preCalculationSwapPt(
    deployedFractleMarket,
    actionSwapPTInstance,
    deployedYT,
    {
      exactSyIn: BigNumber("1000000000000000000"),
    },
  );
  const actionSwapSyForPt = await actionSwapPTInstance.swapExactSyForPt(
    signers[0].getAddress(),
    await deployedFractleMarket.getAddress(),
    1000000000000000000n,
    0,
    res_swapSyForPt.calldata0,
    res_swapSyForPt.calldata_guessR,
  );
  await actionSwapSyForPt.wait();

  //------swap exact 10000 yt for sy-------------//
  // no need to approx in fractle version but need to estimate new r now
  // await deployedYT.approve(
  //   actionSwapYTInstance.getAddress(),
  //   ethers.parseEther("100000000000"),
  // );
  //
  // const res_swapYtForSy = await preCalculationSwapYt(
  //   deployedFractleMarket,
  //   actionSwapYTInstance,
  //   deployedYT,
  //   { exactYtInForSy: 10000 },
  // );
  //
  // await actionSwapYTInstance.swapExactYtForSy(
  //   signers[0].getAddress(),
  //   await deployedFractleMarket.getAddress(),
  //   10000,
  //   0,
  //   res_swapYtForSy.calldata_guessR,
  // );
  // console.log("successfully swap 10000 Yt for Sy");

  //-----swap exact 100 sy for yt-------//
  // sth wrong with this test.
  // await FractleEUSDSY.approve(
  //   actionSwapYTInstance.getAddress(),
  //   ethers.parseEther("100000000"),
  // );
  //
  // const res_swapSyForYt = await preCalculationSwapYt(
  //   deployedFractleMarket,
  //   actionSwapYTInstance,
  //   deployedYT,
  //   { exactSyIn: 1},
  // );
  // await actionSwapYTInstance.swapExactSyForYt(
  //   signers[0].getAddress(),
  //   await deployedFractleMarket.getAddress(),
  //   10,
  //   0,
  //   res_swapSyForYt.calldata0,
  //   res_swapSyForYt.calldata_guessR,
  // );
  // console.log("successfully swap 10 Sy for Yt");

  //-----swap exact 10000 pt for yt -----//
  await deployedPT.approve(
    actionSwapYTInstance.getAddress(),
    ethers.parseEther("100000000000"),
  );
  const res_swapPtForYt = await preCalculationSwapYt(
    deployedFractleMarket,
    actionSwapYTInstance,
    deployedYT,
    { exactPtInForYt: 20},
  );
  await actionSwapYTInstance.swapExactPtForYt(
    signers[0].getAddress(),
    await deployedFractleMarket.getAddress(),
    20,
    0,
    res_swapPtForYt.calldata0,
    res_swapPtForYt.calldata_guessR,
  );

  //--------------swap 1000 yt for pt--------------//
  // await deployedYT.approve(
  //   actionSwapYTInstance.getAddress(),
  //   ethers.parseEther("100000000000"),
  // );
  // const res_swapYtForPt = await preCalculationSwapYt(
  //   deployedFractleMarket,
  //   actionSwapYTInstance,
  //   deployedYT,
  //   { exactYtInForPt: 1000 },
  // );
  // await actionSwapYTInstance.swapExactYtForPt(
  //   signers[0].getAddress(),
  //   await deployedFractleMarket.getAddress(),
  //   1000,
  //   0,
  //   res_swapYtForPt.calldata0,
  //   res_swapYtForPt.calldata_guessR,
  // );

  //  const afterSwapPt0 = await deployedPT.balanceOf(signers[0].getAddress());
  //  console.log("after swap pt: " + afterSwapPt0);
  //  const afterSwapYt0 = await deployedYT.balanceOf(signers[0].getAddress());
  //  console.log("after swap yt: " + afterSwapYt0);
  //----------------------------------------------//

  //---------try remove liquidity-------------//
  // const removeLiquidityDual =
  //   await actionAddRemoveLiqInstance.removeLiquidityDualSyAndPt(
  //     signers[0].getAddress(),
  //     deployedFractleMarket,
  //     100000000000000000000n,
  //     0,
  //     0,
  //   );
  // await removeLiquidityDual.wait();

  // const removeLiquiditySingle = await actionAddRemoveLiqInstance.removeLiquiditySingleSy(signers[0].getAddress(), deployedFractleMarket, 10000, 0, );
  // await removeLiquiditySingle.wait();

  //     console.log("my yt balance, sy balance");
  //     console.log(await deployedYT.balanceOf(signers[0].getAddress()), await FractleEUSDSY.balanceOf(signers[0].getAddress()));
  //     await deployedYT.approve(actionSwapYTInstance.getAddress(), ethers.parseEther("100000000000"));
  //     await actionSwapYTInstance.swapExactYtForSy(signers[0].getAddress(), deployedFractleMarket.getAddress(), 1000, 0);
  //     console.log("after swapping, my yt balance, sy balance");
  //     console.log(await deployedYT.balanceOf(signers[0].getAddress()), await FractleEUSDSY.balanceOf(signers[0].getAddress()));

  //     // redeemPYToToken
  //     // approve YT
  //     await deployedPT.approve(actionMintRedeemInstance.getAddress(), ethers.parseEther("100000000000"));
  //     await deployedYT.approve(actionMintRedeemInstance.getAddress(), ethers.parseEther("100000000000"));
  //     console.log(await EUSD.balanceOf(signers[0].getAddress()));
  //     await actionMintRedeemInstance.redeemPyToToken(signers[0].getAddress(), deployedYT.getAddress(), 30, EUSD.getAddress());
  //     console.log(await EUSD.balanceOf(signers[0].getAddress()));

  //     //swap exact sy for yt
  //     const state = await deployedFractleMarket.readState(actionSwapYTInstance.getAddress());

  //     console.log(state);
  //     const market: MarketState = {
  //         totalPt: BigNumber(state.totalPt.toString()),
  //         totalSy: BigNumber(state.totalSy.toString()),
  //         totalLp: BigNumber(state.totalLp.toString()),
  //         treasury: state.treasury as `0x${string}`,
  //         scalarRoot: BigNumber(state.scalarRoot.toString()),
  //         expiry: BigNumber(state.expiry.toString()),
  //         lnFeeRateRoot: BigNumber(state.lnFeeRateRoot.toString()),
  //         reserveFeePercent: BigNumber(state.reserveFeePercent.toString()),
  //         lastLnImpliedRate: BigNumber(state.lastLnImpliedRate.toString()),
  //     };

  //     const sm = new MarketMathCore();
  //     const comp = sm.getMarketPreCompute(
  //         market,
  //         BigNumber("1100000000000000000"),
  //         BigNumber(((new Date().getTime()) / 1000).toFixed(0))
  //     )

  //     const r = sm.calculateSwapExactSyForYt(
  //         market,
  //         BigNumber("1100000000000000000"),
  //         comp,
  //         BigNumber("100"),
  //     );

  //     // const s = sm.calculateAddLiquiditySignleSy(
  //     //     market,
  //     //     BigNumber("1100000000000000000"),
  //     //     comp,
  //     //     BigNumber("120"),
  //     // );

  //     const beforeSwapSY = await FractleEUSDSY.balanceOf(signers[0].getAddress());
  //     console.log("before swap sy: " + beforeSwapSY);
  //     const beforeSwapYt = await deployedYT.balanceOf(signers[0].getAddress());
  //     console.log("before swap yt: " + beforeSwapYt);

  //     await FractleEUSDSY.approve(actionSwapYTInstance.getAddress(), ethers.parseEther("100000000000"));
  //     const calldata = {
  //         guessMin: String(r.guessMin),
  //         guessMax: String(r.guessMax),
  //         guessOffchain: String(r.guessOffchain),
  //         maxIteration: String(r.maxIteration),
  //         eps: String(r.eps)
  //     };
  //    //await actionSwapYTInstance.swapExactSyForYt(signers[0].getAddress(), await deployedFractleMarket.getAddress(), 100, 0, calldata);

  //     const afterSwapSY = await FractleEUSDSY.balanceOf(signers[0].getAddress());
  //     console.log("after swap sy: " + afterSwapSY);
  //     const afterSwapYt = await deployedYT.balanceOf(signers[0].getAddress());
  //     console.log("after swap yt: " + afterSwapYt);

  console.log("END");
  //--------------------------//
  // add liquidity single sy 300
  const state1 = await deployedFractleMarket.readState(
    actionAddRemoveLiqInstance.getAddress(),
  );

  const market1: MarketState = {
    totalPt: BigNumber(state1.totalPt.toString()),
    totalSy: BigNumber(state1.totalSy.toString()),
    totalLp: BigNumber(state1.totalLp.toString()),
    treasury: state1.treasury as `0x${string}`,
    scalarRoot: BigNumber(state1.scalarRoot.toString()),
    expiry: BigNumber(state1.expiry.toString()),
    lifeCircle: BigNumber(state1.lifeCircle.toString()),
    sAPR: BigNumber(state1.sAPR.toString()), //sAPR is 1e18 decimal
    lnFeeRateRoot: BigNumber(state1.lnFeeRateRoot.toString()),
    reserveFeePercent: BigNumber(state1.reserveFeePercent.toString()),
    lastLnImpliedRate: BigNumber(state1.lastLnImpliedRate.toString()),
  };

  const sm1 = new MarketMathCore();
  const lastGlobalInterestUpdatedDayIndexByOracle1 =
    await deployedYT.lastGlobalInterestUpdatedDayIndexByOracle(); //so-called blockTime

  const comp1 = sm1.getMarketPreCompute(
    market1,
    BigNumber("1100000000000000000"),
    market1.sAPR,
    BigNumber(lastGlobalInterestUpdatedDayIndexByOracle1.toString()),
  );

  // guess pt received from sy = net pt from swap
  const s = sm1.calculateAddLiquiditySignleSy(
    market1,
    BigNumber("1100000000000000000"),
    comp1,
    BigNumber("300"),
  );
  console.log("guess pt received from sy :" + s.guessOffchain);

  //use total pt received from sy to estimate new r
  //actually use swap sy for exact pt here
  // "calc trade" to get netSyOut etc.
  const CalcTradeResult1 = sm1.calcTrade(
    market1,
    comp1,
    BigNumber("1100000000000000000"),
    BigNumber(s.guessOffchain),
  );
  console.log("calc trade result is :" + JSON.stringify(CalcTradeResult1));

  //calculate new r
  const estimatedNewImpliedRate1 = sm1.estimateNewImpliedRate(
    market1,
    comp1,
    CalcTradeResult1,
    BigNumber(s.guessOffchain),
    BigNumber("1100000000000000000"),
    BigNumber(lastGlobalInterestUpdatedDayIndexByOracle1.toString()),
  );

  console.log("estimated rate is :" + estimatedNewImpliedRate1.guessOffchain);

  const calldata_guessR1 = {
    guessMin: String(estimatedNewImpliedRate1.guessMin),
    guessMax: String(estimatedNewImpliedRate1.guessMax),
    guessOffchain: String(estimatedNewImpliedRate1.guessOffchain),
    maxIteration: String(estimatedNewImpliedRate1.maxIteration),
    eps: String(estimatedNewImpliedRate1.eps),
  };

  console.log(
    "before add liquidity sy: " +
      (await FractleEUSDSY.balanceOf(signers[0].getAddress())),
  );
  console.log(
    "before add liqudity lp: " +
      (await deployedFractleMarket.balanceOf(signers[0].getAddress())),
  );

  const calldataSingleSy = {
    guessMin: String(s.guessMin),
    guessMax: String(s.guessMax),
    guessOffchain: String(s.guessOffchain),
    maxIteration: String(s.maxIteration),
    eps: String(s.eps),
  };

  await actionAddRemoveLiqInstance.addLiquiditySingleSy(
    signers[0].getAddress(),
    deployedFractleMarket.getAddress(),
    300,
    0,
    calldataSingleSy,
    calldata_guessR1,
  );
  console.log(
    "after add liquidity sy: " +
      (await FractleEUSDSY.balanceOf(signers[0].getAddress())),
  );
  console.log(
    "after add liqudity lp: " +
      (await deployedFractleMarket.balanceOf(signers[0].getAddress())),
  );

  //--------------------------------//

  // swap sy for exact 100 pt --- swap sy for exact pt
  // await FractleEUSDSY.approve(actionSwapPTInstance.getAddress(), ethers.parseEther("100000000000"));
  // const state0 = await deployedFractleMarket.readState(actionSwapPTInstance.getAddress());

  // //console.log(state0);
  // const market0: MarketState = {
  //     totalPt: BigNumber(state0.totalPt.toString()),
  //     totalSy: BigNumber(state0.totalSy.toString()),
  //     totalLp: BigNumber(state0.totalLp.toString()),
  //     treasury: state0.treasury as `0x${string}`,
  //     scalarRoot: BigNumber(state0.scalarRoot.toString()),
  //     expiry: BigNumber(state0.expiry.toString()),
  //     lifeCircle: BigNumber(state0.lifeCircle.toString()),
  //     sAPR: BigNumber(state0.sAPR.toString()), //sAPR is 1e18 decimal
  //     lnFeeRateRoot: BigNumber(state0.lnFeeRateRoot.toString()),
  //     reserveFeePercent: BigNumber(state0.reserveFeePercent.toString()),
  //     lastLnImpliedRate: BigNumber(state0.lastLnImpliedRate.toString()),
  // };

  // const sm0 = new MarketMathCore();
  // const lastGlobalInterestUpdatedDayIndexByOracle = await deployedYT.lastGlobalInterestUpdatedDayIndexByOracle();//so-called blockTime
  // const comp0 = sm0.getMarketPreCompute(
  //     market0,
  //     BigNumber("1100000000000000000"),
  //     market0.sAPR,
  //     BigNumber(lastGlobalInterestUpdatedDayIndexByOracle.toString())
  // )
  // //console.log("comp is :" + JSON.stringify(comp0));

  // //  "calctrade" to get netSyIn etc.
  // const CalcTradeResult0 = sm0.calcTrade(
  //     market0,
  //     comp0,
  //     BigNumber("1100000000000000000"),
  //     BigNumber("100")
  // )
  // console.log("calc trade result is :" + JSON.stringify(CalcTradeResult0));

  // //estimate new implied rate
  // const estimatedNewImpliedRate = sm0.estimateNewImpliedRate(
  //     market0,
  //     comp0,
  //     CalcTradeResult0,
  //     BigNumber("100"),
  //     BigNumber("1100000000000000000"),
  //     BigNumber(lastGlobalInterestUpdatedDayIndexByOracle.toString()));

  // console.log("estimated rate is :" + estimatedNewImpliedRate.guessOffchain);

  // const beforeSwapSY0 = await FractleEUSDSY.balanceOf(signers[0].getAddress());
  // console.log("before swap sy: " + beforeSwapSY0);
  // const beforeSwapPt0 = await deployedPT.balanceOf(signers[0].getAddress());
  // console.log("before swap pt: " + beforeSwapPt0);

  // const calldata_guessR = {
  //     guessMin: String(estimatedNewImpliedRate.guessMin),
  //     guessMax: String(estimatedNewImpliedRate.guessMax),
  //     guessOffchain: String(estimatedNewImpliedRate.guessOffchain),
  //     maxIteration: String(estimatedNewImpliedRate.maxIteration),
  //     eps: String(estimatedNewImpliedRate.eps)
  // };

  // await actionSwapPTInstance.swapSyForExactPt(signers[0].getAddress(), await deployedFractleMarket.getAddress(), 100, await FractleEUSDSY.totalSupply(), calldata_guessR);

  // const afterSwapSY0 = await FractleEUSDSY.balanceOf(signers[0].getAddress());
  // console.log("after swap sy: " + afterSwapSY0);
  // const afterSwapPt0 = await deployedPT.balanceOf(signers[0].getAddress());
  // console.log("after swap pt: " + afterSwapPt0);

  //----------------------//

  //short 100yt

  // //deploy short yt contract
  // const actionShortYt = await ethers.getContractFactory("ActionShortYT");
  // const actionShortYtInstance = await actionShortYt.deploy(await actionSwapYTInstance.getAddress(), await actionSwapPTInstance.getAddress(), ethers.parseEther(String(0.1)));
  // console.log("action short yt deployed at: " + await actionShortYtInstance.getAddress());

  // //fund 2000 SY in
  // await FractleEUSDSY.approve(await actionShortYtInstance.getAddress(), ethers.parseEther("100000000000"));
  // await actionShortYtInstance.fundUnderlying(await FractleEUSDSY.getAddress(), 2000);
  // const afterFundSY0 = await FractleEUSDSY.balanceOf(signers[0].getAddress());
  // console.log("after fund sy: " + afterFundSY0);

  // //do short 100 yt
  // //estimate r first:
  // const state0 = await deployedFractleMarket.readState(actionSwapPTInstance.getAddress());

  // //console.log(state0);
  // const market0: MarketState = {
  //     totalPt: BigNumber(state0.totalPt.toString()),
  //     totalSy: BigNumber(state0.totalSy.toString()),
  //     totalLp: BigNumber(state0.totalLp.toString()),
  //     treasury: state0.treasury as `0x${string}`,
  //     scalarRoot: BigNumber(state0.scalarRoot.toString()),
  //     expiry: BigNumber(state0.expiry.toString()),
  //     lifeCircle: BigNumber(state0.lifeCircle.toString()),
  //     sAPR: BigNumber(state0.sAPR.toString()), //sAPR is 1e18 decimal
  //     lnFeeRateRoot: BigNumber(state0.lnFeeRateRoot.toString()),
  //     reserveFeePercent: BigNumber(state0.reserveFeePercent.toString()),
  //     lastLnImpliedRate: BigNumber(state0.lastLnImpliedRate.toString()),
  // };

  // const sm0 = new MarketMathCore();
  // const lastGlobalInterestUpdatedDayIndexByOracle = await deployedYT.lastGlobalInterestUpdatedDayIndexByOracle();//so-called blockTime
  // const comp0 = sm0.getMarketPreCompute(
  //     market0,
  //     BigNumber("1100000000000000000"),
  //     market0.sAPR,
  //     BigNumber(lastGlobalInterestUpdatedDayIndexByOracle.toString())
  // )
  // //console.log("comp is :" + JSON.stringify(comp0));

  // //  "calctrade" to get netSyIn etc.
  // const CalcTradeResult0 = sm0.calcTrade(
  //     market0,
  //     comp0,
  //     BigNumber("1100000000000000000"),
  //     BigNumber("100")
  // )
  // //console.log("calc trade result is :" + JSON.stringify(CalcTradeResult0));

  // //estimate new implied rate
  // const estimatedNewImpliedRate = sm0.estimateNewImpliedRate(
  //     market0,
  //     comp0,
  //     CalcTradeResult0,
  //     BigNumber("100"),
  //     BigNumber("1100000000000000000"),
  //     BigNumber(lastGlobalInterestUpdatedDayIndexByOracle.toString()));

  // console.log("estimated rate is :" + estimatedNewImpliedRate.guessOffchain);

  // const calldata_guessR = {
  //     guessMin: String(estimatedNewImpliedRate.guessMin),
  //     guessMax: String(estimatedNewImpliedRate.guessMax),
  //     guessOffchain: String(estimatedNewImpliedRate.guessOffchain),
  //     maxIteration: String(estimatedNewImpliedRate.maxIteration),
  //     eps: String(estimatedNewImpliedRate.eps)
  // };

  // const beforeShortSY0 = await FractleEUSDSY.balanceOf(signers[0].getAddress());
  // console.log("before short sy: " + beforeShortSY0);
  // const beforeShortPtInShortInstance = await deployedPT.balanceOf(await actionShortYtInstance.getAddress());
  // console.log("before short pt: "+ beforeShortPtInShortInstance);

  // await actionShortYtInstance.shortYT(await deployedFractleMarket.getAddress(), 100, calldata_guessR);

  // const afterShortSY0 = await FractleEUSDSY.balanceOf(signers[0].getAddress());
  // console.log("after short sy: " + afterShortSY0);
  // const afterShortPtInShortInstance = await deployedPT.balanceOf(await actionShortYtInstance.getAddress());
  // console.log("after short pt: "+ afterShortPtInShortInstance);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

export class PreCalculation_Pt {
  exactSyIn?: BigNumber
  exactPtIn?: BigNumber;
}

export class PreCalculation_Yt {
  exactSyInForYt?: BigNumber;
  exactYtInForSy?: BigNumber;
  exactPtInForYt?: BigNumber;
  exactYtInForPt?: BigNumber;
}

async function preCalculationSwapYt(
  deployedFractleMarket: FractleMarketV3 & {
    deploymentTransaction(): ContractTransactionResponse;
  },
  actionSwapYt: ActionSwapYT & {
    deploymentTransaction(): ContractTransactionResponse;
  },
  deployedYt: FractleYieldTokenV3 & {
    deploymentTransaction(): ContractTransactionResponse;
  },
  params: PreCalculation_Yt,
) {
  const core = new MarketMathCore();
  const state0 = await deployedFractleMarket.readState(
    actionSwapYt.getAddress(),
  );
  const market0: MarketState = {
    totalPt: BigNumber(state0.totalPt.toString()),
    totalSy: BigNumber(state0.totalSy.toString()),
    totalLp: BigNumber(state0.totalLp.toString()),
    treasury: state0.treasury as `0x${string}`,
    scalarRoot: BigNumber(state0.scalarRoot.toString()),
    expiry: BigNumber(state0.expiry.toString()),
    lifeCircle: BigNumber(state0.lifeCircle.toString()),
    sAPR: BigNumber(state0.sAPR.toString()), //sAPR is 1e18 decimal
    lnFeeRateRoot: BigNumber(state0.lnFeeRateRoot.toString()),
    reserveFeePercent: BigNumber(state0.reserveFeePercent.toString()),
    lastLnImpliedRate: BigNumber(state0.lastLnImpliedRate.toString()),
  };
  console.log(market0);

  const lastGlobalInterestUpdatedDayIndexByOracle =
    await deployedYt.lastGlobalInterestUpdatedDayIndexByOracle(); //so-called blockTime

  //exact yt in = exact pt out >0
  const comp0 = core.getMarketPreCompute(
    market0,
    BigNumber("1100000000000000000"),
    market0.sAPR,
    BigNumber(lastGlobalInterestUpdatedDayIndexByOracle.toString()),
  );

  let guess, net: any;
  if (params.exactSyInForYt) {
    guess = new MarketMathCore().calculateSwapExactSyForYt(
      market0,
      BigNumber("1100000000000000000"),
      comp0, params.exactSyInForYt
    );
    net = guess.guessOffchain.multipliedBy(-1);
  } else if (params.exactPtInForYt) {
    guess = core.calculateSwapExactPtForYt(
      market0,
      BigNumber("1100000000000000000"),
      comp0,
      params.exactPtInForYt
    );
    console.log("a")
    console.log(guess.guessOffchain);
    net = guess.guessOffchain.multipliedBy(-1);
    console.log(net);
  } else if (params.exactYtInForPt) {
    guess = core.calculateSwapExactYtForPt(
      market0,
      BigNumber("1100000000000000000"),
      comp0,
      params.exactYtInForPt,
    );
    net = guess.guessOffchain;
  } else if (params.exactYtInForSy) {
    net = params.exactYtInForSy;
  }

  //estimate new implied rate
  const estimatedNewImpliedRate = core.estimateNewImpliedRate(
    market0,
    comp0,
    core.calcTrade(
      market0,
      comp0,
      BigNumber("1100000000000000000"),
      BigNumber(net),
    ),
    BigNumber(net),
    BigNumber("1100000000000000000"),
    BigNumber(lastGlobalInterestUpdatedDayIndexByOracle.toString()),
  );
  console.log(estimatedNewImpliedRate);
  console.log({
    guessMin: String(guess?.guessMin),
    guessMax: String(guess?.guessMax),
    guessOffchain: String(guess?.guessOffchain),
    maxIteration: String(guess?.maxIteration),
    eps: String(guess?.eps),
  })
  console.log({
    guessMin: String(estimatedNewImpliedRate.guessMin),
    guessMax: String(estimatedNewImpliedRate.guessMax),
    guessOffchain: String(estimatedNewImpliedRate.guessOffchain),
    maxIteration: String(estimatedNewImpliedRate.maxIteration),
    eps: String(estimatedNewImpliedRate.eps),
  })

  return {
    calldata0: {
      guessMin: String(guess?.guessMin),
      guessMax: String(guess?.guessMax),
      guessOffchain: String(guess?.guessOffchain),
      maxIteration: String(guess?.maxIteration),
      eps: String(guess?.eps),
    },
    calldata_guessR: {
      guessMin: String(estimatedNewImpliedRate.guessMin),
      guessMax: String(estimatedNewImpliedRate.guessMax),
      guessOffchain: String(estimatedNewImpliedRate.guessOffchain),
      maxIteration: String(estimatedNewImpliedRate.maxIteration),
      eps: String(estimatedNewImpliedRate.eps),
    },
  };
}

async function preCalculationSwapPt(
  deployedFractleMarket: FractleMarketV3 & {
    deploymentTransaction(): ContractTransactionResponse;
  },
  actionSwapPt: ActionSwapPT & {
    deploymentTransaction(): ContractTransactionResponse;
  },
  deployedYt: FractleYieldTokenV3 & {
    deploymentTransaction(): ContractTransactionResponse;
  },
  params: PreCalculation_Pt,
) {
  const state0 = await deployedFractleMarket.readState(
    actionSwapPt.getAddress(),
  );
  const market0: MarketState = {
    totalPt: BigNumber(state0.totalPt.toString()),
    totalSy: BigNumber(state0.totalSy.toString()),
    totalLp: BigNumber(state0.totalLp.toString()),
    treasury: state0.treasury as `0x${string}`,
    scalarRoot: BigNumber(state0.scalarRoot.toString()),
    expiry: BigNumber(state0.expiry.toString()),
    lifeCircle: BigNumber(state0.lifeCircle.toString()),
    sAPR: BigNumber(state0.sAPR.toString()), //sAPR is 1e18 decimal
    lnFeeRateRoot: BigNumber(state0.lnFeeRateRoot.toString()),
    reserveFeePercent: BigNumber(state0.reserveFeePercent.toString()),
    lastLnImpliedRate: BigNumber(state0.lastLnImpliedRate.toString()),
  };

  const lastGlobalInterestUpdatedDayIndexByOracle =
    await deployedYt.lastGlobalInterestUpdatedDayIndexByOracle(); //so-called blockTime
  const comp0 = new MarketMathCore().getMarketPreCompute(
    market0,
    BigNumber("1100000000000000000"),
    market0.sAPR,
    //BigNumber(((new Date().getTime()) / 1000).toFixed(0))
    BigNumber(lastGlobalInterestUpdatedDayIndexByOracle.toString()),
  );
  let guessPt: any;
  if (params.exactSyIn && params.exactPtIn) {
    throw new Error("insufficient params");
  }
  if (params.exactSyIn) {
    guessPt = new MarketMathCore().calculateSwapExactSyForPt(
      market0,
      BigNumber("1100000000000000000"),
      comp0,
        params.exactSyIn
    );
  }
  const estimateNewImpliedRate = new MarketMathCore().estimateNewImpliedRate(
    market0,
    comp0,
    new MarketMathCore().calcTrade(
      market0,
      comp0,
      BigNumber("1100000000000000000"),
      params.exactSyIn
        ? BigNumber(guessPt.guessOffchain)
        : params.exactPtIn as BigNumber,
    ),
    params.exactSyIn
      ? BigNumber(guessPt.guessOffchain)
      : params.exactPtIn as BigNumber,
    BigNumber("1100000000000000000"),
    BigNumber(lastGlobalInterestUpdatedDayIndexByOracle.toString()),
  );
  return {
    calldata0: {
      guessMin: String(guessPt?.guessMin),
      guessMax: String(guessPt?.guessMax),
      guessOffchain: String(guessPt?.guessOffchain),
      maxIteration: String(guessPt?.maxIteration),
      eps: String(guessPt?.eps),
    },
    calldata_guessR: {
      guessMin: String(estimateNewImpliedRate.guessMin),
      guessMax: String(estimateNewImpliedRate.guessMax),
      guessOffchain: String(estimateNewImpliedRate.guessOffchain),
      maxIteration: String(estimateNewImpliedRate.maxIteration),
      eps: String(estimateNewImpliedRate.eps),
    },
  };
}
