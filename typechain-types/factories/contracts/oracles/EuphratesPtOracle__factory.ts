/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type {
  Signer,
  BigNumberish,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { NonPayableOverrides } from "../../../common";
import type {
  EuphratesPtOracle,
  EuphratesPtOracleInterface,
} from "../../../contracts/oracles/EuphratesPtOracle";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_blockCycleNumerator",
        type: "uint16",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "blockCycleNumerator",
        type: "uint256",
      },
    ],
    name: "InvalidBlockRate",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "duration",
        type: "uint32",
      },
      {
        internalType: "uint32",
        name: "cardinalityRequired",
        type: "uint32",
      },
    ],
    name: "TwapDurationTooLarge",
    type: "error",
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
        indexed: false,
        internalType: "uint16",
        name: "newBlockCycleNumerator",
        type: "uint16",
      },
    ],
    name: "SetBlockCycleNumerator",
    type: "event",
  },
  {
    inputs: [],
    name: "BLOCK_CYCLE_DENOMINATOR",
    outputs: [
      {
        internalType: "uint16",
        name: "",
        type: "uint16",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "blockCycleNumerator",
    outputs: [
      {
        internalType: "uint16",
        name: "",
        type: "uint16",
      },
    ],
    stateMutability: "view",
    type: "function",
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
        internalType: "address",
        name: "market",
        type: "address",
      },
      {
        internalType: "uint32",
        name: "duration",
        type: "uint32",
      },
    ],
    name: "getOracleState",
    outputs: [
      {
        internalType: "bool",
        name: "increaseCardinalityRequired",
        type: "bool",
      },
      {
        internalType: "uint16",
        name: "cardinalityRequired",
        type: "uint16",
      },
      {
        internalType: "bool",
        name: "oldestObservationSatisfied",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "market",
        type: "address",
      },
      {
        internalType: "uint32",
        name: "duration",
        type: "uint32",
      },
    ],
    name: "getPtToAssetRate",
    outputs: [
      {
        internalType: "uint256",
        name: "ptToAssetRate",
        type: "uint256",
      },
    ],
    stateMutability: "view",
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
        internalType: "uint16",
        name: "newBlockCycleNumerator",
        type: "uint16",
      },
    ],
    name: "setBlockCycleNumerator",
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
  "0x60806040523480156200001157600080fd5b5060405162001a7538038062001a758339810160408190526200003491620002f4565b600154600160a81b900460ff16158080156200005b575060018054600160a01b900460ff16105b8062000091575062000078306200018d60201b620006d41760201c565b15801562000091575060018054600160a01b900460ff16145b620000fa5760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b60648201526084015b60405180910390fd5b6001805460ff60a01b1916600160a01b179055801562000128576001805460ff60a81b1916600160a81b1790555b620001326200019c565b6200013d826200021f565b801562000185576001805460ff60a81b191681556040519081527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b505062000321565b6001600160a01b03163b151590565b600154600160a81b900460ff166200020b5760405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201526a6e697469616c697a696e6760a81b6064820152608401620000f1565b600080546001600160a01b03191633179055565b6000546001600160a01b031633146200027b5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401620000f1565b6103e861ffff82161015620002aa57604051632204277360e21b815261ffff82166004820152602401620000f1565b6032805461ffff191661ffff83169081179091556040519081527f30b0568b152eb73b8d1104ca045f37e64f7eae07b09ea9607ab1bdf475012c539060200160405180910390a150565b6000602082840312156200030757600080fd5b815161ffff811681146200031a57600080fd5b9392505050565b61174480620003316000396000f3fe608060405234801561001057600080fd5b50600436106100a35760003560e01c8063873e960011610076578063abca0eab1161005b578063abca0eab1461015e578063e30c39781461017f578063fa040f641461019257600080fd5b8063873e9600146100fe5780638da5cb5b1461013357600080fd5b8063078dfbe7146100a857806340f25951146100bd5780634e71e0c8146100d057806358f6e5a1146100d8575b600080fd5b6100bb6100b6366004611201565b61019b565b005b6100bb6100cb36600461125c565b610301565b6100bb610408565b6032546100e69061ffff1681565b60405161ffff90911681526020015b60405180910390f35b61011161010c36600461128b565b6104d2565b60408051931515845261ffff90921660208401521515908201526060016100f5565b600054610146906001600160a01b031681565b6040516001600160a01b0390911681526020016100f5565b61017161016c36600461128b565b6106b8565b6040519081526020016100f5565b600154610146906001600160a01b031681565b6100e66103e881565b6000546001600160a01b031633146101fa5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064015b60405180910390fd5b81156102d2576001600160a01b0383161515806102145750805b6102605760405162461bcd60e51b815260206004820152601560248201527f4f776e61626c653a207a65726f2061646472657373000000000000000000000060448201526064016101f1565b600080546040516001600160a01b03808716939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080546001600160a01b03851673ffffffffffffffffffffffffffffffffffffffff1991821617909155600180549091169055505050565b600180546001600160a01b03851673ffffffffffffffffffffffffffffffffffffffff19909116179055505050565b6000546001600160a01b0316331461035b5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016101f1565b6103e861ffff821610156103a1576040517f88109dcc00000000000000000000000000000000000000000000000000000000815261ffff821660048201526024016101f1565b603280547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00001661ffff83169081179091556040519081527f30b0568b152eb73b8d1104ca045f37e64f7eae07b09ea9607ab1bdf475012c539060200160405180910390a150565b6001546001600160a01b03163381146104635760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c657220213d2070656e64696e67206f776e657260448201526064016101f1565b600080546040516001600160a01b03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080546001600160a01b0390921673ffffffffffffffffffffffffffffffffffffffff19928316179055600180549091169055565b600080600080600080876001600160a01b031663c3fb90d66040518163ffffffff1660e01b815260040160c060405180830381865afa158015610519573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061053d91906112db565b95509550955050505061054f876106e3565b61ffff80821690831610965094506000806001600160a01b038a1663252c09d78561057b886001611383565b61058591906113b4565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e084901b16815261ffff9091166004820152602401606060405180830381865afa1580156105dc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106009190611400565b925050915080610692576040517f252c09d7000000000000000000000000000000000000000000000000000000008152600060048201526001600160a01b038b169063252c09d790602401606060405180830381865afa158015610668573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061068c9190611400565b50909250505b6106a263ffffffff8a164261143e565b8263ffffffff1610955050505050509250925092565b60006106cd6001600160a01b0384168361075f565b9392505050565b6001600160a01b03163b151590565b603254600090819061ffff166106fb6103e885611451565b6107059190611479565b905061ffff63ffffffff82161115610759576040517f884ad92c00000000000000000000000000000000000000000000000000000000815263ffffffff8085166004830152821660248201526044016101f1565b92915050565b600080600061076d8561079a565b91509150808261077d87876109d3565b610787919061149c565b61079191906114b3565b95945050505050565b600080600080846001600160a01b0316632c8ce6bc6040518163ffffffff1660e01b8152600401606060405180830381865afa1580156107de573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061080291906114c7565b9250509150816001600160a01b0316633ba0b9a96040518163ffffffff1660e01b8152600401602060405180830381865afa158015610845573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108699190611509565b93506000816001600160a01b031663d2a3584e6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156108ab573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108cf9190611509565b9050816001600160a01b031663516399df6040518163ffffffff1660e01b8152600401602060405180830381865afa15801561090f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109339190611522565b80156109b1575043826001600160a01b03166360e0a9e16040518163ffffffff1660e01b8152600401602060405180830381865afa158015610979573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061099d919061153f565b6fffffffffffffffffffffffffffffffff16145b156109be578093506109cb565b6109c88582610aa8565b93505b505050915091565b600080836001600160a01b031663e184c9be6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610a14573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a389190611509565b9050428111610a5257670de0b6b3a7640000915050610759565b6000610a5e8585610abe565b90506000610a6c428461143e565b90506000610a82610a7d8484610c12565b610c53565b9050610a96670de0b6b3a764000082610c66565b945050505050610759565b5092915050565b6000818311610ab757816106cd565b5090919050565b604080516002808252606082018352600092839291906020830190803683370190505090508281600081518110610af757610af7611587565b63ffffffff909216602092830291909101909101526040517f883bdbfd0000000000000000000000000000000000000000000000000000000081526000906001600160a01b0386169063883bdbfd90610b5490859060040161159d565b600060405180830381865afa158015610b71573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610b9991908101906115e7565b90508363ffffffff1681600081518110610bb557610bb5611587565b602002602001015182600181518110610bd057610bd0611587565b6020026020010151610be291906116ac565b610bec91906116e0565b7affffffffffffffffffffffffffffffffffffffffffffffffffffff1695945050505050565b600080610c246201518061016d61149c565b610c2e848661149c565b610c3891906114b3565b9050610c4b610c4682610c95565b610cc4565b949350505050565b600080821215610c6257600080fd5b5090565b600080610c7b670de0b6b3a76400008561149c565b9050828181610c8c57610c8c61139e565b04949350505050565b60007f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821115610c6257600080fd5b60007ffffffffffffffffffffffffffffffffffffffffffffffffdc702bd3a30fc00008212158015610cff575068070c1cc73b00c800008213155b610d4b5760405162461bcd60e51b815260206004820152601060248201527f496e76616c6964206578706f6e656e740000000000000000000000000000000060448201526064016101f1565b6000821215610d8457610d6082600003610cc4565b6ec097ce7bc90715b34b9f100000000081610d7d57610d7d61139e565b0592915050565b60006806f05b59d3b20000008312610dda57507ffffffffffffffffffffffffffffffffffffffffffffffff90fa4a62c4e00000090910190770195e54c5dd42177f53a27172fa9ec630262827000000000610e26565b6803782dace9d90000008312610e2257507ffffffffffffffffffffffffffffffffffffffffffffffffc87d2531627000000909101906b1425982cf597cd205cef7380610e26565b5060015b6064929092029168056bc75e2d6310000068ad78ebc5ac620000008412610e8c577fffffffffffffffffffffffffffffffffffffffffffffff5287143a539e0000009093019268056bc75e2d631000006e01855144814a7ff805980ff008400082020590505b6856bc75e2d6310000008412610ede577fffffffffffffffffffffffffffffffffffffffffffffffa9438a1d29cf0000009093019268056bc75e2d631000006b02df0ab5a80a22c61ab5a70082020590505b682b5e3af16b188000008412610f2e577fffffffffffffffffffffffffffffffffffffffffffffffd4a1c50e94e78000009093019268056bc75e2d63100000693f1fce3da636ea5cf85082020590505b6815af1d78b58c4000008412610f7e577fffffffffffffffffffffffffffffffffffffffffffffffea50e2874a73c000009093019268056bc75e2d63100000690127fa27722cc06cc5e282020590505b680ad78ebc5ac62000008412610fcd577ffffffffffffffffffffffffffffffffffffffffffffffff5287143a539e000009093019268056bc75e2d6310000068280e60114edb805d0382020590505b68056bc75e2d63100000841261101c577ffffffffffffffffffffffffffffffffffffffffffffffffa9438a1d29cf000009093019268056bc75e2d63100000680ebc5fb4174612111082020590505b6802b5e3af16b1880000841261106b577ffffffffffffffffffffffffffffffffffffffffffffffffd4a1c50e94e7800009093019268056bc75e2d631000006808f00f760a4b2db55d82020590505b68015af1d78b58c4000084126110ba577ffffffffffffffffffffffffffffffffffffffffffffffffea50e2874a73c00009093019268056bc75e2d631000006806f5f177578893793782020590505b68056bc75e2d631000008481019085906002908280020505918201919050600368056bc75e2d631000008783020505918201919050600468056bc75e2d631000008783020505918201919050600568056bc75e2d631000008783020505918201919050600668056bc75e2d631000008783020505918201919050600768056bc75e2d631000008783020505918201919050600868056bc75e2d631000008783020505918201919050600968056bc75e2d631000008783020505918201919050600a68056bc75e2d631000008783020505918201919050600b68056bc75e2d631000008783020505918201919050600c68056bc75e2d631000008783020505918201919050606468056bc75e2d63100000848402058502059695505050505050565b6001600160a01b03811681146111f057600080fd5b50565b80151581146111f057600080fd5b60008060006060848603121561121657600080fd5b8335611221816111db565b92506020840135611231816111f3565b91506040840135611241816111f3565b809150509250925092565b61ffff811681146111f057600080fd5b60006020828403121561126e57600080fd5b81356106cd8161124c565b63ffffffff811681146111f057600080fd5b6000806040838503121561129e57600080fd5b82356112a9816111db565b915060208301356112b981611279565b809150509250929050565b8051600f81900b81146112d657600080fd5b919050565b60008060008060008060c087890312156112f457600080fd5b6112fd876112c4565b955061130b602088016112c4565b945060408701516bffffffffffffffffffffffff8116811461132c57600080fd5b606088015190945061133d8161124c565b608088015190935061134e8161124c565b60a088015190925061135f8161124c565b809150509295509295509295565b634e487b7160e01b600052601160045260246000fd5b61ffff818116838216019080821115610aa157610aa161136d565b634e487b7160e01b600052601260045260246000fd5b600061ffff808416806113c9576113c961139e565b92169190910692915050565b80517affffffffffffffffffffffffffffffffffffffffffffffffffffff811681146112d657600080fd5b60008060006060848603121561141557600080fd5b835161142081611279565b925061142e602085016113d5565b91506040840151611241816111f3565b818103818111156107595761075961136d565b63ffffffff8181168382160280821691908281146114715761147161136d565b505092915050565b600063ffffffff808416806114905761149061139e565b92169190910492915050565b80820281158282048414176107595761075961136d565b6000826114c2576114c261139e565b500490565b6000806000606084860312156114dc57600080fd5b83516114e7816111db565b60208501519093506114f8816111db565b6040850151909250611241816111db565b60006020828403121561151b57600080fd5b5051919050565b60006020828403121561153457600080fd5b81516106cd816111f3565b60006020828403121561155157600080fd5b81516fffffffffffffffffffffffffffffffff811681146106cd57600080fd5b634e487b7160e01b600052604160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b6020808252825182820181905260009190848201906040850190845b818110156115db57835163ffffffff16835292840192918401916001016115b9565b50909695505050505050565b600060208083850312156115fa57600080fd5b825167ffffffffffffffff8082111561161257600080fd5b818501915085601f83011261162657600080fd5b81518181111561163857611638611571565b8060051b604051601f19603f8301168101818110858211171561165d5761165d611571565b60405291825284820192508381018501918883111561167b57600080fd5b938501935b828510156116a057611691856113d5565b84529385019392850192611680565b98975050505050505050565b7affffffffffffffffffffffffffffffffffffffffffffffffffffff828116828216039080821115610aa157610aa161136d565b60007affffffffffffffffffffffffffffffffffffffffffffffffffffff808416806114905761149061139e56fea26469706673582212202f0750427d871b6af541d019e0d64fc865086d065825a7be92e966558c32e51664736f6c63430008110033";

type EuphratesPtOracleConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: EuphratesPtOracleConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class EuphratesPtOracle__factory extends ContractFactory {
  constructor(...args: EuphratesPtOracleConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    _blockCycleNumerator: BigNumberish,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(_blockCycleNumerator, overrides || {});
  }
  override deploy(
    _blockCycleNumerator: BigNumberish,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(_blockCycleNumerator, overrides || {}) as Promise<
      EuphratesPtOracle & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): EuphratesPtOracle__factory {
    return super.connect(runner) as EuphratesPtOracle__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): EuphratesPtOracleInterface {
    return new Interface(_abi) as EuphratesPtOracleInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): EuphratesPtOracle {
    return new Contract(address, _abi, runner) as unknown as EuphratesPtOracle;
  }
}
