import StringKeyPair from '../types/stringKeyPair'
import FileType from '../types/fileType'
import {
  BigNumber,
  BigNumberish,
  BytesLike,
} from "ethers";

interface TNFT {
  name: string
  fileType: FileType
  file: string
  externalLink: string
  description: string
  howSmart: Smart
  impact: Impact
  supply: number
}

export default TNFT

interface Smart {
  ownership: boolean
  timelock: boolean
  generative: boolean
}

interface Impact {
  properties: StringKeyPair[]
  levels: StringKeyPair[]
  stats: StringKeyPair[]
  nsfw: boolean
}

export interface EIP712Signature {
  v: number;
  r: string;
  s: string;
  deadline: number;
}
export interface Dispatcher {    
  publicAddress: string;
  profileId: number;
  dispatcher: string;
  chainId: number;
  nonce: number;
  contracName: string;
  contractAddress: string;
  signedMessage: EIP712Signature;
};

export enum profileType {
  creator = 1,
  collector,
  builder,
  critic
}
export interface UserProfileLens {
  publicAddress: string;
  handle: string;
  imageURI: string;
  followNFTURI: string;
  profileType: profileType;
  profileId?: number;
}


export interface SetDefaultProfileWithSigData {
  profileId: BigNumberish;
  dispatcher: string;
  sig: EIP712Signature;
}