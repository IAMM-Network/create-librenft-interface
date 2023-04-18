import { FC } from 'react'
import { Grid } from '../../components/Box'
import { HomeWrapper, Title, HeadText, HeadImage } from './styles'
import { Container } from '../../components/Layout'
import { Button } from '../../components/Button'
import { Launch } from '../../components/Launch'


const IAMMGradientIcon = require('../../assets/images/iamm-home.png')

const Home: FC = () => (
  <HomeWrapper>
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
      {/* <Grid>
        <Launch/>
      </Grid> */}
    </Container>
  </HomeWrapper>
)

export default Home
