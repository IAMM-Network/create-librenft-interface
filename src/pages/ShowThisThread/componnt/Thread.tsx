import styled from 'styled-components'
import TimeAgo from 'timeago-react'
import { HeartIcon, SpeechBubbleIcon, RetweetIcon, ShareIcon, ClickIcon } from '../../../components/Svg'
import { PostProps, randomIntFromInterval } from '../../SocialFeed/data/types'

const Container = styled.div`
  margin-bottom: 30px;
  padding: 20px;
  border-top: 1px solid #696969;
  border-bottom: 1px solid #696969;
`

const Wrapper = styled.div`
  display: flex;
  max-width: 540px;
  margin: auto;
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
`

const Header = styled.div``

const Message = styled.div`
  display: flex;
  align-items: center;
  padding-top: 15px;
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
`

const TimeAgoContainer = styled.div`
  font-size: 12px;
  color: white;
  font-weight: 400;
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

const ProfileImage = styled.img`
  width: 45px;
  height: 45px;
`

const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
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

export default function Thread({ item }: { item: PostProps }) {
  // TODO: should receive real data
  return (
    <Container>
      <Wrapper>
        <Left>
          <ProfileImage src={item.profile} alt='profile' />
        </Left>
        <Right>
          <Header>
            <HeaderInfo>
              <FullName>{item.fullName}</FullName>
              <div>-</div>
              <div>@{item.fullName}</div>
              <div>•</div>
              <TimeAgoContainer>
                <TimeAgo datetime={item.createdAt} />
              </TimeAgoContainer>
            </HeaderInfo>
            <Message>
              <ReplyingTo>Replying to</ReplyingTo>
              <NickName>@{item.fullName}</NickName>
            </Message>
          </Header>
          <Body>
            <Text>{`Lorem ipsum dolor sit amet, consectetur
adipiscing elit, sed do eiusmod tempor
incididunt ut labore et dolore magna
aliqua.
`}</Text>
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
                <ClickIcon width='16px' height='16px' />
                <FooterText>{randomIntFromInterval(5, 50)}</FooterText>
              </FooterItem>
              <FooterItem>
                <ShareIcon width='16px' height='16px' />
              </FooterItem>
            </Icons>
          </Footer>
        </Right>
      </Wrapper>
    </Container>
  )
}
