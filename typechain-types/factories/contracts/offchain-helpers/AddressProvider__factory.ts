/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../common";
import type {
  AddressProvider,
  AddressProviderInterface,
} from "../../../contracts/offchain-helpers/AddressProvider";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint8",
        name: "version",
        type: "uint8",
      },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [],
    name: "claimOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "get",
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
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
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
    name: "pendingOwner",
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
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "addr",
        type: "address",
      },
    ],
    name: "set",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
      {
        internalType: "bool",
        name: "direct",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "renounce",
        type: "bool",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50610765806100206000396000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c80638129fc1c1161005b5780638129fc1c146100b25780638da5cb5b146100ba5780639507d39a146100e9578063e30c39781461011257600080fd5b8063078dfbe7146100825780632f30c6f6146100975780634e71e0c8146100aa575b600080fd5b6100956100903660046106a7565b610125565b005b6100956100a53660046106ea565b61028b565b610095610320565b6100956103ea565b6000546100cd906001600160a01b031681565b6040516001600160a01b03909116815260200160405180910390f35b6100cd6100f7366004610716565b6032602052600090815260409020546001600160a01b031681565b6001546100cd906001600160a01b031681565b6000546001600160a01b031633146101845760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064015b60405180910390fd5b811561025c576001600160a01b03831615158061019e5750805b6101ea5760405162461bcd60e51b815260206004820152601560248201527f4f776e61626c653a207a65726f20616464726573730000000000000000000000604482015260640161017b565b600080546040516001600160a01b03808716939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080546001600160a01b03851673ffffffffffffffffffffffffffffffffffffffff1991821617909155600180549091169055505050565b600180546001600160a01b03851673ffffffffffffffffffffffffffffffffffffffff19909116179055505050565b6000546001600160a01b031633146102e55760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161017b565b600091825260326020526040909120805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b03909216919091179055565b6001546001600160a01b031633811461037b5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c657220213d2070656e64696e67206f776e6572604482015260640161017b565b600080546040516001600160a01b03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080546001600160a01b0390921673ffffffffffffffffffffffffffffffffffffffff19928316179055600180549091169055565b6001547501000000000000000000000000000000000000000000900460ff161580801561043357506001805474010000000000000000000000000000000000000000900460ff16105b806104645750303b15801561046457506001805474010000000000000000000000000000000000000000900460ff16145b6104d65760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201527f647920696e697469616c697a6564000000000000000000000000000000000000606482015260840161017b565b600180547fffffffffffffffffffffff00ffffffffffffffffffffffffffffffffffffffff1674010000000000000000000000000000000000000000179055801561055c57600180547fffffffffffffffffffff00ffffffffffffffffffffffffffffffffffffffffff1675010000000000000000000000000000000000000000001790555b6105646105c9565b80156105c657600180547fffffffffffffffffffff00ffffffffffffffffffffffffffffffffffffffffff1681556040519081527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b50565b6001547501000000000000000000000000000000000000000000900460ff1661065a5760405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201527f6e697469616c697a696e67000000000000000000000000000000000000000000606482015260840161017b565b6000805473ffffffffffffffffffffffffffffffffffffffff191633179055565b80356001600160a01b038116811461069257600080fd5b919050565b8035801515811461069257600080fd5b6000806000606084860312156106bc57600080fd5b6106c58461067b565b92506106d360208501610697565b91506106e160408501610697565b90509250925092565b600080604083850312156106fd57600080fd5b8235915061070d6020840161067b565b90509250929050565b60006020828403121561072857600080fd5b503591905056fea2646970667358221220e4b7ed923e09830795539ddcc0db0bfae97ae8bd60927d0f3779613c167691f764736f6c63430008110033";

type AddressProviderConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: AddressProviderConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class AddressProvider__factory extends ContractFactory {
  constructor(...args: AddressProviderConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      AddressProvider & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): AddressProvider__factory {
    return super.connect(runner) as AddressProvider__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AddressProviderInterface {
    return new Interface(_abi) as AddressProviderInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): AddressProvider {
    return new Contract(address, _abi, runner) as unknown as AddressProvider;
  }
}
