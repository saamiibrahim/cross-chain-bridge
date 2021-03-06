/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomiclabs/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "ERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20__factory>;
    getContractFactory(
      name: "IERC20Metadata",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20Metadata__factory>;
    getContractFactory(
      name: "IERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20__factory>;
    getContractFactory(
      name: "BridgeBase",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.BridgeBase__factory>;
    getContractFactory(
      name: "BridgeEth",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.BridgeEth__factory>;
    getContractFactory(
      name: "BridgeBsc",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.BridgeBsc__factory>;
    getContractFactory(
      name: "IToken",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IToken__factory>;
    getContractFactory(
      name: "Migrations",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Migrations__factory>;
    getContractFactory(
      name: "TokenBase",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TokenBase__factory>;
    getContractFactory(
      name: "TokenBsc",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TokenBsc__factory>;
    getContractFactory(
      name: "TokenEth",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TokenEth__factory>;

    getContractAt(
      name: "ERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC20>;
    getContractAt(
      name: "IERC20Metadata",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20Metadata>;
    getContractAt(
      name: "IERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20>;
    getContractAt(
      name: "BridgeBase",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.BridgeBase>;
    getContractAt(
      name: "BridgeEth",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.BridgeEth>;
    getContractAt(
      name: "BridgeBsc",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.BridgeBsc>;
    getContractAt(
      name: "IToken",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IToken>;
    getContractAt(
      name: "Migrations",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Migrations>;
    getContractAt(
      name: "TokenBase",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.TokenBase>;
    getContractAt(
      name: "TokenBsc",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.TokenBsc>;
    getContractAt(
      name: "TokenEth",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.TokenEth>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.utils.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string,
      signer?: ethers.Signer
    ): Promise<ethers.Contract>;
  }
}
