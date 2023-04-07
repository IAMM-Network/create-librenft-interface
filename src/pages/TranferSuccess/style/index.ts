import styled from 'styled-components'
import { Flex } from '../../../components/Box'

export const Wrapper = styled(Flex)`
  width: 100%;
  height: 100vh;
  background: #1a1a1a;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  overflow-x: hidden;
  overflow-y: scroll;
`

export const Title = styled.h1`
  font-size: 21px;
  color: white;
  font-weight: 600;

  a {
    color: white;
    font-size: 21px;
    text-decoration: none;
    font-weight: 600;
  }
`

export const Text = styled.div`
  font-size: 12px;
  color: white;
  font-weight: 400;

  a {
    color: white;
    font-size: 12px;
    text-decoration: none;
    font-weight: 400;
  }
`

export const ContinueButton = styled.button`
  background: #8b40f4;
  border-radius: 12px;
  padding: 6px 12px;
  font-weight: 600;
  width: 120px;
  height: 45px;
  font-size: 18px;
  color: white;
  border: none;
  cursor: pointer;
`
