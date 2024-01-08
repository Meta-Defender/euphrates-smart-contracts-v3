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
} from "../../../../../common";

export interface EuphratesChainlinkReceiverInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "initialize"
      | "latestAnswer"
      | "lzEndpoint"
      | "lzReceive"
      | "trustedRemoteAddr"
      | "trustedRemoteChainId"
  ): FunctionFragment;

  getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;

  encodeFunctionData(
    functionFragment: "initialize",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "latestAnswer",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "lzEndpoint",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "lzReceive",
    values: [BigNumberish, BytesLike, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "trustedRemoteAddr",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "trustedRemoteChainId",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "latestAnswer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "lzEndpoint", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "lzReceive", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "trustedRemoteAddr",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "trustedRemoteChainId",
    data: BytesLike
  ): Result;
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

export interface EuphratesChainlinkReceiver extends BaseContract {
  connect(runner?: ContractRunner | null): EuphratesChainlinkReceiver;
  waitForDeployment(): Promise<this>;

  interface: EuphratesChainlinkReceiverInterface;

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

  initialize: TypedContractMethod<
    [_trustedRemoteAddr: AddressLike, _trustedRemoteChainId: BigNumberish],
    [void],
    "nonpayable"
  >;

  latestAnswer: TypedContractMethod<[], [bigint], "view">;

  lzEndpoint: TypedContractMethod<[], [string], "view">;

  lzReceive: TypedContractMethod<
    [
      _srcChainId: BigNumberish,
      _path: BytesLike,
      arg2: BigNumberish,
      _payload: BytesLike
    ],
    [void],
    "nonpayable"
  >;

  trustedRemoteAddr: TypedContractMethod<[], [string], "view">;

  trustedRemoteChainId: TypedContractMethod<[], [bigint], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "initialize"
  ): TypedContractMethod<
    [_trustedRemoteAddr: AddressLike, _trustedRemoteChainId: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "latestAnswer"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "lzEndpoint"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "lzReceive"
  ): TypedContractMethod<
    [
      _srcChainId: BigNumberish,
      _path: BytesLike,
      arg2: BigNumberish,
      _payload: BytesLike
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "trustedRemoteAddr"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "trustedRemoteChainId"
  ): TypedContractMethod<[], [bigint], "view">;

  getEvent(
    key: "Initialized"
  ): TypedContractEvent<
    InitializedEvent.InputTuple,
    InitializedEvent.OutputTuple,
    InitializedEvent.OutputObject
  >;

  filters: {
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
  };
}
