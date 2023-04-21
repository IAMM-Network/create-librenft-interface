import React, { useContext, useState } from 'react'
import { Flex, Grid, Box } from '../../components/Box'
import { Button } from '../../components/Button'
import { Container } from '../../components/Layout'
import { TitleSection, Title, Description, ColumSection, FormLabel, Input } from './styles'
import Header from './components/Header'
import Menu from './components/Menu'
import { useNavigate } from "react-router-dom";
import { Dispatcher, UserProfileLens, profileType, SetDefaultProfileWithSigData, EIP712Signature } from '../../ts/interfaces/tnft'
import { Context } from '../../contexts/UserProfile'
import { BigNumber, BigNumberish, ethers, utils } from 'ethers/lib'
import ProfileService from '../../services/Profiles'
import { defaultAbiCoder, keccak256, solidityPack, toUtf8Bytes, arrayify } from 'ethers/lib/utils'
import sigUtil from '@metamask/eth-sig-util'
import * as ethUtil from '@ethereumjs/util';
import { ROUTES } from '../RoutesData'
import { LoadingIcon } from '../../components/Svg'

const Handle: React.FC = () => {

  enum CreateHandleTypes {
    None,
    CreatingProfile,
    GettingNonce,
    SettingDispatcher
  }

  const getTextStatus = {
    [CreateHandleTypes.None]: 'Confirm',
    [CreateHandleTypes.CreatingProfile]: 'Creating IAMM & Lens profile...',
    [CreateHandleTypes.GettingNonce]: 'Getting Nonce...',
    [CreateHandleTypes.SettingDispatcher]: 'Setting Dispatcher...',
  }

  // Check if is the first time a user opens dashboard
  const [status, setStatus] = useState<CreateHandleTypes>(CreateHandleTypes.None)
  const { userAddress, isCollector, profileId, userProfilePic, setUserAddress, setIsCollector, setProfileId, setUserProfilePic, setIsConnected, handle, setHandle } = useContext(Context)

  const navigate = useNavigate();

  function getDomaninSeparator(name: string, contractAddress: string, chainId: number) {
    return keccak256(
      defaultAbiCoder.encode(
        ["bytes32", "bytes32", "bytes32", "uint256", "address"],
        [
          keccak256(toUtf8Bytes('EIP712Domain(string name,string version,uint256 chainId,address verifyingContract)')),
          keccak256(toUtf8Bytes(name)),
          keccak256(toUtf8Bytes('1')),
          chainId,
          contractAddress
        ]
      )
    );
}

const SET_DISPATCHER_WITH_SIG_TYPEHASH = '0x77ba3e9f5fa75343bbad1241fb539a0064de97694b47d463d1eb5c54aba11f0f';

function getSetDispatcherDigest(
    name: string, 
    address: string, 
    chainId: number,
    setProfile: SetDefaultProfileWithSigData,
    nonce: BigNumberish
){
    
    const DOMAIN_SEPARATOR = getDomaninSeparator(name, address, chainId);

    return keccak256(
      solidityPack(
        ['bytes1', 'bytes1', 'bytes32', 'bytes32'],
        [
          '0x19',
          '0x01',
          DOMAIN_SEPARATOR,
          keccak256(
            defaultAbiCoder.encode(
              ['bytes32', 'uint256', 'address', 'uint256', 'uint256'],
              [
                SET_DISPATCHER_WITH_SIG_TYPEHASH, 
                setProfile.profileId,
                setProfile.dispatcher,
                nonce,
                setProfile.sig.deadline
              ]
            )
          )
        ]
      )
    );

}

function getSetDispatcherTypeHash(
  setProfile: SetDefaultProfileWithSigData,
  nonce: BigNumberish
){
  return keccak256(
    defaultAbiCoder.encode(
      ['bytes32', 'uint256', 'address', 'uint256', 'uint256'],
      [
        SET_DISPATCHER_WITH_SIG_TYPEHASH, 
        setProfile.profileId,
        setProfile.dispatcher,
        nonce,
        setProfile.sig.deadline
      ]
    )
  )
}


const getAccounts = async () => {
  const accounts: string[] = await window.ethereum.request({ method: 'eth_requestAccounts' })
  if (accounts.length > 0) setIsConnected(true)
  return accounts
}

//Create profile and handle
  const handleClick = async () => {

    console.log(handle);
    setStatus(CreateHandleTypes.CreatingProfile);

    if(handle === "") {
      alert('Must specify a handle');
      setStatus(CreateHandleTypes.None);
      return
    }
    
    const chkAddress = utils.getAddress(userAddress);
    const profType = isCollector ? profileType.collector : profileType.creator;

    console.log(`chkAddres: ${chkAddress}`);

    const profileLens: UserProfileLens = {
      publicAddress: chkAddress,
      handle: handle,
      imageURI: 'https://ipfs.io/ipfs/QmSaumNXYoXxb2gGFDDjPaf6SRiKJg2f7bxnTPxjtM1jhC',
      followNFTURI: 'https://ipfs.io/ipfs/QmTFLSXdEQ6qsSzaXaCSNtiv6wA56qq87ytXJ182dXDQJS',
      profileType: profType
    }
    
    //create profile
    const usrProfile = await ProfileService.createUserProfile(profileLens);
    console.log(usrProfile);

    if(usrProfile.status === 'ok'){

      console.log('User Profile Created');

      setUserProfilePic(usrProfile.data.imageURI);
      setProfileId(usrProfile.data.profileId);
      setStatus(CreateHandleTypes.GettingNonce);

      const _profileId = BigNumber.from(usrProfile.data.profileId); // BigNumber.from("34"); //
      const _dispatcher = '0x0AbEf1980B0B7F9Ef0dBC682D969cc96d76CD7eC';
      let _deadline: BigNumber;;
      const _chainId = 71401;
      let _nonce: BigNumber;
      const _contracName = 'Lens Protocol Profiles';
      const _contractAddress = '0x6a258724b4Baa6F9cF7335671C9040333ed60178';

      const getNonceResponse = await ProfileService.getSigNonce(chkAddress);

      if(getNonceResponse) {           

        console.log('Configuring Dispatcher ');
        console.log(_profileId);
        setStatus(CreateHandleTypes.SettingDispatcher);

        _nonce = BigNumber.from(getNonceResponse.data); // BigNumber.from(0); 
        console.log(_nonce);

        const currentTime = Math.floor(Date.now() / 1000);

        const oneDayInSeconds = 86400;
        const blockPlusOneDay = currentTime + oneDayInSeconds;

        _deadline = BigNumber.from(blockPlusOneDay); // BigNumber.from(1682135449); //
        console.log(_deadline);

        const SetProfileSigStr: SetDefaultProfileWithSigData = {
          profileId: _profileId,
          dispatcher: _dispatcher,
          sig: {
            v: 0,
            r: '',
            s: '',
            deadline: _deadline.toNumber(),
          },
        }        

        const EIP712_TYPE_HASH = keccak256(toUtf8Bytes('EIP712Domain(string name,string version,uint256 chainId,address verifyingContract)'));
        const DOMAIN_SEPARATOR = getDomaninSeparator(_contracName, _contractAddress, _chainId); 
        const digest = getSetDispatcherDigest(_contracName, _contractAddress, _chainId, SetProfileSigStr, _nonce);
        const dispatcherTH = getSetDispatcherTypeHash(SetProfileSigStr, _nonce);

        //signature = await signer.signMessage(Buffer.from(digest.slice(2)));

        //EIP712 Permits 

        //type: domain  ["bytes32", "bytes32", "bytes32", "uint256", "address"]
        const domain = [          
          { name: "name", type: "string" },
          { name: "version", type: "string" },
          { name: "chainId", type: "uint256" },
          { name: "verifyingContract", type: "address" },
          { name: "salt", type: "bytes32" }
        ];

        //type: ["bytes32", "bytes32", "bytes32", "uint256", "address"],
        const domainSeparator = [                            
          { name: "name", type: "bytes32" },
          { name: "version", type: "bytes32" },
          { name: "chainId", type: "uint256" },
          { name: "verifyingContract", type: "address" },          
          { name: "salt", type: "bytes32" },
        ]

        //type: ['bytes32', 'uint256', 'address', 'uint256', 'uint256'],
        const dispatcherFunc = [          
          { name: "salt", type: "bytes32" },
          { name: "profileId", type: "uint256" },
          { name: "dispatcher", type: "address" },
          { name: "nonce", type: "uint256" },
          { name: "deadline", type: "uint256" },          
        ]

        //'bytes1', 'bytes1'
        const digestType = [
          // { name: "bone", type: "bytes1" },
          // { name: "btwo", type: "bytes1" },
          //{ name: "domainSeparator", type: "DomainSeparator" },
          { name: "digest", type: "bytes32" },
        ]

        const domainData = {          
          name: _contracName,
          version: '1',
          chainId: _chainId,
          verifyingContract: _contractAddress,
          salt: keccak256(toUtf8Bytes('EIP712Domain(string name,string version,uint256 chainId,address verifyingContract)')),
        };

        const domainSeparatorData = {                   
          name: keccak256(toUtf8Bytes(_contracName)),
          version: keccak256(toUtf8Bytes('1')),
          chainId: _chainId,
          verifyingContract: _contractAddress,
          salt: keccak256(toUtf8Bytes('EIP712Domain(string name,string version,uint256 chainId,address verifyingContract)')),           
        }

        var dispatcherFuncData = {         
            salt: SET_DISPATCHER_WITH_SIG_TYPEHASH, 
            profileId: _profileId.toString(),
            dispatcher: _dispatcher,
            nonce: _nonce.toString(),
            deadline: _deadline.toString(),            
        };

        var message = {
          // bone: '0x19',
          // btwo: '0x01',
          //domainSeparator: domainSeparatorData,
          digest: digest
        }

        const value = {
          types: {
              //EIP712Domain: domain,
              DigestType: digestType
          },
          domain: domainData,
          primaryType: "DigestType",
          message: message
        };

        const data = JSON.stringify(value);

        //EIP712
        //SIGN
        console.log(digest);

        const provider = new ethers.providers.Web3Provider(window.ethereum);
        //const provider = new ethers.providers.BrowserProvider(window.ethereum);
        const signer = provider.getSigner();
        // const from = await getAccounts();

        var _params = [chkAddress.toLowerCase(), data];
        var _method = 'eth_signTypedData_v4';

        console.log(chkAddress);
        let signature = "";
        
        console.log('--Signing--'); 
        signature = await window.ethereum.request({method: _method, params: _params});
        //signature = await signer._signTypedData(domainData, value.types, message);
        //signature = await signer.signMessage(digest);
        //signature = await signer.provider.sendAsync?('eth_signTypedData_V4', [Buffer.from(digest.slice(2), 'hex')]);


        console.log(signature);

        signature = signature.substring(2);
        const _r = "0x" + signature.substring(0, 64);
        const _s = "0x" + signature.substring(64, 128);
        const _v = parseInt(signature.substring(128, 130), 16);
        console.log("r:", _r);
        console.log("s:", _s);
        console.log("v:", _v);

        const _signedMessage: EIP712Signature = {
          v: _v,
          r: _r,
          s: _s,
          deadline: _deadline.toNumber()
        }

        const _dispatcherData: Dispatcher = {
          publicAddress: chkAddress,
          profileId: _profileId.toNumber(),
          dispatcher: _dispatcher,
          chainId: _chainId,
          nonce: _nonce.toNumber(),
          contracName: _contracName,
          contractAddress: _contractAddress,
          signedMessage: _signedMessage
        }

        //await ProfileService.setDispatcher(_dispatcherData);


      }

    }

    navigate(ROUTES.PROFILE_CREATOR_DASHBOARD);
  }

  const validateHandle = (handle: string): boolean => {
    var re = new RegExp("^([a-z0-9]*)$");
    return re.test(handle);
  }

  const setHandleValidated = (event: React.ChangeEvent<HTMLInputElement>) => {

    event.preventDefault();

    if(!validateHandle(event.currentTarget.value)) {
      alert('Add only lowercase characters and and numbers');
      setHandle("")
      return ;
    }

    setHandle(event.target.value);

  }

  

  // If first time is true return that
  return (
    <>
      <Header title='Handle' />
      <Container maxWidth='90%' height='100%'>
        <Flex flexDirection='column' paddingTop='2rem' height='100%'>
          <TitleSection>
            <Title>Type Your handle</Title>
          </TitleSection>
          <Description>Choose wisely, {isCollector? 'collector' : 'creator'}.</Description>
          <Description>After choose your <strong>handle,</strong></Description>
          <Description>you <strong>won’t</strong> be able to change it again.</Description>

          <form>
            <Grid gridTemplateColumns='1fr' gridTemplateRows='1fr 1fr' gridColumnGap='1rem' height='20%' width='90%' maxWidth='90%' paddingTop={50}>              
              <FormLabel><Description>Here you can type one</Description></FormLabel>
              <Input type="text" onChange={e => {setHandleValidated(e)}} id="handleInput" name="handleInput"/>
            </Grid>
            <Grid gridTemplateColumns='1fr' gridTemplateRows='1fr' gridColumnGap='1rem' height='20%' width='90%' maxWidth='90%' paddingTop={100}>       
              <FormLabel><Description>Or you may choose a custom handle</Description></FormLabel>
              <ColumSection>                
                <Input type="text" placeholder='collector452' id="dis" name="dis1" disabled={true} style={{height:32, width:'100%'}} />
                <Input type="text" placeholder='great-collector' id="dis2" name="dis2" disabled={true} style={{width:'100%'}} />
              </ColumSection>
              <ColumSection>                
                <Input type="text" placeholder='lets_create8' id="dis3" name="dis3" disabled={true} style={{width:'100%'}} />
                <Input type="text" placeholder='top.collector' id="dis4" name="dis3" disabled={true} style={{width:'100%'}} />
              </ColumSection>
            </Grid>
            
          </form>
          
          {/* <Flex justifyContent='center' marginTop='3rem' marginBottom='6rem'>
            <Button variant='cta' onClick={handleClick}>CONFIRM</Button>
          </Flex> */}
          <Flex justifyContent='center' marginBottom='0.5rem'>
            <Button
              style={{ width: '100px', height: '40px', justifyContent: 'center', alignItems: 'center' }}
              onClick={status === 0 ? handleClick : () => null}
              variant={status === 0 ? 'cta' : 'secondary'}
            >
              {status !== 0 ? <LoadingIcon width='300%' height='300%' /> : getTextStatus[0]}
            </Button>
          </Flex>
          <Box marginBottom='6rem'>
            <p style={{ color: '#696969' }}>{status !== 0 && getTextStatus[status]}</p>
          </Box>
          
        </Flex>
      </Container>
      <Menu />
    </>
  )
}

export default Handle
