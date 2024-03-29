import { useState, useContext, useEffect } from "react";
import LogoIcon from "../../components/Svg/Icons/LogoIcon";
import {
  BackgroundImage,
  ProfileContainer,
  Taps,
  Tap,
  ContentContainer,
  NFTWrap,
  OptsWrap,
  LiOpt
} from "./index.style";
import { SearchIcon, ViewerIcon, ManagementIcon } from "../../components/Svg";
import MenuIcon from "../../components/Svg/Icons/MenuIcon";
import { Container } from "../../components/Layout";
import { Context } from '../../contexts/UserProfile'
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../RoutesData";
import ContractService from "../../services/Contracts"
import { style } from "styled-system";
import { contract } from "../../ts/interfaces/tnft";

const profileData = {
  name: "God Woken",
  tag: "@ckb_profile",
  level: 88,
  jobLevel: 888,
  description:
    "The Modular Game+ Blockchain \nL2 Optimistic Rollup Infrastructure on Nervos",
  joinedDate: "April 2022",
  following: 1,
  followers: 1,
  image: {
    url: "/profile-1.png",
    alt: "profile-image",
  },
  backgroundImage: {
    url: "/profile-1.png",
    alt: "profile-image",
  },
  medals: [
    {
      id: 1,
      url: "/profile-1.png",
      alt: "profile-image",
    },
    {
      id: 2,
      url: "/profile-2.png",
      alt: "profile-image",
    },
    {
      id: 3,
      url: "/profile-1.png",
      alt: "profile-image",
    },
    {
      id: 4,
      url: "/profile-2.png",
      alt: "profile-image",
    },
  ],
};

const ProfileCreatorDashboard = () => {
  const taps = ["Created", "Collected", "Likes", "Impacts", "Activity"];
  const [activeTap, setActiveTap] = useState(taps[0]);
  const { isConnected, userProfilePic, handle, contractAddress, setContractAddress } = useContext(Context)
  const navigate = useNavigate();
  const [accounts, setAccounts] = useState<string[]>([])
  const [contracts, setContracts] = useState<contract[]>([])


  const enum NFTOptions {
    view,
    edit
  }

  const HandleOptions = (option: NFTOptions, address: string, metadata: string) => {

    console.log(option);
    sessionStorage.setItem('contractAddress', address)
    sessionStorage.setItem('contractMetadata', metadata)
    setContractAddress(address)
    switch(option){
      case (NFTOptions.view) :
        navigate(ROUTES.NFT_VIEWER_OWNER)
        break;
      case(NFTOptions.edit) :
      navigate(ROUTES.NFT_SETTINGS)
    }

  }

  useEffect(() => {
    const getContracts = async () => {
      const accountsSer: string[] = await window.ethereum.request({ method: 'eth_requestAccounts' })
      if (accountsSer.length > 0) {
        setAccounts(accountsSer)
        const contractsResp = await ContractService.geOwnerContracts(accountsSer[0])
        const contracts: contract[] = contractsResp.data.map((contract:contract) => {return contract})
        console.log(contracts)
        setContracts(contracts)
      }
    }
    if (isConnected) getContracts()
  }, [isConnected])

  return (
    <Container style={{ width: "100%" }}>
      <ProfileContainer url={userProfilePic}>
        <BackgroundImage url={"/background-1.jpg"} />
        <div className="wrapper">
          <div className="interactionWrap">
            <div className="profileImage" />
            <button>Edit profile</button>
          </div>
          <div className="profileTextWrap">
            <p className="section_1">@{handle}</p>
            <p className="section_2">{handle}</p>
            <div className="section_3">
              <p>
                Com LV {profileData.level} | Job LV {profileData.jobLevel}
              </p>
              <div className="medals">
                {profileData.medals.map((medal) => (
                  <img key={medal.id} src={medal.url} alt={medal.alt} />
                ))}
              </div>
            </div>
            <pre className="section_4">{profileData.description}</pre>
            <div className="section_5">
              <LogoIcon width={15} height={12} />
              <p>Joined {profileData.joinedDate}</p>
            </div>
            <div className="section_6">
              <p>
                <span>{profileData.following}</span> Following
              </p>
              <p>
                <span>{profileData.followers}</span> Followers
              </p>
            </div>
          </div>
        </div>
        <Taps>
          {taps.map((tap) => (
            <Tap
              onClick={() => setActiveTap(tap)}
              key={tap}
              active={activeTap === tap}
            >
              {tap}
            </Tap>
          ))}
        </Taps>
      </ProfileContainer>
      <ContentContainer>
        <div className="search inputWrap wrap">
          <SearchIcon width={20} height={20} />
          <input type="text" placeholder="Search" />
        </div>
        <div className="sort inputWrap wrap">
          <select>
            <option value="">Sort by</option>
          </select>
        </div>
        <div className="nftInput wrap">
          <div className="inputWrap">
            <input type="text" placeholder="nft" value="Single NFTs" />
          </div>
          <button>
            <MenuIcon />
          </button>
        </div>
        <div className="nftContainer">
          {contracts.map((contract) => (
            <NFTWrap url={contract.tokenImageURL}>
            <div className="bg">
              <OptsWrap>
                  <LiOpt value={NFTOptions.view} onClick={(e) => {HandleOptions(NFTOptions.view, contract.address, contract.metadata)}}><ViewerIcon/></LiOpt>
                  <LiOpt value={NFTOptions.view} onClick={(e) => {HandleOptions(NFTOptions.edit, contract.address, contract.metadata)}}><ManagementIcon/></LiOpt>
              </OptsWrap>
            </div>
            <div className="content">
              <p>Collection Name</p>
              <p>{JSON.parse(contract.metadata)?.name}</p>
            </div>
          </NFTWrap>
          ))}
          {/* <NFTWrap url="/background-1.jpg">
            <div className="bg">
              <OptsWrap>
                  <LiOpt value={NFTOptions.view} onClick={(e) => {HandleOptions(NFTOptions.view)}}><ViewerIcon/></LiOpt>
                  <LiOpt value={NFTOptions.view} onClick={(e) => {HandleOptions(NFTOptions.edit)}}><ManagementIcon/></LiOpt>
              </OptsWrap>
            </div>
            <div className="content">
              <p>Collection Name</p>
              <p>ID #8888</p>
            </div>
          </NFTWrap>
          <NFTWrap url="/background-1.jpg">
            <div className="bg">
              <OptsWrap>
                  <LiOpt value={NFTOptions.view} onClick={(e) => {HandleOptions(NFTOptions.view)}}><ViewerIcon/></LiOpt>
                  <LiOpt value={NFTOptions.view} onClick={(e) => {HandleOptions(NFTOptions.edit)}}><ManagementIcon/></LiOpt>
              </OptsWrap>
            </div>
            <div className="content">
              <p>Token Name</p>
              <p>ID #8888</p>
            </div>
          </NFTWrap> */}
        </div>
      </ContentContainer>
    </Container>
  );
};

export default ProfileCreatorDashboard;
