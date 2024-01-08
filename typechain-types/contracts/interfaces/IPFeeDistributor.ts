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

export interface IPFeeDistributorInterface extends Interface {
  getFunction(nameOrSignature: "claimReward" | "getAllPools"): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic: "ClaimReward" | "PoolAdded" | "UpdateFee"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "claimReward",
    values: [AddressLike, AddressLike[]]
  ): string;
  encodeFunctionData(
    functionFragment: "getAllPools",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "claimReward",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAllPools",
    data: BytesLike
  ): Result;
}

export namespace ClaimRewardEvent {
  export type InputTuple = [
    pool: AddressLike,
    user: AddressLike,
    wTime: BigNumberish,
    amount: BigNumberish
  ];
  export type OutputTuple = [
    pool: string,
    user: string,
    wTime: bigint,
    amount: bigint
  ];
  export interface OutputObject {
    pool: string;
    user: string;
    wTime: bigint;
    amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace PoolAddedEvent {
  export type InputTuple = [pool: AddressLike, startWeek: BigNumberish];
  export type OutputTuple = [pool: string, startWeek: bigint];
  export interface OutputObject {
    pool: string;
    startWeek: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace UpdateFeeEvent {
  export type InputTuple = [
    pool: AddressLike,
    wTime: BigNumberish,
    amount: BigNumberish
  ];
  export type OutputTuple = [pool: string, wTime: bigint, amount: bigint];
  export interface OutputObject {
    pool: string;
    wTime: bigint;
    amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface IPFeeDistributor extends BaseContract {
  connect(runner?: ContractRunner | null): IPFeeDistributor;
  waitForDeployment(): Promise<this>;

  interface: IPFeeDistributorInterface;

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

  claimReward: TypedContractMethod<
    [user: AddressLike, pools: AddressLike[]],
    [bigint[]],
    "nonpayable"
  >;

  getAllPools: TypedContractMethod<[], [string[]], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "claimReward"
  ): TypedContractMethod<
    [user: AddressLike, pools: AddressLike[]],
    [bigint[]],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "getAllPools"
  ): TypedContractMethod<[], [string[]], "view">;

  getEvent(
    key: "ClaimReward"
  ): TypedContractEvent<
    ClaimRewardEvent.InputTuple,
    ClaimRewardEvent.OutputTuple,
    ClaimRewardEvent.OutputObject
  >;
  getEvent(
    key: "PoolAdded"
  ): TypedContractEvent<
    PoolAddedEvent.InputTuple,
    PoolAddedEvent.OutputTuple,
    PoolAddedEvent.OutputObject
  >;
  getEvent(
    key: "UpdateFee"
  ): TypedContractEvent<
    UpdateFeeEvent.InputTuple,
    UpdateFeeEvent.OutputTuple,
    UpdateFeeEvent.OutputObject
  >;

  filters: {
    "ClaimReward(address,address,uint256,uint256)": TypedContractEvent<
      ClaimRewardEvent.InputTuple,
      ClaimRewardEvent.OutputTuple,
      ClaimRewardEvent.OutputObject
    >;
    ClaimReward: TypedContractEvent<
      ClaimRewardEvent.InputTuple,
      ClaimRewardEvent.OutputTuple,
      ClaimRewardEvent.OutputObject
    >;

    "PoolAdded(address,uint256)": TypedContractEvent<
      PoolAddedEvent.InputTuple,
      PoolAddedEvent.OutputTuple,
      PoolAddedEvent.OutputObject
    >;
    PoolAdded: TypedContractEvent<
      PoolAddedEvent.InputTuple,
      PoolAddedEvent.OutputTuple,
      PoolAddedEvent.OutputObject
    >;

    "UpdateFee(address,uint256,uint256)": TypedContractEvent<
      UpdateFeeEvent.InputTuple,
      UpdateFeeEvent.OutputTuple,
      UpdateFeeEvent.OutputObject
    >;
    UpdateFee: TypedContractEvent<
      UpdateFeeEvent.InputTuple,
      UpdateFeeEvent.OutputTuple,
      UpdateFeeEvent.OutputObject
    >;
  };
}
