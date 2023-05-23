import { useState, useEffect, useContext } from 'react'
import { Flex } from '../../components/Box'
import { Container } from '../../components/Layout'
import { 
  ThreeDotsVerticalIcon,
  HeartIcon,
  NervosIcon, } from '../../components/Svg'
import Menu from '../Profile/components/Menu'
import { randomIntFromInterval } from '../SocialFeed/data/types'
import Accordion from './components/Accordion'
import BottomMenu from './components/BottomMenu'
import { Context as UserProfile } from '../../contexts/UserProfile'
import NFTABI from '../../data/LibreNFT721.json'
import NFTService from '../../services/NFTService'

import { AcceptOfferButton, Like, LikeCount, NFTTitle, NFTViewerTitle, NFTViewerTitleButton, Offer, Overlay, Text } from './styles'

const ethers = require('ethers')

const TempImage = require('../../assets/images/congrats-img.png')

export type modalMode = 'buyer' | 'owner' | 'putOnSale' | 'acceptOffer' | 'transfer' | 'cancelSale'

const NFTViewer = ({ name, contract, imageCid, mode }: { name: string; contract: string; imageCid: string, mode: 'buyer' | 'owner' }) => {
  const [modalMode, setModalMode] = useState<modalMode>(mode)
  const { isConnected, userAddress, contractAddress } = useContext(UserProfile)
  const [price, setPrice] = useState(0)
  const [paymentToken, setPaymentToken] = useState('pCKB')
  const [putOnSaleDisabled, setPutOnSaleDisabled] = useState(false)
  const [transferDisabled, setTransferDisabled] = useState(false)


  const handleOverlay = () => {
    setModalMode(mode)
  }

  const provider = new ethers.providers.Web3Provider(window.ethereum)

  useEffect(() => {
    const getProps = async () => {
      const props = await NFTService.getTokenProps(contractAddress, NFTABI.abi, provider, 1) //TODO: Get token ID 
      console.log(props)
      let _tokenPrice = props?._tokenPrice? Number(props._tokenPrice/10**18) : 0
      setPrice(_tokenPrice)
      sessionStorage.setItem('tokenPrice', String(_tokenPrice)) 
      console.log(`Token price: ${_tokenPrice}`) 
      props?._paymentToken ? setPaymentToken('pCKB') : setPaymentToken('custom')    
      let _isOnSale = props?._isOnSale

      const contractOwner = await NFTService.getContractOwner(contractAddress, NFTABI.abi, provider)
      console.log(`Contract Owner: ${contractOwner.toLowerCase()} | user Address: ${userAddress.toLowerCase()}`)
      if(userAddress.toLowerCase() !== contractOwner.toLowerCase()) {
        setPutOnSaleDisabled(false)
      } else {
        try {
          //Check if the contract owner is the token owner
          const tokenOwner = await NFTService.getTokenOwner(contractAddress, NFTABI.abi, provider, 1) //TODO: Get token ID 
          console.log(`Token Owner: ${tokenOwner}`)
          if(userAddress.toLowerCase() !== tokenOwner?.toLowerCase() && tokenOwner?.toLowerCase() !== '0x0000000000000000000000000000000000000000'){
            setPutOnSaleDisabled(true)
            setTransferDisabled(true)
            console.log('Put on sale & transfer disabled')
          }
          else {
            setPutOnSaleDisabled(false)
            if(!_isOnSale)
              setTransferDisabled(true)
            else
              setTransferDisabled(false)
          }
        }catch(error) {
          setPutOnSaleDisabled(false)
        }

      }
    }
    if (isConnected) getProps()
  }, [isConnected, contractAddress, provider, userAddress])

  return (
    <>
      <Container>
        <Flex flexDirection='column' alignContent='center' paddingTop='104px' paddingBottom="100px">
          <Flex marginBottom="40px" flexDirection='row' alignContent='center' alignItems='center' justifyContent='space-between'>
              <NFTViewerTitle>Libre NFT Viewer</NFTViewerTitle>
              <NFTViewerTitleButton>
                <ThreeDotsVerticalIcon fill='transparent' width='20px' height='20px' />
              </NFTViewerTitleButton>
          </Flex>

          <Flex marginBottom="20px" flexDirection='row' alignContent='center' alignItems='center' justifyContent='space-between'>
              {/* <NFTTitle>libre NFT #{randomIntFromInterval(0, 10000)}</NFTTitle> */}
              <NFTTitle>{JSON.parse(sessionStorage.getItem('contractMetadata')??'')?.name}</NFTTitle> 
              <Like>
                <HeartIcon fill='transparent' width='14px' height='14px' />
                <LikeCount>{randomIntFromInterval(50, 100)}</LikeCount>
              </Like>
          </Flex>
          
          <img src={JSON.parse(sessionStorage.getItem('contractMetadata')??'')?.image_url} alt='nft-asset' style={{height:320,width:320,alignSelf:'center'}} />

          <Flex margin="20px" flexDirection='row' alignContent='center' alignItems='center' justifyContent='center'>
            <Text weight={400} size='14px' style={{ marginRight: '10px' }}>
              owned by
            </Text>
            <Text weight={700} size='14px'>
              {mode === 'buyer' ? 'Lorem Ipsum' :  'God woken'}
            </Text>
          </Flex>

          <Flex margin="20px 0" flexDirection='column' style={{ gap: '10px' }}>
            <Offer>
              <Flex flexDirection='column'>
                <Text style={{ textAlign: 'left' }}>Token Price</Text>
                <Flex>
                    <NervosIcon width='15px' height='15px'/>
                    <Flex alignItems={'baseline'}>
                      <Text style={{  marginRight: '3px', marginLeft: '5px' }} weight={600} size='21px'>{price}</Text>
                      <Text weight={400} size='12px'>({paymentToken})</Text>
                    </Flex>
                  </Flex>
              </Flex>
              <AcceptOfferButton disabled={true} onClick={() => setModalMode(mode === 'buyer' ? 'buyer' : 'acceptOffer')}>{mode === 'buyer' ? 'MAKE OFFER' :  'ACCEPT OFFER'}</AcceptOfferButton>
            </Offer>
            <Accordion title="Description">
              {JSON.parse(sessionStorage.getItem('contractMetadata')??'')?.description}
            </Accordion>

            <Accordion title="Listings">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
            </Accordion>

            <Accordion title="Offers">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
            </Accordion>

            <Accordion title="Traits">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
            </Accordion>

            <Accordion title="Unlockable content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
            </Accordion>

            <Accordion title="Details">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
            </Accordion>

            <Accordion title="Activity">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
            </Accordion>

            <Accordion title="More of [Collection]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
            </Accordion>
          </Flex>
          
        </Flex>
      </Container>
      <Menu />
      <BottomMenu mode={modalMode} setModalMode={setModalMode} posDisabled={putOnSaleDisabled} transferDisabled={transferDisabled} setTransferDisabled={setTransferDisabled}/>
      {(modalMode === 'transfer' || modalMode === 'putOnSale') && <Overlay onClick={handleOverlay}/>}
    </>
  )
}

NFTViewer.defaultProps = {
  name: 'libreNFT',
  contract: '0x387443f120e966f0455f15653dc3eddf64579bac',
  imageCid: 'QmRGpxUkGGB2fdxpTjhzzxMV8YKHkQ2oC98iH7egMTyA5D',
}

export default NFTViewer
