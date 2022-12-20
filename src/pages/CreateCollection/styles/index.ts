import styled from 'styled-components'
import { Flex, Grid } from '../../../components/Box'

interface TextProps {
  color?: string
  size?: number | string
  weight?: number
  margin?: string
}

export const TitleSection = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`

export const Text = styled.h3<TextProps>`
  color: ${({ color }) => (color ? color : 'white')};
  font-size: ${({ size }) => (size ? size : '12px')};
  font-weight: ${({ weight }) => (weight ? weight : 400)};
  margin: ${({ margin }) => (margin ? margin : '0.5rem 0')};
`

export const Section = styled(Flex)`
  flex-direction: column;
  text-align: left;
  margin-bottom: 1rem;
`

export const Input = styled.input`
  background: transparent;
  border: 1px solid #8b40f4;
  border-radius: 8px;
  box-sizing: border-box;
  color: white;
  margin-top: 0.5rem;
  padding: 1rem;

  ::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: white;
    opacity: 1; /* Firefox */
  }
`

export const MediaWrapper = styled(Grid)<{ active?: boolean }>`
  background-color: ${({ active }) => (active ? '#8B40F4' : '#1A1A1A')};
  border: ${({ active }) => (!active ? '1px solid #696969' : '1px solid #8B40F4')};
  border-radius: 8px;
  padding: 1rem;
  place-items: center;
  text-align: center;
`

export const Preview = styled(Flex)`
  align-items: center;
  border: 1px solid #8b40f4;
  height: 202px;
  padding: 1rem;
  justify-content: center;
  max-width: 90%;
`

export const TextArea = styled.textarea`
  background: transparent;
  border: 1px solid #8b40f4;
  border-radius: 8px;
  box-sizing: border-box;
  color: white;
  margin-top: 0.5rem;
  padding: 1rem;
  text-align: center;
  height: 120px;
  font-family: 'Montserrat', sans-serif;

  ::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: white;
    opacity: 1; /* Firefox */
  }
`

export const Select = styled.select`
  margin-top: 1rem;
  background: transparent;
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid #8b40f4;
  color: white;
  outline: none;
`
