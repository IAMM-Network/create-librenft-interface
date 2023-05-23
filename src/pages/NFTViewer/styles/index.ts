import styled from 'styled-components'

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

export const NFTViewerTitle = styled.h1`
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

export const NFTViewerTitleButton = styled.button`
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

export const Offer = styled.div`
  display: flex;
  padding: 12px 10px 12px 25px;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #696969;
  border-radius: 8px;
`

export const AcceptOfferButton = styled.button<{ disabled: boolean; }>`
  display: flex;
  width: 120px;
  height: 45px;
  color: white;
  font-weight: 800;
  justify-content: center;
  align-items: center;
  padding: 4px 26px;
  background: ${({ disabled }) => (disabled ? '#696969' : '#5a36f8')};
  border-radius: 11px;
  border: none;
  margin-inline: 15px;
  cursor: pointer;
`

export const Overlay = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background-color: rgba(26, 26, 26, 0.8);
  z-index: 10000;
`
