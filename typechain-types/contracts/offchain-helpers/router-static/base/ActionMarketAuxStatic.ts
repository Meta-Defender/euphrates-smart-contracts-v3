/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedListener,
  TypedContractMethod,
} from "../../../../common";

export type MarketStateStruct = {
  totalPt: BigNumberish;
  totalSy: BigNumberish;
  totalLp: BigNumberish;
  treasury: AddressLike;
  scalarRoot: BigNumberish;
  expiry: BigNumberish;
  lnFeeRateRoot: BigNumberish;
  reserveFeePercent: BigNumberish;
  lastLnImpliedRate: BigNumberish;
};

export type MarketStateStructOutput = [
  totalPt: bigint,
  totalSy: bigint,
  totalLp: bigint,
  treasury: string,
  scalarRoot: bigint,
  expiry: bigint,
  lnFeeRateRoot: bigint,
  reserveFeePercent: bigint,
  lastLnImpliedRate: bigint
] & {
  totalPt: bigint;
  totalSy: bigint;
  totalLp: bigint;
  treasury: string;
  scalarRoot: bigint;
  expiry: bigint;
  lnFeeRateRoot: bigint;
  reserveFeePercent: bigint;
  lastLnImpliedRate: bigint;
};

export interface ActionMarketAuxStaticInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "calcPriceImpactPY"
      | "calcPriceImpactPt"
      | "calcPriceImpactYt"
      | "getLpToAssetRate"
      | "getLpToSyRate"
      | "getMarketState"
      | "getPtToAssetRate"
      | "getPtToSyRate"
      | "getTradeExchangeRateExcludeFee"
      | "getTradeExchangeRateIncludeFee"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "calcPriceImpactPY",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "calcPriceImpactPt",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "calcPriceImpactYt",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getLpToAssetRate",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getLpToSyRate",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getMarketState",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getPtToAssetRate",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getPtToSyRate",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getTradeExchangeRateExcludeFee",
    values: [AddressLike, MarketStateStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "getTradeExchangeRateIncludeFee",
    values: [AddressLike, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "calcPriceImpactPY",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "calcPriceImpactPt",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "calcPriceImpactYt",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getLpToAssetRate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getLpToSyRate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getMarketState",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPtToAssetRate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPtToSyRate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTradeExchangeRateExcludeFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTradeExchangeRateIncludeFee",
    data: BytesLike
  ): Result;
}

export interface ActionMarketAuxStatic extends BaseContract {
  connect(runner?: ContractRunner | null): ActionMarketAuxStatic;
  waitForDeployment(): Promise<this>;

  interface: ActionMarketAuxStaticInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  calcPriceImpactPY: TypedContractMethod<
    [market: AddressLike, netPtOut: BigNumberish],
    [bigint],
    "view"
  >;

  calcPriceImpactPt: TypedContractMethod<
    [market: AddressLike, netPtOut: BigNumberish],
    [bigint],
    "view"
  >;

  calcPriceImpactYt: TypedContractMethod<
    [market: AddressLike, netPtOut: BigNumberish],
    [bigint],
    "view"
  >;

  getLpToAssetRate: TypedContractMethod<
    [market: AddressLike],
    [bigint],
    "view"
  >;

  getLpToSyRate: TypedContractMethod<[market: AddressLike], [bigint], "view">;

  getMarketState: TypedContractMethod<
    [market: AddressLike],
    [
      [string, string, string, bigint, bigint, MarketStateStructOutput] & {
        pt: string;
        yt: string;
        sy: string;
        impliedYield: bigint;
        marketExchangeRateExcludeFee: bigint;
        state: MarketStateStructOutput;
      }
    ],
    "view"
  >;

  getPtToAssetRate: TypedContractMethod<
    [market: AddressLike],
    [bigint],
    "view"
  >;

  getPtToSyRate: TypedContractMethod<[market: AddressLike], [bigint], "view">;

  getTradeExchangeRateExcludeFee: TypedContractMethod<
    [market: AddressLike, state: MarketStateStruct],
    [bigint],
    "view"
  >;

  getTradeExchangeRateIncludeFee: TypedContractMethod<
    [market: AddressLike, netPtOut: BigNumberish],
    [bigint],
    "view"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "calcPriceImpactPY"
  ): TypedContractMethod<
    [market: AddressLike, netPtOut: BigNumberish],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "calcPriceImpactPt"
  ): TypedContractMethod<
    [market: AddressLike, netPtOut: BigNumberish],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "calcPriceImpactYt"
  ): TypedContractMethod<
    [market: AddressLike, netPtOut: BigNumberish],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "getLpToAssetRate"
  ): TypedContractMethod<[market: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "getLpToSyRate"
  ): TypedContractMethod<[market: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "getMarketState"
  ): TypedContractMethod<
    [market: AddressLike],
    [
      [string, string, string, bigint, bigint, MarketStateStructOutput] & {
        pt: string;
        yt: string;
        sy: string;
        impliedYield: bigint;
        marketExchangeRateExcludeFee: bigint;
        state: MarketStateStructOutput;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "getPtToAssetRate"
  ): TypedContractMethod<[market: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "getPtToSyRate"
  ): TypedContractMethod<[market: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "getTradeExchangeRateExcludeFee"
  ): TypedContractMethod<
    [market: AddressLike, state: MarketStateStruct],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "getTradeExchangeRateIncludeFee"
  ): TypedContractMethod<
    [market: AddressLike, netPtOut: BigNumberish],
    [bigint],
    "view"
  >;

  filters: {};
}
