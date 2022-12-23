import { ethers, ContractFactory } from 'ethers'
import { DayRange } from 'react-modern-calendar-datepicker'
import NFTABI from '../data/LibreNFT721.json'
import { getDate, getUnixTime } from '../util/date'

class NFTService {
  static async mintNFT(cid: string, config: any, name: string, rentable: DayRange, timeframe: DayRange) {
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const factory = new ContractFactory(NFTABI.abi, NFTABI.bytecode, provider.getSigner())

    const timeframeFrom = getUnixTime(getDate(Number(timeframe.from && timeframe.from.month), Number(timeframe.from && timeframe.from.day), Number(timeframe.from && timeframe.from.year))) || 0
    const timeframeTo = getUnixTime(getDate(Number(timeframe.to && timeframe.to.month), Number(timeframe.to && timeframe.to.day), Number(timeframe.to && timeframe.to.year))) || 0

    const rentableFrom = getUnixTime(getDate(Number(rentable.from && rentable.from.month), Number(rentable.from && rentable.from.day), Number(rentable.from && rentable.from.year))) || 0
    const rentableTo = getUnixTime(getDate(Number(rentable.to && rentable.to.month), Number(rentable.to && rentable.to.day), Number(rentable.to && rentable.to.year))) || 0

    const contract = await factory.deploy(
      name,
      "IAMM",
      "ipfs://",
      cid,
      "1",
      config.transferable,
      rentableFrom,
      rentableTo,
      config.fractional,
      timeframeFrom,
      timeframeTo,
    )

    return contract
  }
}

export default NFTService
