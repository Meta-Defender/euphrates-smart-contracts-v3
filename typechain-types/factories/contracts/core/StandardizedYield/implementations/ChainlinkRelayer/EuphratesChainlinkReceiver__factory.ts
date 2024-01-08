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
  AddressLike,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { NonPayableOverrides } from "../../../../../../common";
import type {
  EuphratesChainlinkReceiver,
  EuphratesChainlinkReceiverInterface,
} from "../../../../../../contracts/core/StandardizedYield/implementations/ChainlinkRelayer/EuphratesChainlinkReceiver";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_lzEndpoint",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "srcChainId",
        type: "uint16",
      },
      {
        internalType: "bytes",
        name: "path",
        type: "bytes",
      },
    ],
    name: "NotFromTrustedRemote",
    type: "error",
  },
  {
    inputs: [],
    name: "OnlyLayerZeroEndpoint",
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
    inputs: [
      {
        internalType: "address",
        name: "_trustedRemoteAddr",
        type: "address",
      },
      {
        internalType: "uint64",
        name: "_trustedRemoteChainId",
        type: "uint64",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "latestAnswer",
    outputs: [
      {
        internalType: "int256",
        name: "",
        type: "int256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "lzEndpoint",
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
        name: "_srcChainId",
        type: "uint16",
      },
      {
        internalType: "bytes",
        name: "_path",
        type: "bytes",
      },
      {
        internalType: "uint64",
        name: "",
        type: "uint64",
      },
      {
        internalType: "bytes",
        name: "_payload",
        type: "bytes",
      },
    ],
    name: "lzReceive",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "trustedRemoteAddr",
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
    name: "trustedRemoteChainId",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60a060405234801561001057600080fd5b5060405161085338038061085383398101604081905261002f91610040565b6001600160a01b0316608052610070565b60006020828403121561005257600080fd5b81516001600160a01b038116811461006957600080fd5b9392505050565b6080516107c161009260003960008181610151015261018b01526107c16000f3fe608060405234801561001057600080fd5b50600436106100715760003560e01c80637e9f1b8f116100505780637e9f1b8f146100ba57806384dc39d214610105578063b353aaa71461014c57600080fd5b80621d3567146100765780631798de811461008b57806350d25bcd1461009e575b600080fd5b6100896100843660046105e0565b610173565b005b61008961009936600461067d565b6102e3565b6100a760015481565b6040519081526020015b60405180910390f35b6000546100e09062010000900473ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016100b1565b60005461013390760100000000000000000000000000000000000000000000900467ffffffffffffffff1681565b60405167ffffffffffffffff90911681526020016100b1565b6100e07f000000000000000000000000000000000000000000000000000000000000000081565b3373ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016146101e2576040517f2ec667eb00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8585858080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061022592508391506104c19050565b60005462010000900473ffffffffffffffffffffffffffffffffffffffff90811691161415806102835750610259826104c8565b600054760100000000000000000000000000000000000000000000900467ffffffffffffffff1614155b156102c75781816040517f8f65f36b0000000000000000000000000000000000000000000000000000000081526004016102be9291906106cb565b60405180910390fd5b60006102d584860186610743565b600155505050505050505050565b600054610100900460ff16158080156103035750600054600160ff909116105b8061031d5750303b15801561031d575060005460ff166001145b6103a9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201527f647920696e697469616c697a656400000000000000000000000000000000000060648201526084016102be565b600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016600117905580156103ea576000805461ff0019166101001790555b600080547fffff00000000000000000000000000000000000000000000000000000000ffff166201000073ffffffffffffffffffffffffffffffffffffffff8616027fffff0000000000000000ffffffffffffffffffffffffffffffffffffffffffff161776010000000000000000000000000000000000000000000067ffffffffffffffff85160217905580156104bc576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b505050565b6014015190565b60008161ffff1661277a036104e0575061a869919050565b8161ffff1661277d036104f7575062013881919050565b8161ffff16606a0361050c575061a86a919050565b8161ffff16606e03610521575061a4b1919050565b8161ffff1660660361053557506038919050565b8161ffff1660650361054957506001919050565b8161ffff1660b50361055e5750611388919050565b8161ffff16606f036105725750600a919050565b61057a61075c565b919050565b60008083601f84011261059157600080fd5b50813567ffffffffffffffff8111156105a957600080fd5b6020830191508360208285010111156105c157600080fd5b9250929050565b803567ffffffffffffffff8116811461057a57600080fd5b600080600080600080608087890312156105f957600080fd5b863561ffff8116811461060b57600080fd5b9550602087013567ffffffffffffffff8082111561062857600080fd5b6106348a838b0161057f565b909750955085915061064860408a016105c8565b9450606089013591508082111561065e57600080fd5b5061066b89828a0161057f565b979a9699509497509295939492505050565b6000806040838503121561069057600080fd5b823573ffffffffffffffffffffffffffffffffffffffff811681146106b457600080fd5b91506106c2602084016105c8565b90509250929050565b61ffff8316815260006020604081840152835180604085015260005b81811015610703578581018301518582016060015282016106e7565b5060006060828601015260607fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f830116850101925050509392505050565b60006020828403121561075557600080fd5b5035919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052600160045260246000fdfea26469706673582212203e84d5351d1d4f94ec2a776cf781410c235fc147dfb246146617958a2d5cfb4864736f6c63430008110033";

type EuphratesChainlinkReceiverConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: EuphratesChainlinkReceiverConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class EuphratesChainlinkReceiver__factory extends ContractFactory {
  constructor(...args: EuphratesChainlinkReceiverConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    _lzEndpoint: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(_lzEndpoint, overrides || {});
  }
  override deploy(
    _lzEndpoint: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(_lzEndpoint, overrides || {}) as Promise<
      EuphratesChainlinkReceiver & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(
    runner: ContractRunner | null
  ): EuphratesChainlinkReceiver__factory {
    return super.connect(runner) as EuphratesChainlinkReceiver__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): EuphratesChainlinkReceiverInterface {
    return new Interface(_abi) as EuphratesChainlinkReceiverInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): EuphratesChainlinkReceiver {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as EuphratesChainlinkReceiver;
  }
}
