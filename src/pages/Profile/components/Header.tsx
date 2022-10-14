import { Flex, Box } from '../../../components/Box'
import { Container } from '../../../components/Layout'

import styled from 'styled-components'

const profileImage = require('../../../assets/images/profile/profile-picture.png')


interface HeaderProps {
  title: string
}

const Title = styled.h1`
  color: white;
  font-size: 16px;
  font-weight: 600;
`

const ProfilePicture = styled.img`
  margin-right: 1rem;
`

const Header: React.FC<HeaderProps> = ({ title }) => (
  <Box background='#180A33' paddingY='1rem' position='fixed' left='0' top='0' width='100%'>
    <Container maxWidth='90%'>
      <Flex width='100%' justifyContent='start'>
        <ProfilePicture src={profileImage} alt='profile image' width={35} height={35} />
        <Title>{title}</Title>
      </Flex>
    </Container>
  </Box>
)

export default Header
