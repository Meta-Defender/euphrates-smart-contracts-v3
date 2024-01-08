/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  IPBulkSeller,
  IPBulkSellerInterface,
} from "../../../contracts/interfaces/IPBulkSeller";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "newFeeRate",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "oldFeeRate",
        type: "uint256",
      },
    ],
    name: "FeeRateUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "newRateTokenToSy",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newRateSyToToken",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "oldRateTokenToSy",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "oldRateSyToToken",
        type: "uint256",
      },
    ],
    name: "RateUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "netSyRedeem",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "netTokenFromSy",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newTokenProp",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "oldTokenProp",
        type: "uint256",
      },
    ],
    name: "ReBalanceSyToToken",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "netTokenDeposit",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "netSyFromToken",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newTokenProp",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "oldTokenProp",
        type: "uint256",
      },
    ],
    name: "ReBalanceTokenToSy",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "totalToken",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "totalSy",
        type: "uint256",
      },
    ],
    name: "ReserveUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "netSyIn",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "netTokenOut",
        type: "uint256",
      },
    ],
    name: "SwapExactSyForToken",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "netTokenIn",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "netSyOut",
        type: "uint256",
      },
    ],
    name: "SwapExactTokenForSy",
    type: "event",
  },
  {
    inputs: [],
    name: "SY",
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
    inputs: [],
    name: "readState",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "rateTokenToSy",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "rateSyToToken",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "totalToken",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "totalSy",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "feeRate",
            type: "uint256",
          },
        ],
        internalType: "struct BulkSellerState",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
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
        internalType: "uint256",
        name: "exactSyIn",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "minTokenOut",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "swapFromInternalBalance",
        type: "bool",
      },
    ],
    name: "swapExactSyForToken",
    outputs: [
      {
        internalType: "uint256",
        name: "netTokenOut",
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
        internalType: "uint256",
        name: "netTokenIn",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "minSyOut",
        type: "uint256",
      },
    ],
    name: "swapExactTokenForSy",
    outputs: [
      {
        internalType: "uint256",
        name: "netSyOut",
        type: "uint256",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "token",
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
] as const;

export class IPBulkSeller__factory {
  static readonly abi = _abi;
  static createInterface(): IPBulkSellerInterface {
    return new Interface(_abi) as IPBulkSellerInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): IPBulkSeller {
    return new Contract(address, _abi, runner) as unknown as IPBulkSeller;
  }
}
