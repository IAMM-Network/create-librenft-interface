import { useState } from 'react'
import { Flex, Grid } from '../../components/Box'
import { Button } from '../../components/Button'
import { Container } from '../../components/Layout'
import { TitleSection, Title, Description, BoxOption } from './styles'
import Header from './components/Header'
import Menu from './components/Menu'
import { useNavigate } from "react-router-dom";
import { ROUTES } from '../RoutesData'


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

const Profile: React.FC = () => {
  const navigate = useNavigate();
  // Check if is the first time a user opens dashboard
  const [isFirstTime, setIsFirstTime] = useState(true)
  const [activeBox, setActiveBox] = useState(0)

  const handleClick = () => {
      navigate(ROUTES.PROFILE_HANDLE);
  }

  // If first time is true return that
  return !!isFirstTime ? (
    <>
      <Header title='Welcome' />
      <Container maxWidth='90%' height='100%'>
        <Flex flexDirection='column' paddingTop='2rem' height='100%'>
          <TitleSection>
            <Title>Role selection</Title>
            <Description>What are you up to do on IAMM?</Description>
          </TitleSection>

          <Grid gridTemplateColumns='1fr 1fr' gridTemplateRows='1fr' gridColumnGap='1rem' gridRowGap='1rem' height='100%'>
            {options.map(({ description, image }, index) => (
              <BoxOption key={description} active={index === activeBox} onClick={() => setActiveBox(index)}>
                {<img src={image} alt={description} height='auto' width='auto' />}
                {description}
              </BoxOption>
            ))}
          </Grid>

          <Flex justifyContent='center' marginTop='3rem' marginBottom='6rem'>
            <Button variant='cta' onClick={handleClick}>CONFIRM</Button>
          </Flex>
        </Flex>
      </Container>
      <Menu />
    </>
  ) : (
    <div>Next steps</div>
  )
}

export default Profile
