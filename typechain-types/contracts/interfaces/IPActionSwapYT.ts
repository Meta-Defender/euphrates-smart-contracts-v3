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

export type ApproxParamsStruct = {
  guessMin: BigNumberish;
  guessMax: BigNumberish;
  guessOffchain: BigNumberish;
  maxIteration: BigNumberish;
  eps: BigNumberish;
};

export type ApproxParamsStructOutput = [
  guessMin: bigint,
  guessMax: bigint,
  guessOffchain: bigint,
  maxIteration: bigint,
  eps: bigint
] & {
  guessMin: bigint;
  guessMax: bigint;
  guessOffchain: bigint;
  maxIteration: bigint;
  eps: bigint;
};

export type SwapDataStruct = {
  swapType: BigNumberish;
  extRouter: AddressLike;
  extCalldata: BytesLike;
  needScale: boolean;
};

export type SwapDataStructOutput = [
  swapType: bigint,
  extRouter: string,
  extCalldata: string,
  needScale: boolean
] & {
  swapType: bigint;
  extRouter: string;
  extCalldata: string;
  needScale: boolean;
};

export type TokenInputStruct = {
  tokenIn: AddressLike;
  netTokenIn: BigNumberish;
  tokenMintSy: AddressLike;
  bulk: AddressLike;
  euphratesSwap: AddressLike;
  swapData: SwapDataStruct;
};

export type TokenInputStructOutput = [
  tokenIn: string,
  netTokenIn: bigint,
  tokenMintSy: string,
  bulk: string,
  euphratesSwap: string,
  swapData: SwapDataStructOutput
] & {
  tokenIn: string;
  netTokenIn: bigint;
  tokenMintSy: string;
  bulk: string;
  euphratesSwap: string;
  swapData: SwapDataStructOutput;
};

export type TokenOutputStruct = {
  tokenOut: AddressLike;
  minTokenOut: BigNumberish;
  tokenRedeemSy: AddressLike;
  bulk: AddressLike;
  euphratesSwap: AddressLike;
  swapData: SwapDataStruct;
};

export type TokenOutputStructOutput = [
  tokenOut: string,
  minTokenOut: bigint,
  tokenRedeemSy: string,
  bulk: string,
  euphratesSwap: string,
  swapData: SwapDataStructOutput
] & {
  tokenOut: string;
  minTokenOut: bigint;
  tokenRedeemSy: string;
  bulk: string;
  euphratesSwap: string;
  swapData: SwapDataStructOutput;
};

export interface IPActionSwapYTInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "swapExactPtForYt"
      | "swapExactSyForYt"
      | "swapExactTokenForYt"
      | "swapExactYtForPt"
      | "swapExactYtForSy"
      | "swapExactYtForToken"
      | "swapSyForExactYt"
      | "swapYtForExactSy"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic: "SwapPtAndYt" | "SwapYtAndSy" | "SwapYtAndToken"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "swapExactPtForYt",
    values: [
      AddressLike,
      AddressLike,
      BigNumberish,
      BigNumberish,
      ApproxParamsStruct
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "swapExactSyForYt",
    values: [
      AddressLike,
      AddressLike,
      BigNumberish,
      BigNumberish,
      ApproxParamsStruct
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "swapExactTokenForYt",
    values: [
      AddressLike,
      AddressLike,
      BigNumberish,
      ApproxParamsStruct,
      TokenInputStruct
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "swapExactYtForPt",
    values: [
      AddressLike,
      AddressLike,
      BigNumberish,
      BigNumberish,
      ApproxParamsStruct
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "swapExactYtForSy",
    values: [AddressLike, AddressLike, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "swapExactYtForToken",
    values: [AddressLike, AddressLike, BigNumberish, TokenOutputStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "swapSyForExactYt",
    values: [AddressLike, AddressLike, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "swapYtForExactSy",
    values: [
      AddressLike,
      AddressLike,
      BigNumberish,
      BigNumberish,
      ApproxParamsStruct
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "swapExactPtForYt",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "swapExactSyForYt",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "swapExactTokenForYt",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "swapExactYtForPt",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "swapExactYtForSy",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "swapExactYtForToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "swapSyForExactYt",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "swapYtForExactSy",
    data: BytesLike
  ): Result;
}

export namespace SwapPtAndYtEvent {
  export type InputTuple = [
    caller: AddressLike,
    market: AddressLike,
    receiver: AddressLike,
    netPtToAccount: BigNumberish,
    netYtToAccount: BigNumberish
  ];
  export type OutputTuple = [
    caller: string,
    market: string,
    receiver: string,
    netPtToAccount: bigint,
    netYtToAccount: bigint
  ];
  export interface OutputObject {
    caller: string;
    market: string;
    receiver: string;
    netPtToAccount: bigint;
    netYtToAccount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace SwapYtAndSyEvent {
  export type InputTuple = [
    caller: AddressLike,
    market: AddressLike,
    receiver: AddressLike,
    netYtToAccount: BigNumberish,
    netSyToAccount: BigNumberish
  ];
  export type OutputTuple = [
    caller: string,
    market: string,
    receiver: string,
    netYtToAccount: bigint,
    netSyToAccount: bigint
  ];
  export interface OutputObject {
    caller: string;
    market: string;
    receiver: string;
    netYtToAccount: bigint;
    netSyToAccount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace SwapYtAndTokenEvent {
  export type InputTuple = [
    caller: AddressLike,
    market: AddressLike,
    token: AddressLike,
    receiver: AddressLike,
    netYtToAccount: BigNumberish,
    netTokenToAccount: BigNumberish
  ];
  export type OutputTuple = [
    caller: string,
    market: string,
    token: string,
    receiver: string,
    netYtToAccount: bigint,
    netTokenToAccount: bigint
  ];
  export interface OutputObject {
    caller: string;
    market: string;
    token: string;
    receiver: string;
    netYtToAccount: bigint;
    netTokenToAccount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface IPActionSwapYT extends BaseContract {
  connect(runner?: ContractRunner | null): IPActionSwapYT;
  waitForDeployment(): Promise<this>;

  interface: IPActionSwapYTInterface;

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

  swapExactPtForYt: TypedContractMethod<
    [
      receiver: AddressLike,
      market: AddressLike,
      exactPtIn: BigNumberish,
      minYtOut: BigNumberish,
      guessTotalPtToSwap: ApproxParamsStruct
    ],
    [[bigint, bigint] & { netYtOut: bigint; netSyFee: bigint }],
    "nonpayable"
  >;

  swapExactSyForYt: TypedContractMethod<
    [
      receiver: AddressLike,
      market: AddressLike,
      exactSyIn: BigNumberish,
      minYtOut: BigNumberish,
      guessYtOut: ApproxParamsStruct
    ],
    [[bigint, bigint] & { netYtOut: bigint; netSyFee: bigint }],
    "nonpayable"
  >;

  swapExactTokenForYt: TypedContractMethod<
    [
      receiver: AddressLike,
      market: AddressLike,
      minYtOut: BigNumberish,
      guessYtOut: ApproxParamsStruct,
      input: TokenInputStruct
    ],
    [[bigint, bigint] & { netYtOut: bigint; netSyFee: bigint }],
    "payable"
  >;

  swapExactYtForPt: TypedContractMethod<
    [
      receiver: AddressLike,
      market: AddressLike,
      exactYtIn: BigNumberish,
      minPtOut: BigNumberish,
      guessTotalPtSwapped: ApproxParamsStruct
    ],
    [[bigint, bigint] & { netPtOut: bigint; netSyFee: bigint }],
    "nonpayable"
  >;

  swapExactYtForSy: TypedContractMethod<
    [
      receiver: AddressLike,
      market: AddressLike,
      exactYtIn: BigNumberish,
      minSyOut: BigNumberish
    ],
    [[bigint, bigint] & { netSyOut: bigint; netSyFee: bigint }],
    "nonpayable"
  >;

  swapExactYtForToken: TypedContractMethod<
    [
      receiver: AddressLike,
      market: AddressLike,
      netYtIn: BigNumberish,
      output: TokenOutputStruct
    ],
    [[bigint, bigint] & { netTokenOut: bigint; netSyFee: bigint }],
    "nonpayable"
  >;

  swapSyForExactYt: TypedContractMethod<
    [
      receiver: AddressLike,
      market: AddressLike,
      exactYtOut: BigNumberish,
      maxSyIn: BigNumberish
    ],
    [[bigint, bigint] & { netSyIn: bigint; netSyFee: bigint }],
    "nonpayable"
  >;

  swapYtForExactSy: TypedContractMethod<
    [
      receiver: AddressLike,
      market: AddressLike,
      exactSyOut: BigNumberish,
      maxYtIn: BigNumberish,
      guessYtIn: ApproxParamsStruct
    ],
    [[bigint, bigint] & { netYtIn: bigint; netSyFee: bigint }],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "swapExactPtForYt"
  ): TypedContractMethod<
    [
      receiver: AddressLike,
      market: AddressLike,
      exactPtIn: BigNumberish,
      minYtOut: BigNumberish,
      guessTotalPtToSwap: ApproxParamsStruct
    ],
    [[bigint, bigint] & { netYtOut: bigint; netSyFee: bigint }],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "swapExactSyForYt"
  ): TypedContractMethod<
    [
      receiver: AddressLike,
      market: AddressLike,
      exactSyIn: BigNumberish,
      minYtOut: BigNumberish,
      guessYtOut: ApproxParamsStruct
    ],
    [[bigint, bigint] & { netYtOut: bigint; netSyFee: bigint }],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "swapExactTokenForYt"
  ): TypedContractMethod<
    [
      receiver: AddressLike,
      market: AddressLike,
      minYtOut: BigNumberish,
      guessYtOut: ApproxParamsStruct,
      input: TokenInputStruct
    ],
    [[bigint, bigint] & { netYtOut: bigint; netSyFee: bigint }],
    "payable"
  >;
  getFunction(
    nameOrSignature: "swapExactYtForPt"
  ): TypedContractMethod<
    [
      receiver: AddressLike,
      market: AddressLike,
      exactYtIn: BigNumberish,
      minPtOut: BigNumberish,
      guessTotalPtSwapped: ApproxParamsStruct
    ],
    [[bigint, bigint] & { netPtOut: bigint; netSyFee: bigint }],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "swapExactYtForSy"
  ): TypedContractMethod<
    [
      receiver: AddressLike,
      market: AddressLike,
      exactYtIn: BigNumberish,
      minSyOut: BigNumberish
    ],
    [[bigint, bigint] & { netSyOut: bigint; netSyFee: bigint }],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "swapExactYtForToken"
  ): TypedContractMethod<
    [
      receiver: AddressLike,
      market: AddressLike,
      netYtIn: BigNumberish,
      output: TokenOutputStruct
    ],
    [[bigint, bigint] & { netTokenOut: bigint; netSyFee: bigint }],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "swapSyForExactYt"
  ): TypedContractMethod<
    [
      receiver: AddressLike,
      market: AddressLike,
      exactYtOut: BigNumberish,
      maxSyIn: BigNumberish
    ],
    [[bigint, bigint] & { netSyIn: bigint; netSyFee: bigint }],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "swapYtForExactSy"
  ): TypedContractMethod<
    [
      receiver: AddressLike,
      market: AddressLike,
      exactSyOut: BigNumberish,
      maxYtIn: BigNumberish,
      guessYtIn: ApproxParamsStruct
    ],
    [[bigint, bigint] & { netYtIn: bigint; netSyFee: bigint }],
    "nonpayable"
  >;

  getEvent(
    key: "SwapPtAndYt"
  ): TypedContractEvent<
    SwapPtAndYtEvent.InputTuple,
    SwapPtAndYtEvent.OutputTuple,
    SwapPtAndYtEvent.OutputObject
  >;
  getEvent(
    key: "SwapYtAndSy"
  ): TypedContractEvent<
    SwapYtAndSyEvent.InputTuple,
    SwapYtAndSyEvent.OutputTuple,
    SwapYtAndSyEvent.OutputObject
  >;
  getEvent(
    key: "SwapYtAndToken"
  ): TypedContractEvent<
    SwapYtAndTokenEvent.InputTuple,
    SwapYtAndTokenEvent.OutputTuple,
    SwapYtAndTokenEvent.OutputObject
  >;

  filters: {
    "SwapPtAndYt(address,address,address,int256,int256)": TypedContractEvent<
      SwapPtAndYtEvent.InputTuple,
      SwapPtAndYtEvent.OutputTuple,
      SwapPtAndYtEvent.OutputObject
    >;
    SwapPtAndYt: TypedContractEvent<
      SwapPtAndYtEvent.InputTuple,
      SwapPtAndYtEvent.OutputTuple,
      SwapPtAndYtEvent.OutputObject
    >;

    "SwapYtAndSy(address,address,address,int256,int256)": TypedContractEvent<
      SwapYtAndSyEvent.InputTuple,
      SwapYtAndSyEvent.OutputTuple,
      SwapYtAndSyEvent.OutputObject
    >;
    SwapYtAndSy: TypedContractEvent<
      SwapYtAndSyEvent.InputTuple,
      SwapYtAndSyEvent.OutputTuple,
      SwapYtAndSyEvent.OutputObject
    >;

    "SwapYtAndToken(address,address,address,address,int256,int256)": TypedContractEvent<
      SwapYtAndTokenEvent.InputTuple,
      SwapYtAndTokenEvent.OutputTuple,
      SwapYtAndTokenEvent.OutputObject
    >;
    SwapYtAndToken: TypedContractEvent<
      SwapYtAndTokenEvent.InputTuple,
      SwapYtAndTokenEvent.OutputTuple,
      SwapYtAndTokenEvent.OutputObject
    >;
  };
}
