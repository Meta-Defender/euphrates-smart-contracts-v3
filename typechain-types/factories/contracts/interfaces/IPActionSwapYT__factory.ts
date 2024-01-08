/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  IPActionSwapYT,
  IPActionSwapYTInterface,
} from "../../../contracts/interfaces/IPActionSwapYT";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "caller",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "market",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        indexed: false,
        internalType: "int256",
        name: "netPtToAccount",
        type: "int256",
      },
      {
        indexed: false,
        internalType: "int256",
        name: "netYtToAccount",
        type: "int256",
      },
    ],
    name: "SwapPtAndYt",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "caller",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "market",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        indexed: false,
        internalType: "int256",
        name: "netYtToAccount",
        type: "int256",
      },
      {
        indexed: false,
        internalType: "int256",
        name: "netSyToAccount",
        type: "int256",
      },
    ],
    name: "SwapYtAndSy",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "caller",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "market",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        indexed: false,
        internalType: "int256",
        name: "netYtToAccount",
        type: "int256",
      },
      {
        indexed: false,
        internalType: "int256",
        name: "netTokenToAccount",
        type: "int256",
      },
    ],
    name: "SwapYtAndToken",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        internalType: "address",
        name: "market",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "exactPtIn",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "minYtOut",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "guessMin",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "guessMax",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "guessOffchain",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxIteration",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "eps",
            type: "uint256",
          },
        ],
        internalType: "struct ApproxParams",
        name: "guessTotalPtToSwap",
        type: "tuple",
      },
    ],
    name: "swapExactPtForYt",
    outputs: [
      {
        internalType: "uint256",
        name: "netYtOut",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "netSyFee",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        internalType: "address",
        name: "market",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "exactSyIn",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "minYtOut",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "guessMin",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "guessMax",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "guessOffchain",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxIteration",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "eps",
            type: "uint256",
          },
        ],
        internalType: "struct ApproxParams",
        name: "guessYtOut",
        type: "tuple",
      },
    ],
    name: "swapExactSyForYt",
    outputs: [
      {
        internalType: "uint256",
        name: "netYtOut",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "netSyFee",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        internalType: "address",
        name: "market",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "minYtOut",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "guessMin",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "guessMax",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "guessOffchain",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxIteration",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "eps",
            type: "uint256",
          },
        ],
        internalType: "struct ApproxParams",
        name: "guessYtOut",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "address",
            name: "tokenIn",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "netTokenIn",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "tokenMintSy",
            type: "address",
          },
          {
            internalType: "address",
            name: "bulk",
            type: "address",
          },
          {
            internalType: "address",
            name: "euphratesSwap",
            type: "address",
          },
          {
            components: [
              {
                internalType: "enum SwapType",
                name: "swapType",
                type: "uint8",
              },
              {
                internalType: "address",
                name: "extRouter",
                type: "address",
              },
              {
                internalType: "bytes",
                name: "extCalldata",
                type: "bytes",
              },
              {
                internalType: "bool",
                name: "needScale",
                type: "bool",
              },
            ],
            internalType: "struct SwapData",
            name: "swapData",
            type: "tuple",
          },
        ],
        internalType: "struct TokenInput",
        name: "input",
        type: "tuple",
      },
    ],
    name: "swapExactTokenForYt",
    outputs: [
      {
        internalType: "uint256",
        name: "netYtOut",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "netSyFee",
        type: "uint256",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        internalType: "address",
        name: "market",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "exactYtIn",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "minPtOut",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "guessMin",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "guessMax",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "guessOffchain",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxIteration",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "eps",
            type: "uint256",
          },
        ],
        internalType: "struct ApproxParams",
        name: "guessTotalPtSwapped",
        type: "tuple",
      },
    ],
    name: "swapExactYtForPt",
    outputs: [
      {
        internalType: "uint256",
        name: "netPtOut",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "netSyFee",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        internalType: "address",
        name: "market",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "exactYtIn",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "minSyOut",
        type: "uint256",
      },
    ],
    name: "swapExactYtForSy",
    outputs: [
      {
        internalType: "uint256",
        name: "netSyOut",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "netSyFee",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        internalType: "address",
        name: "market",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "netYtIn",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "address",
            name: "tokenOut",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "minTokenOut",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "tokenRedeemSy",
            type: "address",
          },
          {
            internalType: "address",
            name: "bulk",
            type: "address",
          },
          {
            internalType: "address",
            name: "euphratesSwap",
            type: "address",
          },
          {
            components: [
              {
                internalType: "enum SwapType",
                name: "swapType",
                type: "uint8",
              },
              {
                internalType: "address",
                name: "extRouter",
                type: "address",
              },
              {
                internalType: "bytes",
                name: "extCalldata",
                type: "bytes",
              },
              {
                internalType: "bool",
                name: "needScale",
                type: "bool",
              },
            ],
            internalType: "struct SwapData",
            name: "swapData",
            type: "tuple",
          },
        ],
        internalType: "struct TokenOutput",
        name: "output",
        type: "tuple",
      },
    ],
    name: "swapExactYtForToken",
    outputs: [
      {
        internalType: "uint256",
        name: "netTokenOut",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "netSyFee",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        internalType: "address",
        name: "market",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "exactYtOut",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "maxSyIn",
        type: "uint256",
      },
    ],
    name: "swapSyForExactYt",
    outputs: [
      {
        internalType: "uint256",
        name: "netSyIn",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "netSyFee",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        internalType: "address",
        name: "market",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "exactSyOut",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "maxYtIn",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "guessMin",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "guessMax",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "guessOffchain",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxIteration",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "eps",
            type: "uint256",
          },
        ],
        internalType: "struct ApproxParams",
        name: "guessYtIn",
        type: "tuple",
      },
    ],
    name: "swapYtForExactSy",
    outputs: [
      {
        internalType: "uint256",
        name: "netYtIn",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "netSyFee",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class IPActionSwapYT__factory {
  static readonly abi = _abi;
  static createInterface(): IPActionSwapYTInterface {
    return new Interface(_abi) as IPActionSwapYTInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): IPActionSwapYT {
    return new Contract(address, _abi, runner) as unknown as IPActionSwapYT;
  }
}
