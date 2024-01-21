/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  InterestManagerYTV3,
  InterestManagerYTV3Interface,
} from "../../../../contracts/core/YieldContractsV3/InterestManagerYTV3";

const _abi = [
  {
    inputs: [],
    name: "globalInterestIndex",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "globalInterestIndexFPT",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "lastGlobalInterestUpdatedDayIndexByOracle",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "lastInterestBlock",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "userInterest",
    outputs: [
      {
        internalType: "uint128",
        name: "index",
        type: "uint128",
      },
      {
        internalType: "uint128",
        name: "accrued",
        type: "uint128",
      },
      {
        internalType: "uint256",
        name: "pyIndex",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "userInterestFPT",
    outputs: [
      {
        internalType: "uint128",
        name: "index",
        type: "uint128",
      },
      {
        internalType: "uint128",
        name: "accrued",
        type: "uint128",
      },
      {
        internalType: "uint256",
        name: "pyIndex",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

export class InterestManagerYTV3__factory {
  static readonly abi = _abi;
  static createInterface(): InterestManagerYTV3Interface {
    return new Interface(_abi) as InterestManagerYTV3Interface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): InterestManagerYTV3 {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as InterestManagerYTV3;
  }
}
