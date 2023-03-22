import { useState, createElement } from 'react'
import styled from 'styled-components'
import { Flex } from '../../../components/Box'
import { Container } from '../../../components/Layout'
import { HomeIcon, MessageIcon, NotificationIcon, SearchIcon } from '../../../components/Svg'

const MenuWrapper = styled.div`
  background-color: #180a33;
  width: 100%;
  position: fixed;
  left: 0;
  bottom: 0;
  padding: 1rem 0;
`

const option = [HomeIcon, SearchIcon, NotificationIcon, MessageIcon]

const Menu: React.FC = ({ style }: any) => {
  const [indexActived, setIndexActived] = useState(0)

  return (
    <MenuWrapper style={style}>
      <Container maxWidth='90%'>
        <Flex width='100%' justifyContent='space-between'>
          {option.map((item, index) =>
            createElement(item, {
              style: { cursor: 'pointer' },
              fill: indexActived === index ? 'white' : '#6D6D6D',
              onClick: () => setIndexActived(index),
            }),
          )}
        </Flex>
      </Container>
    </MenuWrapper>
  )
}

export default Menu
