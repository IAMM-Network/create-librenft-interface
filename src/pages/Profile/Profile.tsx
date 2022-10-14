import { useState } from 'react'
import { Flex, Grid } from '../../components/Box'
import { Button } from '../../components/Button'
import { Container } from '../../components/Layout'
import { TitleSection, Title, Description, BoxOption } from './styles'
import Header from './components/Header'
import Menu from './components/Menu'


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
    image: BuilderImage,
    description: 'Builder',
  },
  {
    image: CuratorImage,
    description: 'Curator',
  },
  {
    image: CollectorImage,
    description: 'Collector',
  },
]

const Profile: React.FC = () => {
  // Check if is the first time a user opens dashboard
  const [isFirstTime, setIsFirstTime] = useState(true)
  const [activeBox, setActiveBox] = useState(0)

  // If first time is true return that
  return !!isFirstTime ? (
    <>
      <Header title='Welcome' />
      <Container maxWidth='90%'>
        <Flex flexDirection='column' paddingTop='2rem'>
          <TitleSection>
            <Title>Lorem ipsum</Title>
            <Description>Lorem ipsum dolor sit amet</Description>
          </TitleSection>

          <Grid gridTemplateColumns='repeat(2, 1fr)' gridTemplateRows='repeat(2, 1fr)' gridColumnGap='1rem' gridRowGap='1rem'>
            {options.map(({ description, image }, index) => (
              <BoxOption key={description} active={index === activeBox} onClick={() => setActiveBox(index)}>
                {<img src={image} alt={description} height='auto' width='auto' />}
                {description}
              </BoxOption>
            ))}
          </Grid>

          <Flex justifyContent='center' marginTop='3rem' marginBottom='6rem'>
            <Button variant='cta'>CHOOSE</Button>
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
