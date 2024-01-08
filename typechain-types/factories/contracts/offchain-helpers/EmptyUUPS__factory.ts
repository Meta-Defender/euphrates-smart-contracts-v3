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
  EmptyUUPS,
  EmptyUUPSInterface,
} from "../../../contracts/offchain-helpers/EmptyUUPS";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "previousAdmin",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newAdmin",
        type: "address",
      },
    ],
    name: "AdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "beacon",
        type: "address",
      },
    ],
    name: "BeaconUpgraded",
    type: "event",
  },
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
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "implementation",
        type: "address",
      },
    ],
    name: "Upgraded",
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
    inputs: [],
    name: "proxiableUUID",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
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
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
    ],
    name: "upgradeTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "upgradeToAndCall",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60a06040523060805234801561001457600080fd5b50600154600160a81b900460ff161580801561003b575060018054600160a01b900460ff16105b8061006c57506100543061014d60201b61097c1760201c565b15801561006c575060018054600160a01b900460ff16145b6100d35760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b606482015260840160405180910390fd5b6001805460ff60a01b1916600160a01b1790558015610100576001805460ff60a81b1916600160a81b1790555b8015610147576001805460ff60a81b191681556040519081527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b5061015c565b6001600160a01b03163b151590565b608051611120610193600039600081816102ee0152818161038401528181610555015281816105eb01526106e601526111206000f3fe60806040526004361061007b5760003560e01c806352d1902d1161004e57806352d1902d146100ea5780638129fc1c146101125780638da5cb5b14610127578063e30c39781461015f57600080fd5b8063078dfbe7146100805780633659cfe6146100a25780634e71e0c8146100c25780634f1ef286146100d7575b600080fd5b34801561008c57600080fd5b506100a061009b366004610ee8565b61017f565b005b3480156100ae57600080fd5b506100a06100bd366004610f2b565b6102e4565b3480156100ce57600080fd5b506100a0610481565b6100a06100e5366004610f75565b61054b565b3480156100f657600080fd5b506100ff6106d9565b6040519081526020015b60405180910390f35b34801561011e57600080fd5b506100a061079e565b34801561013357600080fd5b50600054610147906001600160a01b031681565b6040516001600160a01b039091168152602001610109565b34801561016b57600080fd5b50600154610147906001600160a01b031681565b6000546001600160a01b031633146101de5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064015b60405180910390fd5b81156102b6576001600160a01b0383161515806101f85750805b6102445760405162461bcd60e51b815260206004820152601560248201527f4f776e61626c653a207a65726f2061646472657373000000000000000000000060448201526064016101d5565b600080546040516001600160a01b03808716939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080546001600160a01b03851673ffffffffffffffffffffffffffffffffffffffff1991821617909155600180549091169055505050565b6001805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0385161790555b505050565b6001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001630036103825760405162461bcd60e51b815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201527f64656c656761746563616c6c000000000000000000000000000000000000000060648201526084016101d5565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166103dd7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc546001600160a01b031690565b6001600160a01b0316146104595760405162461bcd60e51b815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201527f6163746976652070726f7879000000000000000000000000000000000000000060648201526084016101d5565b6104628161098b565b6040805160008082526020820190925261047e918391906109e5565b50565b6001546001600160a01b03163381146104dc5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c657220213d2070656e64696e67206f776e657260448201526064016101d5565b600080546040516001600160a01b03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080546001600160a01b0390921673ffffffffffffffffffffffffffffffffffffffff19928316179055600180549091169055565b6001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001630036105e95760405162461bcd60e51b815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201527f64656c656761746563616c6c000000000000000000000000000000000000000060648201526084016101d5565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166106447f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc546001600160a01b031690565b6001600160a01b0316146106c05760405162461bcd60e51b815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201527f6163746976652070726f7879000000000000000000000000000000000000000060648201526084016101d5565b6106c98261098b565b6106d5828260016109e5565b5050565b6000306001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146107795760405162461bcd60e51b815260206004820152603860248201527f555550535570677261646561626c653a206d757374206e6f742062652063616c60448201527f6c6564207468726f7567682064656c656761746563616c6c000000000000000060648201526084016101d5565b507f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc90565b6001547501000000000000000000000000000000000000000000900460ff16158080156107e757506001805474010000000000000000000000000000000000000000900460ff16105b806108185750303b15801561081857506001805474010000000000000000000000000000000000000000900460ff16145b61088a5760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201527f647920696e697469616c697a656400000000000000000000000000000000000060648201526084016101d5565b600180547fffffffffffffffffffffff00ffffffffffffffffffffffffffffffffffffffff1674010000000000000000000000000000000000000000179055801561091057600180547fffffffffffffffffffff00ffffffffffffffffffffffffffffffffffffffffff1675010000000000000000000000000000000000000000001790555b610918610b85565b801561047e57600180547fffffffffffffffffffff00ffffffffffffffffffffffffffffffffffffffffff1681556040519081527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a150565b6001600160a01b03163b151590565b6000546001600160a01b0316331461047e5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016101d5565b7f4910fdfa16fed3260ed0e7147f7cc6da11a60208b5b9406d12a635614ffd91435460ff1615610a18576102df83610c37565b826001600160a01b03166352d1902d6040518163ffffffff1660e01b8152600401602060405180830381865afa925050508015610a72575060408051601f3d908101601f19168201909252610a6f91810190611037565b60015b610ae45760405162461bcd60e51b815260206004820152602e60248201527f45524331393637557067726164653a206e657720696d706c656d656e7461746960448201527f6f6e206973206e6f74205555505300000000000000000000000000000000000060648201526084016101d5565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc8114610b795760405162461bcd60e51b815260206004820152602960248201527f45524331393637557067726164653a20756e737570706f727465642070726f7860448201527f6961626c6555554944000000000000000000000000000000000000000000000060648201526084016101d5565b506102df838383610d02565b6001547501000000000000000000000000000000000000000000900460ff16610c165760405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201527f6e697469616c697a696e6700000000000000000000000000000000000000000060648201526084016101d5565b6000805473ffffffffffffffffffffffffffffffffffffffff191633179055565b6001600160a01b0381163b610cb45760405162461bcd60e51b815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201527f6f74206120636f6e74726163740000000000000000000000000000000000000060648201526084016101d5565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0392909216919091179055565b610d0b83610d2d565b600082511180610d185750805b156102df57610d278383610d6d565b50505050565b610d3681610c37565b6040516001600160a01b038216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b6060610d9283836040518060600160405280602781526020016110c460279139610d99565b9392505050565b6060600080856001600160a01b031685604051610db69190611074565b600060405180830381855af49150503d8060008114610df1576040519150601f19603f3d011682016040523d82523d6000602084013e610df6565b606091505b5091509150610e0786838387610e11565b9695505050505050565b60608315610e80578251600003610e79576001600160a01b0385163b610e795760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016101d5565b5081610e8a565b610e8a8383610e92565b949350505050565b815115610ea25781518083602001fd5b8060405162461bcd60e51b81526004016101d59190611090565b80356001600160a01b0381168114610ed357600080fd5b919050565b80358015158114610ed357600080fd5b600080600060608486031215610efd57600080fd5b610f0684610ebc565b9250610f1460208501610ed8565b9150610f2260408501610ed8565b90509250925092565b600060208284031215610f3d57600080fd5b610d9282610ebc565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60008060408385031215610f8857600080fd5b610f9183610ebc565b9150602083013567ffffffffffffffff80821115610fae57600080fd5b818501915085601f830112610fc257600080fd5b813581811115610fd457610fd4610f46565b604051601f8201601f19908116603f01168101908382118183101715610ffc57610ffc610f46565b8160405282815288602084870101111561101557600080fd5b8260208601602083013760006020848301015280955050505050509250929050565b60006020828403121561104957600080fd5b5051919050565b60005b8381101561106b578181015183820152602001611053565b50506000910152565b60008251611086818460208701611050565b9190910192915050565b60208152600082518060208401526110af816040850160208701611050565b601f01601f1916919091016040019291505056fe416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a2646970667358221220767f02da09ce6251b6d3225efb2fbe0d801eee4d7f9386cbc33c0909106c2d9564736f6c63430008110033";

type EmptyUUPSConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: EmptyUUPSConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class EmptyUUPS__factory extends ContractFactory {
  constructor(...args: EmptyUUPSConstructorParams) {
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
      EmptyUUPS & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): EmptyUUPS__factory {
    return super.connect(runner) as EmptyUUPS__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): EmptyUUPSInterface {
    return new Interface(_abi) as EmptyUUPSInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): EmptyUUPS {
    return new Contract(address, _abi, runner) as unknown as EmptyUUPS;
  }
}
