import { useNavigate } from 'react-router-dom'
import { Flex, Box } from '../../../../components/Box'
import { CloseIcon, IAMMIcon, OpenEyeIcon, PutOnSaleIcon, TelegramMediaIcon, TransferableIcon, TransferNowIcon, TwitterMediaIcon } from '../../../../components/Svg'
import { CongratulationsTitle, CongratulationsWrapper, Hr } from '../styles'

const Congratulations = ({ name, contract, imageCid }: { name:string, contract: string; imageCid: string }) => {
  const navigate = useNavigate()
  return (
    <CongratulationsWrapper justifyContent='center'>
      <Flex flexDirection='column' alignContent='center'>
        <Flex padding='1rem' paddingTop='3rem' justifyContent='center'>
          <CloseIcon onClick={() => navigate('/profile-dashboard')} style={{ cursor: 'pointer' }} fill='white' width='15px' height='15px' />
        </Flex>
        <Box padding='1rem'>
          <CongratulationsTitle>
            Congratulations! You’ve created{' '}
            <a href={`https://v1.testnet.gwscan.com/account/${contract}`} target='_blank' rel='noreferrer'>
              {name} #1
            </a>
          </CongratulationsTitle>
        </Box>

        <Box width='90%' margin='0 auto'>
          <Hr />
        </Box>

        <Box marginY='1rem'>
          <img width={250} height={250} src={`https://gateway.pinata.cloud/ipfs/${imageCid}`} alt='nft-asset' />
        </Box>

        <Box>
          <h3 style={{ color: 'white', fontWeight: 'bold', fontSize: '12px' }}>Share to...</h3>
        </Box>

        <Flex justifyContent='space-between' width='60%' margin='2rem auto'>
          <IAMMIcon style={{ cursor: 'not-allowed' }} fill="#696969" width='20px' height='20px' />
          <TwitterMediaIcon style={{ cursor: 'not-allowed' }} fill="#696969" width='20px' height='20px' />
          <TelegramMediaIcon style={{ cursor: 'not-allowed' }} fill="#696969" width='20px' height='20px' />
        </Flex>

        <Box>
          <h3 style={{ color: 'white', fontWeight: 'bold', fontSize: '12px' }}>Things you can do</h3>
        </Box>

        <Flex justifyContent='space-between' width='70%' margin='2rem auto'>
          <Flex flexDirection="column">
            <OpenEyeIcon style={{ cursor: 'not-allowed' }} fill="#696969" width='20px' height='20px' />
            <span style={{ color: '#696969', marginTop: '1rem', fontSize:'10px' }}>View NFT</span>
          </Flex>

          <Flex flexDirection="column">
            <PutOnSaleIcon style={{ cursor: 'not-allowed' }} fill="#696969" width='20px' height='20px' />
            <span style={{ color: '#696969', marginTop: '1rem', fontSize:'10px' }}>Put on Sale</span>
          </Flex>

          <Flex flexDirection="column">
            <TransferNowIcon style={{ cursor: 'not-allowed' }} fill="#696969" width='20px' height='20px' />
            <span style={{ color: '#696969', marginTop: '1rem', fontSize:'10px' }}>Transfer Now</span>
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
