import { ethers, ContractFactory, Contract } from 'ethers'
import { keccak256 } from 'ethers/lib/utils'
import MerkleTree from 'merkletreejs'
import { DayRange } from 'react-modern-calendar-datepicker'
import NFTABI from '../data/LibreNFT721.json'
import { getDate, getUnixTime } from '../util/date'

const { v4: uuidv4 } = require('uuid')

class NFTService {
  static async mintNFT(cid: string, config: any, name: string, rentable: DayRange, timeframe: DayRange, imageURL: string, propsJson: string) {
    let deployProps: DeployProps = {
      cid: cid,
      config: config,
      name: name,
      rentable: rentable,
      timeframe: timeframe,
    }

    console.log(`Rentable: ${deployProps.config.rentable}`)

    const contract = await deployNFT(deployProps)

    const contractAbiUuid = uuidv4()
    const postDeployProps = await setupPostDeployProps(contract, config.whitelist, contractAbiUuid, cid, imageURL, propsJson)

    console.log(postDeployProps)

    let response = await saveDeployData(postDeployProps);

    console.log(response);

    return contract
  }

  static async putOnSale(contractAddress: string, tokenAbi: any, connection: any, price: number, tokenId: number) {
    console.log(`Contract Address: ${contractAddress}`)
    console.log(`connection: ${connection}`)
    console.log(`tokenId: ${tokenId}`)
    console.log(`price: ${price}`)
    console.log(`price: ${ethers.utils.parseEther(String(price))}`)
    const tokenContract = new ethers.Contract(contractAddress, tokenAbi, connection)
    const signer = connection.getSigner()
    const contract = tokenContract.connect(signer)

    const setOnSaleTransaction = await contract.setOnSale(tokenId, true)
    const onSaleData = Promise.resolve(setOnSaleTransaction)
    onSaleData.then(value => {
      console.log(value)
    })

    const setPriceTransaction = await contract.setPrice(tokenId, ethers.utils.parseEther(String(price)))
    const setPriceData = Promise.resolve(setPriceTransaction)
    setPriceData.then(value => {
      console.log(value)
    })
  }

  static async safeTransferFrom(contractAddress: string, tokenAbi: any, connection: any, from: string, to: string, id: number) {
    console.log(`Contract Address: ${contractAddress}`)
    console.log(`from: ${from}`)
    console.log(`to: ${to}`)
    console.log(`id: ${id}`)
    const tokenContract = new ethers.Contract(contractAddress, tokenAbi, connection)
    const signer = connection.getSigner()
    const contract = tokenContract.connect(signer)
    const transfer = await contract['safeTransferFrom(address,address,uint256)'](from, to, id)
    const transferData = Promise.resolve(transfer)
    transferData.then(value => {
      console.log(value)
    })
  }

  static async mintTo(contractAddress: string, tokenAbi: any, connection: any, from: string, to: string, id: number, price: number) {
    console.log(`Contract Address: ${contractAddress}`)
    console.log(`from: ${from}`)
    console.log(`to: ${to}`)
    console.log(`id: ${id}`)
    console.log(`price: ${ethers.utils.parseEther(String(price))}`)
    const tokenContract = new ethers.Contract(contractAddress, tokenAbi, connection)
    const signer = connection.getSigner()
    const contract = tokenContract.connect(signer)
    //let _merkleProof = ethers.utils.formatBytes32String("")
    let _merkleProof : String[] = []
    const mint = await contract.mintTo(id, to, _merkleProof, {value: ethers.utils.parseEther("1")})
    const mintData = Promise.resolve(mint)
    mintData.then(value => {
      console.log(value)
    })
  }

  static async getTokenProps(contractAddress: string, tokenAbi: any, connection: any, id: number) {
    console.log(`getTokenProps for Contract Address: ${contractAddress}`)
    const tokenContract = new ethers.Contract(contractAddress, tokenAbi, connection)
    const signer = connection.getSigner()
    const contract = tokenContract.connect(signer)
    const props = await contract.getTokenProps(id)

    return props
  }

  static async getContractOwner(contractAddress: string, tokenAbi: any, connection: any) {
    console.log(`Contract Address: ${contractAddress}`)
    const tokenContract = new ethers.Contract(contractAddress, tokenAbi, connection)
    const signer = connection.getSigner()
    const contract = tokenContract.connect(signer)
    const owner = await contract.owner()

    return owner
  } 

  static async getTokenOwner(contractAddress: string, tokenAbi: any, connection: any, id: number ){
    console.log(`Contract Address: ${contractAddress}`)
    const tokenContract = new ethers.Contract(contractAddress, tokenAbi, connection)
    const signer = connection.getSigner()
    const contract = tokenContract.connect(signer)
    try {
      let owner
      await contract.ownerOf(id)
      .then((tokenOwner:string)=> {
        console.log(tokenOwner)
        owner = tokenOwner
      }, (error:any) => {
        if(error.message.indexOf('invalid token ID') > -1){
          owner = ethers.utils.getAddress('0x0000000000000000000000000000000000000000')
          console.log('TokenID Not Minted')
        }
      })
      return owner
    }
    catch(error) {
      return ethers.utils.getAddress('0x0000000000000000000000000000000000000000')
    }
    
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

  const timeframeFrom =
    getUnixTime(
      getDate(
        Number(props.timeframe.from && props.timeframe.from.month),
        Number(props.timeframe.from && props.timeframe.from.day),
        Number(props.timeframe.from && props.timeframe.from.year),
      ),
    ) || 0
  const timeframeTo =
    getUnixTime(
      getDate(
        Number(props.timeframe.to && props.timeframe.to.month),
        Number(props.timeframe.to && props.timeframe.to.day),
        Number(props.timeframe.to && props.timeframe.to.year),
      ),
    ) || 0

  const rentableFrom =
    getUnixTime(
      getDate(
        Number(props.rentable.from && props.rentable.from.month),
        Number(props.rentable.from && props.rentable.from.day),
        Number(props.rentable.from && props.rentable.from.year),
      ),
    ) || 0
  const rentableTo =
    getUnixTime(
      getDate(
        Number(props.rentable.to && props.rentable.to.month),
        Number(props.rentable.to && props.rentable.to.day),
        Number(props.rentable.to && props.rentable.to.year),
      ),
    ) || 0

  console.log(`Payment token: ${props.config.payment_token}`)

  const contract = await factory.deploy(props.name, 'IAMM', 'ipfs://', props.cid, {
    _unlockable: props.config.unlockable,
    _transferable: props.config.transferable,
    _tokenPrice: props.config.price,
    _rentable: props.config.rentable,
    _rentableFrom: rentableFrom,
    _rentableTo: rentableTo,
    _fractions: props.config.fractional,
    _timeframeFrom: timeframeFrom,
    _timeframeTo: timeframeTo,
    _paymentToken: props.config.payment_token,
    _whitelist: generateMerkleRoot(props.config.whitelist),
    _isOnSale: false,
    _isTFUnlockable: false,
  })

  return contract
}

const generateMerkleRoot = (whitelist: string[]) => {
  if (whitelist.length == 0) {
    return ethers.constants.HashZero
  } else {
    const leaves = whitelist.map(address => keccak256(address))
    const merkleTree = new MerkleTree(leaves, keccak256, { sortPairs: true })
    return merkleTree
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
  whiteList: string[]  
  //ImageURL
  tokenImageURL: string
  // ipfs cid of metadata
  cid: string
  //metadata json stringified
  metadata: string
}

async function setupPostDeployProps(contract: Contract, whitelist: string[], abiUuid: string, cidProps: string, imageURL: string, propsJson: string): Promise<PostDeployProps> {
  return {
    // Randomly generated uuid for the NFT contract
    uuid: "0336ee50-fe69-40cc-814e-03d762de739d",//uuidv4(),
    address: contract.address,
    ownerAddress: await contract.signer.getAddress(),
    abi: "0336ee50-fe69-40cc-814e-03d762de739d",
    whiteList: whitelist,    
    tokenImageURL: imageURL,
    cid: cidProps,
    metadata: propsJson
  }
}

// Post the deploy props as json body to a backend API using fetch
async function saveDeployData(props: PostDeployProps) {
  const response = await fetch('https://services.iamm.network/api/contracts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(props),
  })

  return response.json()
}

export default NFTService
