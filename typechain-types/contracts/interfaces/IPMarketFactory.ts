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

export interface IPMarketFactoryInterface extends Interface {
  getFunction(
    nameOrSignature: "getMarketConfig" | "isValidMarket"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "CreateNewMarket"
      | "NewMarketConfig"
      | "SetOverriddenFee"
      | "UnsetOverriddenFee"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "getMarketConfig",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "isValidMarket",
    values: [AddressLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "getMarketConfig",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isValidMarket",
    data: BytesLike
  ): Result;
}

export namespace CreateNewMarketEvent {
  export type InputTuple = [
    market: AddressLike,
    PT: AddressLike,
    scalarRoot: BigNumberish,
    initialAnchor: BigNumberish
  ];
  export type OutputTuple = [
    market: string,
    PT: string,
    scalarRoot: bigint,
    initialAnchor: bigint
  ];
  export interface OutputObject {
    market: string;
    PT: string;
    scalarRoot: bigint;
    initialAnchor: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace NewMarketConfigEvent {
  export type InputTuple = [
    treasury: AddressLike,
    defaultLnFeeRateRoot: BigNumberish,
    reserveFeePercent: BigNumberish
  ];
  export type OutputTuple = [
    treasury: string,
    defaultLnFeeRateRoot: bigint,
    reserveFeePercent: bigint
  ];
  export interface OutputObject {
    treasury: string;
    defaultLnFeeRateRoot: bigint;
    reserveFeePercent: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace SetOverriddenFeeEvent {
  export type InputTuple = [
    router: AddressLike,
    lnFeeRateRoot: BigNumberish,
    reserveFeePercent: BigNumberish
  ];
  export type OutputTuple = [
    router: string,
    lnFeeRateRoot: bigint,
    reserveFeePercent: bigint
  ];
  export interface OutputObject {
    router: string;
    lnFeeRateRoot: bigint;
    reserveFeePercent: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace UnsetOverriddenFeeEvent {
  export type InputTuple = [router: AddressLike];
  export type OutputTuple = [router: string];
  export interface OutputObject {
    router: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface IPMarketFactory extends BaseContract {
  connect(runner?: ContractRunner | null): IPMarketFactory;
  waitForDeployment(): Promise<this>;

  interface: IPMarketFactoryInterface;

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

  getMarketConfig: TypedContractMethod<
    [router: AddressLike],
    [
      [string, bigint, bigint] & {
        treasury: string;
        lnFeeRateRoot: bigint;
        reserveFeePercent: bigint;
      }
    ],
    "view"
  >;

  isValidMarket: TypedContractMethod<[market: AddressLike], [boolean], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "getMarketConfig"
  ): TypedContractMethod<
    [router: AddressLike],
    [
      [string, bigint, bigint] & {
        treasury: string;
        lnFeeRateRoot: bigint;
        reserveFeePercent: bigint;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "isValidMarket"
  ): TypedContractMethod<[market: AddressLike], [boolean], "view">;

  getEvent(
    key: "CreateNewMarket"
  ): TypedContractEvent<
    CreateNewMarketEvent.InputTuple,
    CreateNewMarketEvent.OutputTuple,
    CreateNewMarketEvent.OutputObject
  >;
  getEvent(
    key: "NewMarketConfig"
  ): TypedContractEvent<
    NewMarketConfigEvent.InputTuple,
    NewMarketConfigEvent.OutputTuple,
    NewMarketConfigEvent.OutputObject
  >;
  getEvent(
    key: "SetOverriddenFee"
  ): TypedContractEvent<
    SetOverriddenFeeEvent.InputTuple,
    SetOverriddenFeeEvent.OutputTuple,
    SetOverriddenFeeEvent.OutputObject
  >;
  getEvent(
    key: "UnsetOverriddenFee"
  ): TypedContractEvent<
    UnsetOverriddenFeeEvent.InputTuple,
    UnsetOverriddenFeeEvent.OutputTuple,
    UnsetOverriddenFeeEvent.OutputObject
  >;

  filters: {
    "CreateNewMarket(address,address,int256,int256)": TypedContractEvent<
      CreateNewMarketEvent.InputTuple,
      CreateNewMarketEvent.OutputTuple,
      CreateNewMarketEvent.OutputObject
    >;
    CreateNewMarket: TypedContractEvent<
      CreateNewMarketEvent.InputTuple,
      CreateNewMarketEvent.OutputTuple,
      CreateNewMarketEvent.OutputObject
    >;

    "NewMarketConfig(address,uint80,uint8)": TypedContractEvent<
      NewMarketConfigEvent.InputTuple,
      NewMarketConfigEvent.OutputTuple,
      NewMarketConfigEvent.OutputObject
    >;
    NewMarketConfig: TypedContractEvent<
      NewMarketConfigEvent.InputTuple,
      NewMarketConfigEvent.OutputTuple,
      NewMarketConfigEvent.OutputObject
    >;

    "SetOverriddenFee(address,uint80,uint8)": TypedContractEvent<
      SetOverriddenFeeEvent.InputTuple,
      SetOverriddenFeeEvent.OutputTuple,
      SetOverriddenFeeEvent.OutputObject
    >;
    SetOverriddenFee: TypedContractEvent<
      SetOverriddenFeeEvent.InputTuple,
      SetOverriddenFeeEvent.OutputTuple,
      SetOverriddenFeeEvent.OutputObject
    >;

    "UnsetOverriddenFee(address)": TypedContractEvent<
      UnsetOverriddenFeeEvent.InputTuple,
      UnsetOverriddenFeeEvent.OutputTuple,
      UnsetOverriddenFeeEvent.OutputObject
    >;
    UnsetOverriddenFee: TypedContractEvent<
      UnsetOverriddenFeeEvent.InputTuple,
      UnsetOverriddenFeeEvent.OutputTuple,
      UnsetOverriddenFeeEvent.OutputObject
    >;
  };
}
