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
} from "../../common";

export interface IApeStakingInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "addressPosition"
      | "apeCoin"
      | "claimSelfApeCoin"
      | "depositSelfApeCoin"
      | "pendingRewards"
      | "pools"
      | "withdrawApeCoin"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "addressPosition",
    values: [AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "apeCoin", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "claimSelfApeCoin",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "depositSelfApeCoin",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "pendingRewards",
    values: [BigNumberish, AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "pools", values: [BigNumberish]): string;
  encodeFunctionData(
    functionFragment: "withdrawApeCoin",
    values: [BigNumberish, AddressLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "addressPosition",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "apeCoin", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "claimSelfApeCoin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "depositSelfApeCoin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "pendingRewards",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "pools", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "withdrawApeCoin",
    data: BytesLike
  ): Result;
}

export interface IApeStaking extends BaseContract {
  connect(runner?: ContractRunner | null): IApeStaking;
  waitForDeployment(): Promise<this>;

  interface: IApeStakingInterface;

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

  addressPosition: TypedContractMethod<
    [addr: AddressLike],
    [[bigint, bigint] & { stakedAmount: bigint; rewardsDebt: bigint }],
    "view"
  >;

  apeCoin: TypedContractMethod<[], [string], "view">;

  claimSelfApeCoin: TypedContractMethod<[], [void], "nonpayable">;

  depositSelfApeCoin: TypedContractMethod<
    [_amount: BigNumberish],
    [void],
    "nonpayable"
  >;

  pendingRewards: TypedContractMethod<
    [_poolId: BigNumberish, _address: AddressLike, _tokenId: BigNumberish],
    [bigint],
    "view"
  >;

  pools: TypedContractMethod<
    [id: BigNumberish],
    [[bigint, bigint, bigint, bigint] & { totalStaked: bigint }],
    "view"
  >;

  withdrawApeCoin: TypedContractMethod<
    [_amount: BigNumberish, _recipient: AddressLike],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "addressPosition"
  ): TypedContractMethod<
    [addr: AddressLike],
    [[bigint, bigint] & { stakedAmount: bigint; rewardsDebt: bigint }],
    "view"
  >;
  getFunction(
    nameOrSignature: "apeCoin"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "claimSelfApeCoin"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "depositSelfApeCoin"
  ): TypedContractMethod<[_amount: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "pendingRewards"
  ): TypedContractMethod<
    [_poolId: BigNumberish, _address: AddressLike, _tokenId: BigNumberish],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "pools"
  ): TypedContractMethod<
    [id: BigNumberish],
    [[bigint, bigint, bigint, bigint] & { totalStaked: bigint }],
    "view"
  >;
  getFunction(
    nameOrSignature: "withdrawApeCoin"
  ): TypedContractMethod<
    [_amount: BigNumberish, _recipient: AddressLike],
    [void],
    "nonpayable"
  >;

  filters: {};
}
