/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  IPMiniDiamond,
  IPMiniDiamondInterface,
} from "../../../contracts/interfaces/IPMiniDiamond";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "selector",
        type: "bytes4",
      },
    ],
    name: "facetAddress",
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
        components: [
          {
            internalType: "address",
            name: "facet",
            type: "address",
          },
          {
            internalType: "bytes4[]",
            name: "selectors",
            type: "bytes4[]",
          },
        ],
        internalType: "struct IPMiniDiamond.SelectorsToFacet[]",
        name: "arr",
        type: "tuple[]",
      },
    ],
    name: "setFacetForSelectors",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class IPMiniDiamond__factory {
  static readonly abi = _abi;
  static createInterface(): IPMiniDiamondInterface {
    return new Interface(_abi) as IPMiniDiamondInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): IPMiniDiamond {
    return new Contract(address, _abi, runner) as unknown as IPMiniDiamond;
  }
}
