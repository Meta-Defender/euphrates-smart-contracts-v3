/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  AutomationCompatible,
  AutomationCompatibleInterface,
} from "../../../../../@chainlink/contracts/src/v0.8/AutomationCompatible";

const _abi = [
  {
    inputs: [],
    name: "OnlySimulatedBackend",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "checkData",
        type: "bytes",
      },
    ],
    name: "checkUpkeep",
    outputs: [
      {
        internalType: "bool",
        name: "upkeepNeeded",
        type: "bool",
      },
      {
        internalType: "bytes",
        name: "performData",
        type: "bytes",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "performData",
        type: "bytes",
      },
    ],
    name: "performUpkeep",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class AutomationCompatible__factory {
  static readonly abi = _abi;
  static createInterface(): AutomationCompatibleInterface {
    return new Interface(_abi) as AutomationCompatibleInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): AutomationCompatible {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as AutomationCompatible;
  }
}
