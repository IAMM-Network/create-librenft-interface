import { useState } from 'react'
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

import { AcceptOfferButton, Like, LikeCount, NFTTitle, NFTViewerTitle, NFTViewerTitleButton, Offer, Overlay, Text } from './styles'

const TempImage = require('../../assets/images/congrats-img.png')

export type modalMode = 'buyer' | 'owner' | 'putOnSale' | 'acceptOffer' | 'transfer' | 'cancel'

const NFTViewer = ({ name, contract, imageCid, mode }: { name: string; contract: string; imageCid: string, mode: 'buyer' | 'owner' }) => {
  const [modalMode, setModalMode] = useState<modalMode>(mode)

  const handleOverlay = () => {
    setModalMode(mode)
  }

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
              <NFTTitle>libre NFT #{randomIntFromInterval(0, 10000)}</NFTTitle>
              <Like>
                <HeartIcon fill='transparent' width='14px' height='14px' />
                <LikeCount>{randomIntFromInterval(50, 100)}</LikeCount>
              </Like>
          </Flex>
          
          <img src={TempImage} alt='nft-asset' />

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
                <Text style={{ textAlign: 'left' }}>Highest offer</Text>
                <Flex>
                    <NervosIcon width='15px' height='15px'/>
                    <Flex alignItems={'baseline'}>
                      <Text style={{  marginRight: '3px', marginLeft: '5px' }} weight={600} size='21px'>8.8888</Text>
                      <Text weight={400} size='12px'>($888.88)</Text>
                    </Flex>
                  </Flex>
              </Flex>
              <AcceptOfferButton onClick={() => setModalMode(mode === 'buyer' ? 'buyer' : 'acceptOffer')}>{mode === 'buyer' ? 'MAKE OFFER' :  'ACCEPT OFFER'}</AcceptOfferButton>
            </Offer>
            <Accordion title="Description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
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
      <BottomMenu mode={modalMode} setModalMode={setModalMode}/>
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
