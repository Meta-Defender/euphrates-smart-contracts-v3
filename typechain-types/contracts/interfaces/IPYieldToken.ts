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
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "../../common";

export interface IPYieldTokenInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "PT"
      | "SY"
      | "allowance"
      | "approve"
      | "balanceOf"
      | "decimals"
      | "doCacheIndexSameBlock"
      | "expiry"
      | "factory"
      | "getRewardTokens"
      | "isExpired"
      | "mintPY"
      | "name"
      | "pyIndexCurrent"
      | "pyIndexLastUpdatedBlock"
      | "pyIndexStored"
      | "redeemDueInterestAndRewards"
      | "redeemPY"
      | "redeemPYMulti"
      | "rewardIndexesCurrent"
      | "sAPR"
      | "symbol"
      | "totalSupply"
      | "transfer"
      | "transferFrom"
      | "userInterest"
      | "userReward"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "Approval"
      | "Burn"
      | "Mint"
      | "NewInterestIndex"
      | "RedeemInterest"
      | "RedeemRewards"
      | "Transfer"
      | "WithdrawFeeToTreasury"
  ): EventFragment;

  encodeFunctionData(functionFragment: "PT", values?: undefined): string;
  encodeFunctionData(functionFragment: "SY", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "allowance",
    values: [AddressLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "approve",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "balanceOf",
    values: [AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "decimals", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "doCacheIndexSameBlock",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "expiry", values?: undefined): string;
  encodeFunctionData(functionFragment: "factory", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getRewardTokens",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "isExpired", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "mintPY",
    values: [AddressLike, AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "name", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "pyIndexCurrent",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "pyIndexLastUpdatedBlock",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "pyIndexStored",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "redeemDueInterestAndRewards",
    values: [AddressLike, boolean, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "redeemPY",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "redeemPYMulti",
    values: [AddressLike[], BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "rewardIndexesCurrent",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "sAPR", values?: undefined): string;
  encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "totalSupply",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transfer",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferFrom",
    values: [AddressLike, AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "userInterest",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "userReward",
    values: [AddressLike, AddressLike]
  ): string;

  decodeFunctionResult(functionFragment: "PT", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "SY", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "allowance", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "doCacheIndexSameBlock",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "expiry", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "factory", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getRewardTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "isExpired", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "mintPY", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "pyIndexCurrent",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "pyIndexLastUpdatedBlock",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "pyIndexStored",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "redeemDueInterestAndRewards",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "redeemPY", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "redeemPYMulti",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "rewardIndexesCurrent",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "sAPR", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "totalSupply",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferFrom",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "userInterest",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "userReward", data: BytesLike): Result;
}

export namespace ApprovalEvent {
  export type InputTuple = [
    owner: AddressLike,
    spender: AddressLike,
    value: BigNumberish
  ];
  export type OutputTuple = [owner: string, spender: string, value: bigint];
  export interface OutputObject {
    owner: string;
    spender: string;
    value: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace BurnEvent {
  export type InputTuple = [
    caller: AddressLike,
    receiver: AddressLike,
    amountPYToRedeem: BigNumberish,
    amountSyOut: BigNumberish
  ];
  export type OutputTuple = [
    caller: string,
    receiver: string,
    amountPYToRedeem: bigint,
    amountSyOut: bigint
  ];
  export interface OutputObject {
    caller: string;
    receiver: string;
    amountPYToRedeem: bigint;
    amountSyOut: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace MintEvent {
  export type InputTuple = [
    caller: AddressLike,
    receiverPT: AddressLike,
    receiverYT: AddressLike,
    amountSyToMint: BigNumberish,
    amountPYOut: BigNumberish
  ];
  export type OutputTuple = [
    caller: string,
    receiverPT: string,
    receiverYT: string,
    amountSyToMint: bigint,
    amountPYOut: bigint
  ];
  export interface OutputObject {
    caller: string;
    receiverPT: string;
    receiverYT: string;
    amountSyToMint: bigint;
    amountPYOut: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace NewInterestIndexEvent {
  export type InputTuple = [newIndex: BigNumberish];
  export type OutputTuple = [newIndex: bigint];
  export interface OutputObject {
    newIndex: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace RedeemInterestEvent {
  export type InputTuple = [user: AddressLike, interestOut: BigNumberish];
  export type OutputTuple = [user: string, interestOut: bigint];
  export interface OutputObject {
    user: string;
    interestOut: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace RedeemRewardsEvent {
  export type InputTuple = [
    user: AddressLike,
    amountRewardsOut: BigNumberish[]
  ];
  export type OutputTuple = [user: string, amountRewardsOut: bigint[]];
  export interface OutputObject {
    user: string;
    amountRewardsOut: bigint[];
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace TransferEvent {
  export type InputTuple = [
    from: AddressLike,
    to: AddressLike,
    value: BigNumberish
  ];
  export type OutputTuple = [from: string, to: string, value: bigint];
  export interface OutputObject {
    from: string;
    to: string;
    value: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace WithdrawFeeToTreasuryEvent {
  export type InputTuple = [
    amountRewardsOut: BigNumberish[],
    syOut: BigNumberish
  ];
  export type OutputTuple = [amountRewardsOut: bigint[], syOut: bigint];
  export interface OutputObject {
    amountRewardsOut: bigint[];
    syOut: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface IPYieldToken extends BaseContract {
  connect(runner?: ContractRunner | null): IPYieldToken;
  waitForDeployment(): Promise<this>;

  interface: IPYieldTokenInterface;

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

  PT: TypedContractMethod<[], [string], "view">;

  SY: TypedContractMethod<[], [string], "view">;

  allowance: TypedContractMethod<
    [owner: AddressLike, spender: AddressLike],
    [bigint],
    "view"
  >;

  approve: TypedContractMethod<
    [spender: AddressLike, amount: BigNumberish],
    [boolean],
    "nonpayable"
  >;

  balanceOf: TypedContractMethod<[account: AddressLike], [bigint], "view">;

  decimals: TypedContractMethod<[], [bigint], "view">;

  doCacheIndexSameBlock: TypedContractMethod<[], [boolean], "view">;

  expiry: TypedContractMethod<[], [bigint], "view">;

  factory: TypedContractMethod<[], [string], "view">;

  getRewardTokens: TypedContractMethod<[], [string[]], "view">;

  isExpired: TypedContractMethod<[], [boolean], "view">;

  mintPY: TypedContractMethod<
    [receiverPT: AddressLike, receiverYT: AddressLike],
    [bigint],
    "nonpayable"
  >;

  name: TypedContractMethod<[], [string], "view">;

  pyIndexCurrent: TypedContractMethod<[], [bigint], "nonpayable">;

  pyIndexLastUpdatedBlock: TypedContractMethod<[], [bigint], "view">;

  pyIndexStored: TypedContractMethod<[], [bigint], "view">;

  redeemDueInterestAndRewards: TypedContractMethod<
    [user: AddressLike, redeemInterest: boolean, redeemRewards: boolean],
    [[bigint, bigint[]] & { interestOut: bigint; rewardsOut: bigint[] }],
    "nonpayable"
  >;

  redeemPY: TypedContractMethod<
    [receiver: AddressLike],
    [bigint],
    "nonpayable"
  >;

  redeemPYMulti: TypedContractMethod<
    [receivers: AddressLike[], amountPYToRedeems: BigNumberish[]],
    [bigint[]],
    "nonpayable"
  >;

  rewardIndexesCurrent: TypedContractMethod<[], [bigint[]], "nonpayable">;

  sAPR: TypedContractMethod<[], [bigint], "view">;

  symbol: TypedContractMethod<[], [string], "view">;

  totalSupply: TypedContractMethod<[], [bigint], "view">;

  transfer: TypedContractMethod<
    [to: AddressLike, amount: BigNumberish],
    [boolean],
    "nonpayable"
  >;

  transferFrom: TypedContractMethod<
    [from: AddressLike, to: AddressLike, amount: BigNumberish],
    [boolean],
    "nonpayable"
  >;

  userInterest: TypedContractMethod<
    [user: AddressLike],
    [[bigint, bigint] & { lastPYIndex: bigint; accruedInterest: bigint }],
    "view"
  >;

  userReward: TypedContractMethod<
    [token: AddressLike, user: AddressLike],
    [[bigint, bigint] & { index: bigint; accrued: bigint }],
    "view"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(nameOrSignature: "PT"): TypedContractMethod<[], [string], "view">;
  getFunction(nameOrSignature: "SY"): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "allowance"
  ): TypedContractMethod<
    [owner: AddressLike, spender: AddressLike],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "approve"
  ): TypedContractMethod<
    [spender: AddressLike, amount: BigNumberish],
    [boolean],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "balanceOf"
  ): TypedContractMethod<[account: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "decimals"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "doCacheIndexSameBlock"
  ): TypedContractMethod<[], [boolean], "view">;
  getFunction(
    nameOrSignature: "expiry"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "factory"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "getRewardTokens"
  ): TypedContractMethod<[], [string[]], "view">;
  getFunction(
    nameOrSignature: "isExpired"
  ): TypedContractMethod<[], [boolean], "view">;
  getFunction(
    nameOrSignature: "mintPY"
  ): TypedContractMethod<
    [receiverPT: AddressLike, receiverYT: AddressLike],
    [bigint],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "name"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "pyIndexCurrent"
  ): TypedContractMethod<[], [bigint], "nonpayable">;
  getFunction(
    nameOrSignature: "pyIndexLastUpdatedBlock"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "pyIndexStored"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "redeemDueInterestAndRewards"
  ): TypedContractMethod<
    [user: AddressLike, redeemInterest: boolean, redeemRewards: boolean],
    [[bigint, bigint[]] & { interestOut: bigint; rewardsOut: bigint[] }],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "redeemPY"
  ): TypedContractMethod<[receiver: AddressLike], [bigint], "nonpayable">;
  getFunction(
    nameOrSignature: "redeemPYMulti"
  ): TypedContractMethod<
    [receivers: AddressLike[], amountPYToRedeems: BigNumberish[]],
    [bigint[]],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "rewardIndexesCurrent"
  ): TypedContractMethod<[], [bigint[]], "nonpayable">;
  getFunction(
    nameOrSignature: "sAPR"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "symbol"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "totalSupply"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "transfer"
  ): TypedContractMethod<
    [to: AddressLike, amount: BigNumberish],
    [boolean],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "transferFrom"
  ): TypedContractMethod<
    [from: AddressLike, to: AddressLike, amount: BigNumberish],
    [boolean],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "userInterest"
  ): TypedContractMethod<
    [user: AddressLike],
    [[bigint, bigint] & { lastPYIndex: bigint; accruedInterest: bigint }],
    "view"
  >;
  getFunction(
    nameOrSignature: "userReward"
  ): TypedContractMethod<
    [token: AddressLike, user: AddressLike],
    [[bigint, bigint] & { index: bigint; accrued: bigint }],
    "view"
  >;

  getEvent(
    key: "Approval"
  ): TypedContractEvent<
    ApprovalEvent.InputTuple,
    ApprovalEvent.OutputTuple,
    ApprovalEvent.OutputObject
  >;
  getEvent(
    key: "Burn"
  ): TypedContractEvent<
    BurnEvent.InputTuple,
    BurnEvent.OutputTuple,
    BurnEvent.OutputObject
  >;
  getEvent(
    key: "Mint"
  ): TypedContractEvent<
    MintEvent.InputTuple,
    MintEvent.OutputTuple,
    MintEvent.OutputObject
  >;
  getEvent(
    key: "NewInterestIndex"
  ): TypedContractEvent<
    NewInterestIndexEvent.InputTuple,
    NewInterestIndexEvent.OutputTuple,
    NewInterestIndexEvent.OutputObject
  >;
  getEvent(
    key: "RedeemInterest"
  ): TypedContractEvent<
    RedeemInterestEvent.InputTuple,
    RedeemInterestEvent.OutputTuple,
    RedeemInterestEvent.OutputObject
  >;
  getEvent(
    key: "RedeemRewards"
  ): TypedContractEvent<
    RedeemRewardsEvent.InputTuple,
    RedeemRewardsEvent.OutputTuple,
    RedeemRewardsEvent.OutputObject
  >;
  getEvent(
    key: "Transfer"
  ): TypedContractEvent<
    TransferEvent.InputTuple,
    TransferEvent.OutputTuple,
    TransferEvent.OutputObject
  >;
  getEvent(
    key: "WithdrawFeeToTreasury"
  ): TypedContractEvent<
    WithdrawFeeToTreasuryEvent.InputTuple,
    WithdrawFeeToTreasuryEvent.OutputTuple,
    WithdrawFeeToTreasuryEvent.OutputObject
  >;

  filters: {
    "Approval(address,address,uint256)": TypedContractEvent<
      ApprovalEvent.InputTuple,
      ApprovalEvent.OutputTuple,
      ApprovalEvent.OutputObject
    >;
    Approval: TypedContractEvent<
      ApprovalEvent.InputTuple,
      ApprovalEvent.OutputTuple,
      ApprovalEvent.OutputObject
    >;

    "Burn(address,address,uint256,uint256)": TypedContractEvent<
      BurnEvent.InputTuple,
      BurnEvent.OutputTuple,
      BurnEvent.OutputObject
    >;
    Burn: TypedContractEvent<
      BurnEvent.InputTuple,
      BurnEvent.OutputTuple,
      BurnEvent.OutputObject
    >;

    "Mint(address,address,address,uint256,uint256)": TypedContractEvent<
      MintEvent.InputTuple,
      MintEvent.OutputTuple,
      MintEvent.OutputObject
    >;
    Mint: TypedContractEvent<
      MintEvent.InputTuple,
      MintEvent.OutputTuple,
      MintEvent.OutputObject
    >;

    "NewInterestIndex(uint256)": TypedContractEvent<
      NewInterestIndexEvent.InputTuple,
      NewInterestIndexEvent.OutputTuple,
      NewInterestIndexEvent.OutputObject
    >;
    NewInterestIndex: TypedContractEvent<
      NewInterestIndexEvent.InputTuple,
      NewInterestIndexEvent.OutputTuple,
      NewInterestIndexEvent.OutputObject
    >;

    "RedeemInterest(address,uint256)": TypedContractEvent<
      RedeemInterestEvent.InputTuple,
      RedeemInterestEvent.OutputTuple,
      RedeemInterestEvent.OutputObject
    >;
    RedeemInterest: TypedContractEvent<
      RedeemInterestEvent.InputTuple,
      RedeemInterestEvent.OutputTuple,
      RedeemInterestEvent.OutputObject
    >;

    "RedeemRewards(address,uint256[])": TypedContractEvent<
      RedeemRewardsEvent.InputTuple,
      RedeemRewardsEvent.OutputTuple,
      RedeemRewardsEvent.OutputObject
    >;
    RedeemRewards: TypedContractEvent<
      RedeemRewardsEvent.InputTuple,
      RedeemRewardsEvent.OutputTuple,
      RedeemRewardsEvent.OutputObject
    >;

    "Transfer(address,address,uint256)": TypedContractEvent<
      TransferEvent.InputTuple,
      TransferEvent.OutputTuple,
      TransferEvent.OutputObject
    >;
    Transfer: TypedContractEvent<
      TransferEvent.InputTuple,
      TransferEvent.OutputTuple,
      TransferEvent.OutputObject
    >;

    "WithdrawFeeToTreasury(uint256[],uint256)": TypedContractEvent<
      WithdrawFeeToTreasuryEvent.InputTuple,
      WithdrawFeeToTreasuryEvent.OutputTuple,
      WithdrawFeeToTreasuryEvent.OutputObject
    >;
    WithdrawFeeToTreasury: TypedContractEvent<
      WithdrawFeeToTreasuryEvent.InputTuple,
      WithdrawFeeToTreasuryEvent.OutputTuple,
      WithdrawFeeToTreasuryEvent.OutputObject
    >;
  };
}
