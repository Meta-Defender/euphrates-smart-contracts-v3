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
} from "../../../common";

export interface EuphratesYieldContractFactoryV2Interface extends Interface {
  getFunction(
    nameOrSignature:
      | "claimOwnership"
      | "expiryDivisor"
      | "getPT"
      | "getYT"
      | "initialize"
      | "initializePTYT"
      | "interestFeeRate"
      | "isPT"
      | "isYT"
      | "maxInterestFeeRate"
      | "maxRewardFeeRate"
      | "owner"
      | "pendingOwner"
      | "rewardFeeRate"
      | "setExpiryDivisor"
      | "setInterestFeeRate"
      | "setRewardFeeRate"
      | "setTreasury"
      | "transferOwnership"
      | "treasury"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "CreateYieldContract"
      | "Initialized"
      | "OwnershipTransferred"
      | "SetExpiryDivisor"
      | "SetInterestFeeRate"
      | "SetRewardFeeRate"
      | "SetTreasury"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "claimOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "expiryDivisor",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getPT",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getYT",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [BigNumberish, BigNumberish, BigNumberish, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "initializePTYT",
    values: [AddressLike, AddressLike, AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "interestFeeRate",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "isPT", values: [AddressLike]): string;
  encodeFunctionData(functionFragment: "isYT", values: [AddressLike]): string;
  encodeFunctionData(
    functionFragment: "maxInterestFeeRate",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "maxRewardFeeRate",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "pendingOwner",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "rewardFeeRate",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setExpiryDivisor",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setInterestFeeRate",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setRewardFeeRate",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setTreasury",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [AddressLike, boolean, boolean]
  ): string;
  encodeFunctionData(functionFragment: "treasury", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "claimOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "expiryDivisor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getPT", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getYT", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "initializePTYT",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "interestFeeRate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "isPT", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "isYT", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "maxInterestFeeRate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "maxRewardFeeRate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "pendingOwner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "rewardFeeRate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setExpiryDivisor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setInterestFeeRate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setRewardFeeRate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setTreasury",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "treasury", data: BytesLike): Result;
}

export namespace CreateYieldContractEvent {
  export type InputTuple = [
    SY: AddressLike,
    expiry: BigNumberish,
    PT: AddressLike,
    YT: AddressLike
  ];
  export type OutputTuple = [
    SY: string,
    expiry: bigint,
    PT: string,
    YT: string
  ];
  export interface OutputObject {
    SY: string;
    expiry: bigint;
    PT: string;
    YT: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace InitializedEvent {
  export type InputTuple = [version: BigNumberish];
  export type OutputTuple = [version: bigint];
  export interface OutputObject {
    version: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace OwnershipTransferredEvent {
  export type InputTuple = [previousOwner: AddressLike, newOwner: AddressLike];
  export type OutputTuple = [previousOwner: string, newOwner: string];
  export interface OutputObject {
    previousOwner: string;
    newOwner: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace SetExpiryDivisorEvent {
  export type InputTuple = [newExpiryDivisor: BigNumberish];
  export type OutputTuple = [newExpiryDivisor: bigint];
  export interface OutputObject {
    newExpiryDivisor: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace SetInterestFeeRateEvent {
  export type InputTuple = [newInterestFeeRate: BigNumberish];
  export type OutputTuple = [newInterestFeeRate: bigint];
  export interface OutputObject {
    newInterestFeeRate: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace SetRewardFeeRateEvent {
  export type InputTuple = [newRewardFeeRate: BigNumberish];
  export type OutputTuple = [newRewardFeeRate: bigint];
  export interface OutputObject {
    newRewardFeeRate: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace SetTreasuryEvent {
  export type InputTuple = [treasury: AddressLike];
  export type OutputTuple = [treasury: string];
  export interface OutputObject {
    treasury: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface EuphratesYieldContractFactoryV2 extends BaseContract {
  connect(runner?: ContractRunner | null): EuphratesYieldContractFactoryV2;
  waitForDeployment(): Promise<this>;

  interface: EuphratesYieldContractFactoryV2Interface;

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

  claimOwnership: TypedContractMethod<[], [void], "nonpayable">;

  expiryDivisor: TypedContractMethod<[], [bigint], "view">;

  getPT: TypedContractMethod<
    [arg0: AddressLike, arg1: BigNumberish],
    [string],
    "view"
  >;

  getYT: TypedContractMethod<
    [arg0: AddressLike, arg1: BigNumberish],
    [string],
    "view"
  >;

  initialize: TypedContractMethod<
    [
      _expiryDivisor: BigNumberish,
      _interestFeeRate: BigNumberish,
      _rewardFeeRate: BigNumberish,
      _treasury: AddressLike
    ],
    [void],
    "nonpayable"
  >;

  initializePTYT: TypedContractMethod<
    [SY: AddressLike, PT: AddressLike, YT: AddressLike, expiry: BigNumberish],
    [void],
    "nonpayable"
  >;

  interestFeeRate: TypedContractMethod<[], [bigint], "view">;

  isPT: TypedContractMethod<[arg0: AddressLike], [boolean], "view">;

  isYT: TypedContractMethod<[arg0: AddressLike], [boolean], "view">;

  maxInterestFeeRate: TypedContractMethod<[], [bigint], "view">;

  maxRewardFeeRate: TypedContractMethod<[], [bigint], "view">;

  owner: TypedContractMethod<[], [string], "view">;

  pendingOwner: TypedContractMethod<[], [string], "view">;

  rewardFeeRate: TypedContractMethod<[], [bigint], "view">;

  setExpiryDivisor: TypedContractMethod<
    [newExpiryDivisor: BigNumberish],
    [void],
    "nonpayable"
  >;

  setInterestFeeRate: TypedContractMethod<
    [newInterestFeeRate: BigNumberish],
    [void],
    "nonpayable"
  >;

  setRewardFeeRate: TypedContractMethod<
    [newRewardFeeRate: BigNumberish],
    [void],
    "nonpayable"
  >;

  setTreasury: TypedContractMethod<
    [newTreasury: AddressLike],
    [void],
    "nonpayable"
  >;

  transferOwnership: TypedContractMethod<
    [newOwner: AddressLike, direct: boolean, renounce: boolean],
    [void],
    "nonpayable"
  >;

  treasury: TypedContractMethod<[], [string], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "claimOwnership"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "expiryDivisor"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "getPT"
  ): TypedContractMethod<
    [arg0: AddressLike, arg1: BigNumberish],
    [string],
    "view"
  >;
  getFunction(
    nameOrSignature: "getYT"
  ): TypedContractMethod<
    [arg0: AddressLike, arg1: BigNumberish],
    [string],
    "view"
  >;
  getFunction(
    nameOrSignature: "initialize"
  ): TypedContractMethod<
    [
      _expiryDivisor: BigNumberish,
      _interestFeeRate: BigNumberish,
      _rewardFeeRate: BigNumberish,
      _treasury: AddressLike
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "initializePTYT"
  ): TypedContractMethod<
    [SY: AddressLike, PT: AddressLike, YT: AddressLike, expiry: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "interestFeeRate"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "isPT"
  ): TypedContractMethod<[arg0: AddressLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "isYT"
  ): TypedContractMethod<[arg0: AddressLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "maxInterestFeeRate"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "maxRewardFeeRate"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "owner"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "pendingOwner"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "rewardFeeRate"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "setExpiryDivisor"
  ): TypedContractMethod<
    [newExpiryDivisor: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setInterestFeeRate"
  ): TypedContractMethod<
    [newInterestFeeRate: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setRewardFeeRate"
  ): TypedContractMethod<
    [newRewardFeeRate: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setTreasury"
  ): TypedContractMethod<[newTreasury: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "transferOwnership"
  ): TypedContractMethod<
    [newOwner: AddressLike, direct: boolean, renounce: boolean],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "treasury"
  ): TypedContractMethod<[], [string], "view">;

  getEvent(
    key: "CreateYieldContract"
  ): TypedContractEvent<
    CreateYieldContractEvent.InputTuple,
    CreateYieldContractEvent.OutputTuple,
    CreateYieldContractEvent.OutputObject
  >;
  getEvent(
    key: "Initialized"
  ): TypedContractEvent<
    InitializedEvent.InputTuple,
    InitializedEvent.OutputTuple,
    InitializedEvent.OutputObject
  >;
  getEvent(
    key: "OwnershipTransferred"
  ): TypedContractEvent<
    OwnershipTransferredEvent.InputTuple,
    OwnershipTransferredEvent.OutputTuple,
    OwnershipTransferredEvent.OutputObject
  >;
  getEvent(
    key: "SetExpiryDivisor"
  ): TypedContractEvent<
    SetExpiryDivisorEvent.InputTuple,
    SetExpiryDivisorEvent.OutputTuple,
    SetExpiryDivisorEvent.OutputObject
  >;
  getEvent(
    key: "SetInterestFeeRate"
  ): TypedContractEvent<
    SetInterestFeeRateEvent.InputTuple,
    SetInterestFeeRateEvent.OutputTuple,
    SetInterestFeeRateEvent.OutputObject
  >;
  getEvent(
    key: "SetRewardFeeRate"
  ): TypedContractEvent<
    SetRewardFeeRateEvent.InputTuple,
    SetRewardFeeRateEvent.OutputTuple,
    SetRewardFeeRateEvent.OutputObject
  >;
  getEvent(
    key: "SetTreasury"
  ): TypedContractEvent<
    SetTreasuryEvent.InputTuple,
    SetTreasuryEvent.OutputTuple,
    SetTreasuryEvent.OutputObject
  >;

  filters: {
    "CreateYieldContract(address,uint256,address,address)": TypedContractEvent<
      CreateYieldContractEvent.InputTuple,
      CreateYieldContractEvent.OutputTuple,
      CreateYieldContractEvent.OutputObject
    >;
    CreateYieldContract: TypedContractEvent<
      CreateYieldContractEvent.InputTuple,
      CreateYieldContractEvent.OutputTuple,
      CreateYieldContractEvent.OutputObject
    >;

    "Initialized(uint8)": TypedContractEvent<
      InitializedEvent.InputTuple,
      InitializedEvent.OutputTuple,
      InitializedEvent.OutputObject
    >;
    Initialized: TypedContractEvent<
      InitializedEvent.InputTuple,
      InitializedEvent.OutputTuple,
      InitializedEvent.OutputObject
    >;

    "OwnershipTransferred(address,address)": TypedContractEvent<
      OwnershipTransferredEvent.InputTuple,
      OwnershipTransferredEvent.OutputTuple,
      OwnershipTransferredEvent.OutputObject
    >;
    OwnershipTransferred: TypedContractEvent<
      OwnershipTransferredEvent.InputTuple,
      OwnershipTransferredEvent.OutputTuple,
      OwnershipTransferredEvent.OutputObject
    >;

    "SetExpiryDivisor(uint256)": TypedContractEvent<
      SetExpiryDivisorEvent.InputTuple,
      SetExpiryDivisorEvent.OutputTuple,
      SetExpiryDivisorEvent.OutputObject
    >;
    SetExpiryDivisor: TypedContractEvent<
      SetExpiryDivisorEvent.InputTuple,
      SetExpiryDivisorEvent.OutputTuple,
      SetExpiryDivisorEvent.OutputObject
    >;

    "SetInterestFeeRate(uint256)": TypedContractEvent<
      SetInterestFeeRateEvent.InputTuple,
      SetInterestFeeRateEvent.OutputTuple,
      SetInterestFeeRateEvent.OutputObject
    >;
    SetInterestFeeRate: TypedContractEvent<
      SetInterestFeeRateEvent.InputTuple,
      SetInterestFeeRateEvent.OutputTuple,
      SetInterestFeeRateEvent.OutputObject
    >;

    "SetRewardFeeRate(uint256)": TypedContractEvent<
      SetRewardFeeRateEvent.InputTuple,
      SetRewardFeeRateEvent.OutputTuple,
      SetRewardFeeRateEvent.OutputObject
    >;
    SetRewardFeeRate: TypedContractEvent<
      SetRewardFeeRateEvent.InputTuple,
      SetRewardFeeRateEvent.OutputTuple,
      SetRewardFeeRateEvent.OutputObject
    >;

    "SetTreasury(address)": TypedContractEvent<
      SetTreasuryEvent.InputTuple,
      SetTreasuryEvent.OutputTuple,
      SetTreasuryEvent.OutputObject
    >;
    SetTreasury: TypedContractEvent<
      SetTreasuryEvent.InputTuple,
      SetTreasuryEvent.OutputTuple,
      SetTreasuryEvent.OutputObject
    >;
  };
}
