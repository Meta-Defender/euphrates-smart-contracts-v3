/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  IBenQiComptroller,
  IBenQiComptrollerInterface,
} from "../../../contracts/interfaces/IBenQiComptroller";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint8",
        name: "rewardType",
        type: "uint8",
      },
      {
        internalType: "address[]",
        name: "holders",
        type: "address[]",
      },
      {
        internalType: "address[]",
        name: "qiTokens",
        type: "address[]",
      },
      {
        internalType: "bool",
        name: "borrowers",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "suppliers",
        type: "bool",
      },
    ],
    name: "claimReward",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "qiAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint8",
        name: "rewardType",
        type: "uint8",
      },
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "rewardAccrued",
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
] as const;

export class IBenQiComptroller__factory {
  static readonly abi = _abi;
  static createInterface(): IBenQiComptrollerInterface {
    return new Interface(_abi) as IBenQiComptrollerInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): IBenQiComptroller {
    return new Contract(address, _abi, runner) as unknown as IBenQiComptroller;
  }
}
