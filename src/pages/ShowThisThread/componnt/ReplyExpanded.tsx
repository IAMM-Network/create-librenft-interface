import { Dispatch, SetStateAction, useState } from 'react'
import styled from 'styled-components'
import { ShareIcon, PhotoIcon, GIFIcon, EmojiIcon, MusicIcon } from '../../../components/Svg'
import { ReplyImpactButton } from './ReplyCollapsed'
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

const Container = styled.div`
  cursor: pointer;
`
const Message = styled.div`
  display: flex;
  align-items: center;
  padding-top: 15px;
  margin-left: 60px;
`
const ReplyingTo = styled.div`
  color: #696969;
  font-size: 10px;
  margin-right: 5px;
`

const NickName = styled.div`
  color: white;
  font-size: 10px;
`

const Wrapper = styled.div`
  display: flex;
  padding-bottom: 15px;
`

const Left = styled.div`
  margin-right: 15px;
`

const Right = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

const HeaderInfo = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
  color: white;
  gap: 6px;
`

const TextArea = styled.textarea`
  box-sizing: border-box;
  color: white;
  font-size: 16px;
  background: transparent;
  border: none;
  resize: none;
  padding-block: 15px;
  width: 100%;
  border: none;
  overflow: auto;
  outline: none;
  min-height: 100px;

  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
`

const ProfileImage = styled.img`
  width: 45px;
  height: 45px;
`

const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-block: 12px;
`

const Icons = styled.div`
  display: flex;
  align-items: center;
`

const FooterItem = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-right: 16px;
`
const MAX_CHARACTERS = 100

export default function ReplyExpanded({ setReply }: { setReply: Dispatch<SetStateAction<boolean>> }) {
  const [text, setText] = useState('')

  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (e.target.value.length <= MAX_CHARACTERS) {
      setText(e.target.value)
    }
  }

  return (
    <Container>
      <Message>
        <ReplyingTo>Replying to</ReplyingTo>
        <NickName>{'@doloristamet'}</NickName>
      </Message>
      <Wrapper>
        <Left>
          <HeaderInfo>
            <ProfileImage src='/profile-2.png' alt='profile-image' />
          </HeaderInfo>
        </Left>
        <Right>
          <TextArea value={text} onChange={handleInput} placeholder='What are your thoughts?' />
          <Footer>
            <Icons>
              <FooterItem>
                <PhotoIcon width='16px' height='16px' />
              </FooterItem>
              <FooterItem>
                <GIFIcon width='16px' height='16px' />
              </FooterItem>
              <FooterItem>
                <EmojiIcon width='16px' height='16px' />
              </FooterItem>
              <FooterItem>
                <MusicIcon width='16px' height='16px' />
              </FooterItem>
              <FooterItem style={{ width: '16px', height: '16px' }}>
                <CircularProgressbar
                  styles={buildStyles({
                    // Colors
                    pathColor: `white`,
                    trailColor: '#696969',
                  })}
                  value={(text.length / MAX_CHARACTERS) * 100}
                  text={''}
                />
                ;
              </FooterItem>
            </Icons>
            <ReplyImpactButton onClick={() => setReply((prev: boolean) => !prev)} active={true}>
              Impact
            </ReplyImpactButton>
          </Footer>
        </Right>
      </Wrapper>
    </Container>
  )
}
