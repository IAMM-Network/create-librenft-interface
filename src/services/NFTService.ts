import { ethers, ContractFactory, Contract } from 'ethers'
import { keccak256 } from 'ethers/lib/utils';
import MerkleTree from 'merkletreejs';
import { DayRange } from 'react-modern-calendar-datepicker'
import NFTABI from '../data/LibreNFT721.json'
import { getDate, getUnixTime } from '../util/date'

const { v4: uuidv4 } = require('uuid');

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

    const contractAbiUuid = uuidv4();
    const postDeployProps = await setupPostDeployProps(contract, config.whitelist, contractAbiUuid);

    console.log(postDeployProps);

    // let response = await saveDeployData(postDeployProps);

    // console.log(response);

    return contract
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


  const contract = await factory.deploy(
    props.name,
    "IAMM",
    "ipfs://",
    props.cid,
    {
      _unlockable: props.config.unlockable,
      _transferable: props.config.transferable,
      _tokenPrice: props.config.price,
      _rentableFrom: rentableFrom,
      _rentableTo: rentableTo,
      _fractions: props.config.fractional,
      _timeframeFrom: timeframeFrom,
      _timeframeTo: timeframeTo,
      _paymentToken: props.config.payment_token,
      _whitelist: generateMerkleRoot(props.config.whitelist),
      _isOnSale: false,
      _isTFUnlockable: false
    }
  )

  return contract
};

const generateMerkleRoot = (whitelist: string[]) => {
  if (whitelist.length == 0) {
    return ethers.constants.HashZero;
  } else {
    const leaves = whitelist.map(address => keccak256(address));
    const merkleTree = new MerkleTree(leaves, keccak256, { sortPairs: true });
    return merkleTree;
  }
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

// Post the deploy props as json body to a backend API using fetch
async function saveDeployData(props: PostDeployProps) {
  const response = await fetch('https://librenft-profiles.vercel.app/api/contracts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(props)
  })

  return response.json()
}



export default NFTService
