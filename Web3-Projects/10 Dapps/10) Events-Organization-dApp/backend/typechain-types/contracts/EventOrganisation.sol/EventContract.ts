/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../common";

export declare namespace EventContract {
  export type EventStruct = {
    admin: PromiseOrValue<string>;
    name: PromiseOrValue<string>;
    location: PromiseOrValue<string>;
    date: PromiseOrValue<BigNumberish>;
    ticketPrice: PromiseOrValue<BigNumberish>;
    ticketCount: PromiseOrValue<BigNumberish>;
    ticketsAvailable: PromiseOrValue<BigNumberish>;
  };

  export type EventStructOutput = [
    string,
    string,
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber
  ] & {
    admin: string;
    name: string;
    location: string;
    date: BigNumber;
    ticketPrice: BigNumber;
    ticketCount: BigNumber;
    ticketsAvailable: BigNumber;
  };
}

export interface EventContractInterface extends utils.Interface {
  functions: {
    "buyTickets(uint256,uint256)": FunctionFragment;
    "createEvent(string,string,uint256,uint256,uint256)": FunctionFragment;
    "events(uint256)": FunctionFragment;
    "getDate(uint256)": FunctionFragment;
    "getEvent(uint256)": FunctionFragment;
    "nextId()": FunctionFragment;
    "owner()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "tickets(address,uint256)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "transferTickets(uint256,uint256,address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "buyTickets"
      | "createEvent"
      | "events"
      | "getDate"
      | "getEvent"
      | "nextId"
      | "owner"
      | "renounceOwnership"
      | "tickets"
      | "transferOwnership"
      | "transferTickets"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "buyTickets",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "createEvent",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "events",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getDate",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getEvent",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(functionFragment: "nextId", values?: undefined): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "tickets",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "transferTickets",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>
    ]
  ): string;

  decodeFunctionResult(functionFragment: "buyTickets", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "createEvent",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "events", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getDate", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getEvent", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "nextId", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "tickets", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferTickets",
    data: BytesLike
  ): Result;

  events: {
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  OwnershipTransferredEventObject
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface EventContract extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: EventContractInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    buyTickets(
      _id: PromiseOrValue<BigNumberish>,
      _quantity: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    createEvent(
      _name: PromiseOrValue<string>,
      _location: PromiseOrValue<string>,
      _date: PromiseOrValue<BigNumberish>,
      _ticketPrice: PromiseOrValue<BigNumberish>,
      _ticketsCount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    events(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [string, string, string, BigNumber, BigNumber, BigNumber, BigNumber] & {
        admin: string;
        name: string;
        location: string;
        date: BigNumber;
        ticketPrice: BigNumber;
        ticketCount: BigNumber;
        ticketsAvailable: BigNumber;
      }
    >;

    getDate(
      _id: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getEvent(
      _id: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[EventContract.EventStructOutput]>;

    nextId(overrides?: CallOverrides): Promise<[BigNumber]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    tickets(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    transferTickets(
      _id: PromiseOrValue<BigNumberish>,
      _quantity: PromiseOrValue<BigNumberish>,
      _reciever: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  buyTickets(
    _id: PromiseOrValue<BigNumberish>,
    _quantity: PromiseOrValue<BigNumberish>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  createEvent(
    _name: PromiseOrValue<string>,
    _location: PromiseOrValue<string>,
    _date: PromiseOrValue<BigNumberish>,
    _ticketPrice: PromiseOrValue<BigNumberish>,
    _ticketsCount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  events(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<
    [string, string, string, BigNumber, BigNumber, BigNumber, BigNumber] & {
      admin: string;
      name: string;
      location: string;
      date: BigNumber;
      ticketPrice: BigNumber;
      ticketCount: BigNumber;
      ticketsAvailable: BigNumber;
    }
  >;

  getDate(
    _id: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getEvent(
    _id: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<EventContract.EventStructOutput>;

  nextId(overrides?: CallOverrides): Promise<BigNumber>;

  owner(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  tickets(
    arg0: PromiseOrValue<string>,
    arg1: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  transferOwnership(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  transferTickets(
    _id: PromiseOrValue<BigNumberish>,
    _quantity: PromiseOrValue<BigNumberish>,
    _reciever: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    buyTickets(
      _id: PromiseOrValue<BigNumberish>,
      _quantity: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    createEvent(
      _name: PromiseOrValue<string>,
      _location: PromiseOrValue<string>,
      _date: PromiseOrValue<BigNumberish>,
      _ticketPrice: PromiseOrValue<BigNumberish>,
      _ticketsCount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    events(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [string, string, string, BigNumber, BigNumber, BigNumber, BigNumber] & {
        admin: string;
        name: string;
        location: string;
        date: BigNumber;
        ticketPrice: BigNumber;
        ticketCount: BigNumber;
        ticketsAvailable: BigNumber;
      }
    >;

    getDate(
      _id: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getEvent(
      _id: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<EventContract.EventStructOutput>;

    nextId(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    tickets(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    transferTickets(
      _id: PromiseOrValue<BigNumberish>,
      _quantity: PromiseOrValue<BigNumberish>,
      _reciever: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "OwnershipTransferred(address,address)"(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
  };

  estimateGas: {
    buyTickets(
      _id: PromiseOrValue<BigNumberish>,
      _quantity: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    createEvent(
      _name: PromiseOrValue<string>,
      _location: PromiseOrValue<string>,
      _date: PromiseOrValue<BigNumberish>,
      _ticketPrice: PromiseOrValue<BigNumberish>,
      _ticketsCount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    events(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getDate(
      _id: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getEvent(
      _id: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    nextId(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    tickets(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    transferTickets(
      _id: PromiseOrValue<BigNumberish>,
      _quantity: PromiseOrValue<BigNumberish>,
      _reciever: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    buyTickets(
      _id: PromiseOrValue<BigNumberish>,
      _quantity: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    createEvent(
      _name: PromiseOrValue<string>,
      _location: PromiseOrValue<string>,
      _date: PromiseOrValue<BigNumberish>,
      _ticketPrice: PromiseOrValue<BigNumberish>,
      _ticketsCount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    events(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getDate(
      _id: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getEvent(
      _id: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    nextId(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    tickets(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    transferTickets(
      _id: PromiseOrValue<BigNumberish>,
      _quantity: PromiseOrValue<BigNumberish>,
      _reciever: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
