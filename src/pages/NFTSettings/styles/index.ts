import styled from 'styled-components'
import { Flex } from '../../../components/Box'

interface TextProps {
  color?: string
  size?: number | string
  weight?: number
  margin?: string
}

export const Wrapper = styled.div`
  max-width: 500px;
  overflow-y: scroll;
  overflow-x: hidden;
`

export const NFTSettingsTitle = styled.h1`
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

export const NFTSettingsTitleButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border: 1px solid #fff;
  background: transparent;
  border-radius: 6px;
  cursor: pointer;
`

export const NFTTitle = styled.h2`
  font-size: 21px;
  color: white;
  font-weight: 400;

  a {
    color: white;
    font-size: 21px;
    text-decoration: none;
    font-weight: 600;
  }
`

export const Like = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const LikeCount = styled.div`
  font-weight: 400;
  font-size: 12px;
  color: white;
  margin-left: 4px;
`

export const Text = styled.div<TextProps>`
  color: ${({ color }) => (color ? color : 'white')};
  font-size: ${({ size }) => (size ? size : '12px')};
  font-weight: ${({ weight }) => (weight ? weight : 400)};
  margin: ${({ margin }) => (margin ? margin : '0.5rem 0')};
`

export const OptionTitle = styled.div`
  font-weight: 600;
  font-size: 12px;
  color: white;
  font-family: 'Montserrat';
  text-align: left;
`

export const OptionText = styled(OptionTitle)`
  font-weight: 400;
  margin-top: 3px;
  margin-bottom: 3px;
`

export const OptionInput = styled.input`

`

export const Emphasis = styled.div`
  color: #f4404f;
  font-weight: 600;
`

export const OptionRow = styled(Flex)`
  align-items: center;
  justify-content: space-between;
`

export const InputBox = styled.input`
  display: flex;
  align-items: center;
  background: none;
  color: white;
  height: 44px;
  text-align: left;
  border: 1px solid #8b40f4;
  border-radius: 8px;
  padding: 5px 12px;
  width: 100%;
  margin-top: 5px;

  ::placeholder {
    color: #696969;
  }
  &:focus {
    outline: none;
  }
`

export const TextBox = styled.textarea`
  display: flex;
  align-items: center;
  background: none;
  color: white;
  height: 131px;
  text-align: left;
  border: 1px solid #8b40f4;
  border-radius: 8px;
  padding: 12px 20px;
  width: 100%;
  margin-top: 5px;
  resize: none;

  ::placeholder {
    color: #696969;
  }
  &:focus {
    outline: none;
  }
`

export const PrimaryButton = styled.button`
  display: flex;
  width: 120px;
  height: 45px;
  color: white;
  font-weight: 800;
  justify-content: center;
  align-items: center;
  padding: 4px 26px;
  background: #8b40f4;
  border-radius: 11px;
  border: none;
  margin-inline: 15px;
  font-size: 18px;
  cursor: pointer;
`

export const Divider = styled.div`
  border-bottom: 1px solid #696969;
  margin-top: 20px;
  margin-bottom: 20px;
  width: 100%;
`
