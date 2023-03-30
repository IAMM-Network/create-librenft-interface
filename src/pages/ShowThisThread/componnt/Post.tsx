import styled from 'styled-components'
import { HeartIcon, NervosIcon, SpeechBubbleIcon, RetweetIcon, ShareIcon } from '../../../components/Svg'
import { PostProps } from '../../SocialFeed/data/types'

const Container = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;
  padding-bottom: 20px;
`

const Wrapper = styled.div`
  display: flex;
  margin-top: 10px;
`
const Right = styled.div`
  display: flex;
  flex-direction: column;
`

const Header = styled.div``

const HeaderInfo = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
  color: white;
  gap: 6px;
`

const FullName = styled.div`
  font-size: 12px;
  color: white;
  font-weight: 700;
  margin-bottom: 3px;
`

const Body = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
`

const Text = styled.div`
  font-size: 12px;
  line-height: 15px;
  word-break: keep-all;
  color: white;
  text-align: left;
  margin-bottom: 20px;
`

const MediaContent = styled.img`
  width: 100%;
`

const ProfileImage = styled.img`
  width: 45px;
  height: 45px;
`

const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-block: 12px;
  border-bottom: 1px solid #696969;
  border-top: 1px solid #696969;
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

const FooterText = styled.div`
  color: white;
  font-size: 14px;
  margin-left: 10px;
`

const TipItem = styled(FooterItem)`
  margin-right: 0;
`

const TipText = styled(FooterText)`
  font-weight: 700;
`

const Bottom = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`

export default function Post({ item }: { item: PostProps }) {
  return (
    <Container>
      <Wrapper>
        <Right>
          <Header>
            <HeaderInfo>
              <ProfileImage src={item.profile} alt='profile' />
              <div>
                <FullName>{item.fullName}</FullName>
                <div>@{item.fullName}</div>
              </div>
            </HeaderInfo>
          </Header>
          <Body>
            <Text>{item.text}</Text>
            <MediaContent src={item.mediaUrl} alt='media' />
            <Bottom>
              <Text>{new Date(item.createdAt).toLocaleString()}</Text>
              <Text style={{ marginInline: '10px' }}>•</Text>
              <Text>8999 views</Text>
            </Bottom>
          </Body>
          <Footer>
            <Icons>
              <FooterItem>
                <SpeechBubbleIcon width='16px' height='16px' />
                <FooterText>{item.commentCount}</FooterText>
              </FooterItem>
              <FooterItem>
                <RetweetIcon width='16px' height='16px' />
                <FooterText>{item.shareCount}</FooterText>
              </FooterItem>
              <FooterItem>
                <HeartIcon width='16px' height='16px' />
                <FooterText>{item.likeCount}</FooterText>
              </FooterItem>
              <FooterItem>
                <ShareIcon width='16px' height='16px' />
              </FooterItem>
            </Icons>
            {item.canTip && (
              <TipItem>
                <NervosIcon width='16px' height='16px' />
                <TipText>TIP!</TipText>
              </TipItem>
            )}
          </Footer>
        </Right>
      </Wrapper>
    </Container>
  )
}
