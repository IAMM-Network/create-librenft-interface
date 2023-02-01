import { ethers, ContractFactory, Contract } from 'ethers'
import { keccak256 } from 'ethers/lib/utils';
import MerkleTree from 'merkletreejs';
import { DayRange } from 'react-modern-calendar-datepicker'
import NFTABI from '../data/LibreNFT721.json'
import { getDate, getUnixTime } from '../util/date'

class NFTService {
  static async mintNFT(cid: string, config: any, name: string, rentable: DayRange, timeframe: DayRange) {
    let deployProps: DeployProps = {
      cid: cid,
      config: config,
      name: name,
      rentable: rentable,
      timeframe: timeframe
    };

    const contract = await deployNFT(deployProps);

    const postDeployProps = await setupPostDeployProps(contract, config.whitelist, 'random-uuid');

    console.log(postDeployProps);

    await saveDeployData(postDeployProps);
  }
}


interface DeployProps {
  cid: string
  config: any
  name: string
  rentable: DayRange
  timeframe: DayRange
}

async function deployNFT(props: DeployProps): Promise<Contract> {
  const provider = new ethers.providers.Web3Provider(window.ethereum)
  const factory = new ContractFactory(NFTABI.abi, NFTABI.bytecode, provider.getSigner())

  const timeframeFrom = getUnixTime(getDate(Number(props.timeframe.from && props.timeframe.from.month), Number(props.timeframe.from && props.timeframe.from.day), Number(props.timeframe.from && props.timeframe.from.year))) || 0
  const timeframeTo = getUnixTime(getDate(Number(props.timeframe.to && props.timeframe.to.month), Number(props.timeframe.to && props.timeframe.to.day), Number(props.timeframe.to && props.timeframe.to.year))) || 0

  const rentableFrom = getUnixTime(getDate(Number(props.rentable.from && props.rentable.from.month), Number(props.rentable.from && props.rentable.from.day), Number(props.rentable.from && props.rentable.from.year))) || 0
  const rentableTo = getUnixTime(getDate(Number(props.rentable.to && props.rentable.to.month), Number(props.rentable.to && props.rentable.to.day), Number(props.rentable.to && props.rentable.to.year))) || 0

  const whitelistMerkleTree = createMerkleTree(props.config.whitelist);
  const whitelistMerkleRoot = whitelistMerkleTree.getHexRoot();

  const contract = await factory.deploy(
    props.name,
    "IAMM",
    "ipfs://",
    props.cid,
    "1",
    props.config.transferable,
    rentableFrom,
    rentableTo,
    props.config.fractional,
    timeframeFrom,
    timeframeTo,
    whitelistMerkleRoot
  )

  return contract
};

const createMerkleTree = (whitelist: string[]) => {
  const leaves = whitelist.map(address => keccak256(address))
  const merkleTree = new MerkleTree(leaves, keccak256, { sortPairs: true })
  return merkleTree
}


// This matches the IAMM Backend POST Contract API Json body
interface PostDeployProps {
  // Randomly generated UUID for the NFT contract
  uuid: string
  // Deployed NFT contract address
  address: string
  ownerAddress: string
  // UUID of the deployed LibreNFT contract ABI
  abi: string
  // Whitelist of addresses that can mint NFTs
  // required for generating merkle proofs
  whitelist: {
    addresses: string[]
  }
}

async function setupPostDeployProps(contract: Contract, whitelist: string[], abiUuid: string): Promise<PostDeployProps> {

  const { v4: uuidv4 } = require('uuid');

  return {
    // Randomly generated uuid for the NFT contract
    uuid: uuidv4(),
    address: contract.address,
    ownerAddress: await contract.signer.getAddress(),
    abi: abiUuid,
    whitelist: {
      addresses: whitelist
    }
  }
}

// Post the deploy props as json body to a backend API
async function saveDeployData(props: PostDeployProps) {
  const axios = require('axios').default;
  const response = await axios.post('http://localhost:3000/contracts', props);
  console.log(response);
}


export default NFTService
