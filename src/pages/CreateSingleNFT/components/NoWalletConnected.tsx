import { Box, Flex, Grid } from '../../../components/Box'
import { Button } from '../../../components/Button'
import { Container } from '../../../components/Layout'
import { MetaMaskIcon } from '../../../components/Svg'
import { HeadImage, HeadText, Title } from '../../Home/styles'

const IAMMGradientIcon = require('../../../assets/images/iamm-home.png')

interface NoWalletConnectedProps {
  onConnect: () => void
}

const NoWalletConnected = ({ onConnect }: NoWalletConnectedProps) => (
  <Flex height="calc(100vh - 80px)" alignItems="center">
    <Container>
      <Grid alignItems='end' justifyContent='center'>
        <Title>The Social & Collaborative NFT Network</Title>
      </Grid>
      <Grid alignItems='center' justifyContent='center'>
        <HeadImage width={280} src={IAMMGradientIcon} alt='IAMM-3d-gradient-icon' />
      </Grid>
      <Grid alignItems='start' justifyContent='center'>
        <Grid width='100%' height='100%' justifyContent='center' alignItems='center'>
          <Button onClick={onConnect} variant='cta' startIcon={<MetaMaskIcon />}>
            Connect wallet
          </Button>
        </Grid>
        <Box marginTop="3rem">
            <HeadText>Create, collect, mix and pimp – libreNFT</HeadText>
        </Box>
      </Grid>
    </Container>
  </Flex>
)

export default NoWalletConnected
