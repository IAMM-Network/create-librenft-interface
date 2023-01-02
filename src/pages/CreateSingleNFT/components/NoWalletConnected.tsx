import { Flex, Grid } from '../../../components/Box'
import { Container } from '../../../components/Layout'
import { HeadImage, HeadText, Title } from '../../Home/styles'

const IAMMGradientIcon = require('../../../assets/images/iamm-home.png')


const NoWalletConnected = (props:any) => (
  <Flex height="calc(100vh - 80px)" alignItems="center">
    <Container>
      <Grid alignItems='end' justifyContent='center' marginBottom='-24px'>
        <Title>The Social & Collaborative NFT Network</Title>
      </Grid>
      <Grid alignItems='center' justifyContent='center'>
        <HeadImage width={280} src={IAMMGradientIcon} alt='IAMM-3d-gradient-icon' />
      </Grid>
      <Grid alignItems='start' justifyContent='center'>
       <HeadText>Create, collect, mix and pimp – libreNFT</HeadText>
      </Grid>
    </Container>
  </Flex>
)

export default NoWalletConnected
