import { useState } from 'react'
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar'
import styled from 'styled-components'
import { Flex } from '../../../components/Box'
import { PhotoIcon, GIFIcon, EmojiIcon, MusicIcon, AddAnotherIcon, EarthIcon } from '../../../components/Svg'

const Container = styled.div`
  margin-bottom: 30px;
  padding-bottom: 50px;
`

const Wrapper = styled.div`
  display: flex;
  margin-top: 10px;
  gap: 10px;
`

const Left = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 10px;
  align-items: center;
  gap: 15px;
`

const Right = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

const Type = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #696969;
  border-radius: 12px;
  color: #8b40f4;
  font-size: 12px;
  width: fit-content;
  padding: 4px 10px;
  cursor: pointer;
`

const TextArea = styled.textarea`
  box-sizing: border-box;
  color: white;
  font-size: 16px;
  background: transparent;
  border: none;
  resize: none;
  width: 100%;
  border: none;
  overflow: auto;
  outline: none;
  min-height: 50px;
  margin-top: 10px;
  margin-bottom: 20px;

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
  justify-content: space-between;
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid #696969;
`

const Icons = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`

const FooterItem = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-right: 16px;
`

const Permission = styled(Flex)`
  margin-top: 20px;
`

const PermissionText = styled.div`
  color: white;
  font-size: 12px;
  margin-left: 10px;
`

const ArrowIcon = styled.div<{ isActive: boolean }>`
  width: 14px;
  transition: transform 0.3s;
  transform: rotateZ(${p => (p.isActive ? 180 : 0)}deg);
  margin-left: 5px;
`

const MAX_CHARACTERS = 150

export default function Post() {
  const [text, setText] = useState('')
  const [openType, setOpenType] = useState(false)
  const [media, setMedia] = useState<any>(null)

  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (e.target.value.length <= MAX_CHARACTERS) {
      setText(e.target.value)
    }
  }

  return (
    <Container>
      <Wrapper>
        <Left>
          <ProfileImage src={'/profile-1.png'} alt='profile' />
        </Left>
        <Right>
          <Flex paddingBottom={10}>
            <Type onClick={() => setOpenType(prev => !prev)}>
              Everyone
              <ArrowIcon isActive={openType}>
                <svg viewBox='0 0 20 20' focusable='false' aria-hidden='true' preserveAspectRatio='none'>
                  <path fill='#8B40F4' d='M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z'></path>
                </svg>
              </ArrowIcon>
            </Type>
          </Flex>
          <TextArea value={text} onChange={handleInput} maxLength={MAX_CHARACTERS} placeholder="What's on your mind?" />
          <Permission>
            <EarthIcon width='14px' height='14px' />
            <PermissionText>Everyone can reply</PermissionText>
          </Permission>
          <Footer>
            <Icons>
              <Flex width={'100%'} justifyContent={'space-between'} alignItems='center'>
                <Flex>
                  <FooterItem>
                    <CustomInput
                      type='file'
                      name='image'
                      accept='image/png,image/jpeg'
                      onChange={event => {
                        setMedia(event?.target?.files)
                      }}
                    />
                    <PhotoIcon width='16px' height='16px' />
                  </FooterItem>
                  <FooterItem>
                    <CustomInput
                      type='file'
                      name='image'
                      accept='.gif'
                      onChange={event => {
                        setMedia(event?.target?.files)
                      }}
                    />
                    <GIFIcon width='16px' height='16px' />
                  </FooterItem>
                  <FooterItem>
                    <EmojiIcon width='16px' height='16px' />
                  </FooterItem>
                  <FooterItem>
                    <CustomInput
                      type='file'
                      name='image'
                      accept='.mp3,audio/*'
                      onChange={event => {
                        setMedia(event?.target?.files)
                      }}
                    />
                    <MusicIcon width='16px' height='16px' />
                  </FooterItem>
                </Flex>
                <Flex>
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
                  </FooterItem>
                  <FooterItem>
                    <AddAnotherIcon width='16px' height='16px' />
                  </FooterItem>
                </Flex>
              </Flex>
            </Icons>
          </Footer>
        </Right>
      </Wrapper>
    </Container>
  )
}

const CustomInput = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
`
