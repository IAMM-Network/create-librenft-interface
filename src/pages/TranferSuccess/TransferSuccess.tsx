import { Link, useNavigate } from 'react-router-dom'
import { Flex, Box } from '../../components/Box'
import { SuccessGreenCheckIcon } from '../../components/Svg'
import { ROUTES } from '../RoutesData'
import { Title, Wrapper, Text, ContinueButton } from './style'

const TempImage = require('../../assets/images/congrats-img.png')

const TransferSuccess = () => {
  const navigate = useNavigate()
  return (
    <Wrapper justifyContent='center'>
      <Flex paddingTop={'80px'} flexDirection='column' alignContent='center' alignItems={'center'}>
        <Box padding='1rem'>
          <Title>Transfer Success!</Title>
        </Box>

        <Box marginY='1rem'>
          <img width={160} height={160} src={JSON.parse(sessionStorage.getItem('contractMetadata')??'')?.image_url} alt='nft-asset' />
        </Box>
        
        <SuccessGreenCheckIcon width={30} height={30} />

        <Box style={{ marginTop: '20px', marginBottom: '20px' }}>
          <Text style={{ marginBottom: '20px', fontWeight: '600' }}>&quot;libreNFT {JSON.parse(sessionStorage.getItem('contractMetadata')??'')?.name}</Text>
          <Text style={{ marginBottom: '20px' }}>successfully transferred to</Text>
          <Text style={{ marginBottom: '20px', fontWeight: '600' }}>@handle!</Text>
        </Box>

        <Link to={ROUTES.HOME}>
        <ContinueButton>Continue</ContinueButton>
        </Link>
      </Flex>
    </Wrapper>
  )
}

export default TransferSuccess
