import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { Flex, Box } from '../../../../components/Box'
import {
  CloseIcon,
  SettingsIcon,
  ImpactCreatorIcon,
  OpenEyeIcon,
  PutOnSaleIcon,
  TelegramMediaIcon,
  TwitterMediaIcon,
} from '../../../../components/Svg'
import { CongratulationsTitle, CongratulationsWrapper, Hr } from '../styles'
import { ROUTES } from '../../../RoutesData'

const Impact = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
`

const ImpactText = styled.i`
  font-size: 10px;
  color: white;
`

const CongratsImage = require('../../../../assets/images/congrats-img.png')

const Congratulations = ({ name, contract, imageCid }: { name: string; contract: string; imageCid: string }) => {
  const navigate = useNavigate()
  const imgURL= 'https://gateway.pinata.cloud/ipfs/' + imageCid;
  return (
    <CongratulationsWrapper justifyContent='center'>
      <Flex flexDirection='column' alignContent='center'>
        <Flex padding='1rem' paddingTop='3rem' justifyContent='center'>
          <CloseIcon onClick={() => navigate('/profile-dashboard')} style={{ cursor: 'pointer' }} fill='white' width='15px' height='15px' />
        </Flex>
        <Box padding='1rem'>
          <CongratulationsTitle>Congratulations!</CongratulationsTitle>
          <CongratulationsTitle>You’ve created </CongratulationsTitle>
          <CongratulationsTitle>
            <a href={`https://v1.testnet.gwscan.com/account/${contract}`} target='_blank' rel='noreferrer'>
              libreNFT{name} #1
            </a>
          </CongratulationsTitle>
        </Box>

        <Box width='320px' margin='0 auto'>
          <Hr />
        </Box>

        <Box marginY='1rem'>
          <img width={250} height={250} src={CongratsImage} alt='nft-asset' />
        </Box>

        <Box style={{ marginTop: '20px' }}>
          <h3 style={{ color: 'white', fontWeight: 'bold', fontSize: '12px' }}>Share to...</h3>
        </Box>

        <Flex justifyContent='space-between' width='60%' margin='2rem auto'>
          <Link to={ROUTES.SHARE_POST}>
            <Impact>
              <ImpactCreatorIcon fill='white' width='20px' height='20px' />
              <ImpactText>(Impact)</ImpactText>
            </Impact>
          </Link>

          <TwitterMediaIcon style={{ cursor: 'not-allowed' }} fill='#696969' width='20px' height='20px' />
          <TelegramMediaIcon style={{ cursor: 'not-allowed' }} fill='#696969' width='20px' height='20px' />
        </Flex>

        <Box style={{ marginTop: '10px' }}>
          <h3 style={{ color: 'white', fontWeight: 'bold', fontSize: '12px' }}>Things you can do</h3>
        </Box>

        <Flex justifyContent='space-between' width='70%' margin='2rem auto'>
          <Link to={ROUTES.NFT_VIEWER_OWNER}>
            <Flex flexDirection='column'>
              <OpenEyeIcon width='20px' height='20px' />
              <span style={{ color: 'white', marginTop: '1rem', fontSize: '10px' }}>View NFT</span>
            </Flex>
          </Link>

          <Flex flexDirection='column'>
            <Link to={ROUTES.NFT_SETTINGS}>
              <Flex flexDirection='column'>
                <SettingsIcon style={{ cursor: 'not-allowed' }} fill='#ffffff' width='20px' height='20px' />
                <span style={{ color: 'white', marginTop: '1rem', fontSize: '10px' }}>Settings</span>
              </Flex>
            </Link>
          </Flex>

          <Flex flexDirection='column'>
            <PutOnSaleIcon style={{ cursor: 'not-allowed' }} fill='#696969' width='20px' height='20px' />
            <span style={{ color: '#696969', marginTop: '1rem', fontSize: '10px' }}>Put on Sale</span>
          </Flex>
        </Flex>
      </Flex>
    </CongratulationsWrapper>
  )
}

Congratulations.defaultProps = {
  name: 'libreNFT',
  contract: '0x387443f120e966f0455f15653dc3eddf64579bac',
  imageCid: 'QmRGpxUkGGB2fdxpTjhzzxMV8YKHkQ2oC98iH7egMTyA5D',
}

export default Congratulations
