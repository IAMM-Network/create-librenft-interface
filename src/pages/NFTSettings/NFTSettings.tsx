import { Flex } from '../../components/Box'
import { Container } from '../../components/Layout'
import { ThreeDotsVerticalIcon, HeartIcon } from '../../components/Svg'
import Menu from '../Profile/components/Menu'
import { randomIntFromInterval } from '../SocialFeed/data/types'

import { Like, LikeCount, NFTTitle, NFTViewerTitle, NFTViewerTitleButton, Text } from './styles'

const TempImage = require('../../assets/images/congrats-img.png')

const NFTSettings = () => {
  return (
    <>
      <Container>
        <Flex flexDirection='column' alignContent='center' paddingTop='104px' paddingBottom='100px'>
          <Flex marginBottom='40px' flexDirection='row' alignContent='center' alignItems='center' justifyContent='space-between'>
            <NFTViewerTitle>LNFT Settings</NFTViewerTitle>
            <NFTViewerTitleButton>
              <ThreeDotsVerticalIcon fill='transparent' width='20px' height='20px' />
            </NFTViewerTitleButton>
          </Flex>

          <Flex marginBottom='20px' flexDirection='row' alignContent='center' alignItems='center' justifyContent='space-between'>
            <NFTTitle>libre NFT #{randomIntFromInterval(0, 10000)}</NFTTitle>
            <Like>
              <HeartIcon fill='transparent' width='14px' height='14px' />
              <LikeCount>{randomIntFromInterval(50, 100)}</LikeCount>
            </Like>
          </Flex>

          <img src={TempImage} alt='nft-asset' />

          <Flex margin='20px' flexDirection='row' alignContent='center' alignItems='center' justifyContent='center'>
            <Text weight={400} size='14px' style={{ marginRight: '5px' }}>
              owned by
            </Text>
            <Text weight={700} size='14px'>
              {'God woken'}
            </Text>
          </Flex>
        </Flex>
      </Container>
      <Menu />
    </>
  )
}

export default NFTSettings
