import { ethers, ContractFactory } from 'ethers'
import NFTABI from '../data/LibreNFT721.json'

class NFTService {
  static async mintNFT(cid: string, config: any) {
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const factory = new ContractFactory(NFTABI.abi, NFTABI.bytecode, provider.getSigner())
    
    const contract = await factory.deploy(
      "IAMM",
      "IAMM",
      "ipfs://",
      cid,
      "1",
      config.transferable,
      1670620446,
      1923102842,
      config.fractional,
      1670620446,
      1923102842,
    )

    return contract
  }
}

export default NFTService
