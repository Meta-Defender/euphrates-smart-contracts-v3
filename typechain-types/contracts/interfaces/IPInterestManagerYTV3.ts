/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
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
} from "../../common";

export interface IPInterestManagerYTV3Interface extends Interface {
  getFunction(nameOrSignature: "userInterest"): FunctionFragment;

  encodeFunctionData(
    functionFragment: "userInterest",
    values: [AddressLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "userInterest",
    data: BytesLike
  ): Result;
}

export interface IPInterestManagerYTV3 extends BaseContract {
  connect(runner?: ContractRunner | null): IPInterestManagerYTV3;
  waitForDeployment(): Promise<this>;

  interface: IPInterestManagerYTV3Interface;

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

  userInterest: TypedContractMethod<
    [user: AddressLike],
    [
      [bigint, bigint, bigint] & {
        lastInterestIndex: bigint;
        accruedInterest: bigint;
        lastPYIndex: bigint;
      }
    ],
    "view"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "userInterest"
  ): TypedContractMethod<
    [user: AddressLike],
    [
      [bigint, bigint, bigint] & {
        lastInterestIndex: bigint;
        accruedInterest: bigint;
        lastPYIndex: bigint;
      }
    ],
    "view"
  >;

  filters: {};
}
