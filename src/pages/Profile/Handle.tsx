import { useState } from 'react'
import { Flex, Grid } from '../../components/Box'
import { Button } from '../../components/Button'
import { Container } from '../../components/Layout'
import { TitleSection, Title, Description, BoxOption } from './styles'
import Header from './components/Header'
import Menu from './components/Menu'
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CreatorImage = require('../../assets/images/profile/profile-creator.png')
const BuilderImage = require('../../assets/images/profile/profile-builder.png')
const CuratorImage = require('../../assets/images/profile/profile-curator.png')
const CollectorImage = require('../../assets/images/profile/profile-collector.png')

const options = [
  {
    image: CreatorImage,
    description: 'Creator',
  },
  {
    image: CollectorImage,
    description: 'Collector',
  },
]

const Handle: React.FC = () => {

  // Check if is the first time a user opens dashboard
  const [isFirstTime, setIsFirstTime] = useState(true)
  const [activeBox, setActiveBox] = useState(0);

  const navigate = useNavigate();

  const handleClick = () => {


      navigate("/testnet/collection/garvaz");
  }
  // If first time is true return that
  return (
    <>
      <Header title='Handle' />
      <Container maxWidth='90%' height='100%'>
        <Flex flexDirection='column' paddingTop='2rem' height='100%'>
          <TitleSection>
            <Title>Type Your @Handle</Title>
          </TitleSection>
          <Description>Choose wisely, creator.</Description>
          <Description>After choose your @handle,</Description>
          <Description>you won’t be able to change it again.</Description>

          <form>
            <Grid gridTemplateColumns='1fr' gridTemplateRows='1fr 1fr' gridColumnGap='1rem' gridRowGap='1rem' height='50%'>
              <div style={{color:'white', paddingTop:20}}><label>Create One, creator!</label></div> 
              <input type="text" className='handleInput' id="handleInput" name="handleInput" style={{height:32}}></input>
            </Grid>
          </form>
          
          <Flex justifyContent='center' marginTop='3rem' marginBottom='6rem'>
            <Button variant='cta' onClick={handleClick}>CONFIRM</Button>
          </Flex>
        </Flex>
      </Container>
      <Menu />
    </>
  )
}

export default Handle
