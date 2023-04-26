import styled from 'styled-components'
import { PostProps } from '../data/types'
import TimeAgo from 'timeago-react'
import { HeartIcon, MessageIcon, NervosIcon, SpeechBubbleIcon, RetweetIcon, ShareIcon, ClickIcon } from '../../../components/Svg'
import { Link } from 'react-router-dom'
import { ROUTES } from '../../RoutesData'

const Container = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;
  padding-bottom: 20px;
  border-bottom: 1px solid #696969;
`

const Wrapper = styled.div`
  display: flex;
  margin-top: 10px;
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
  position: relative;
  margin-left: 35px;
`

const SharedMessageText = styled.div`
  font-size: 10px;
  margin-left: 10px;
  color: white;
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

const Username = styled.div`
  font-size: 12px;
  color: white;
  font-weight: 400;
  margin-right: 10px;
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

const VerticalLine = styled.div`
  border-left: 1px solid #6d6d6d;
  height: calc(100% - 60px);
`

const ThreadText = styled(Link)`
  display: flex;
  align-items: center;
  height: 27px;
  margin-top: 20px;
  color: #008be8;
  font-size: 12px;
  text-align: left;
  width: fit-content;
  text-decoration: none;
  cursor: pointer;
`

const ThreadProfile = styled.img`
  width: 27px;
  height: 27px;
`

export default function Post({ item }: { item: PostProps }) {
  return (
    <Container>
      <Message>
        <MessageIcon width='12px' height='12px' />
        <SharedMessageText>Lorem Ipsum Retiammed -</SharedMessageText>
      </Message>
      <Wrapper>
        <Left>
          <ProfileImage src={item.profile} alt='profile' />
          {item.threads.length > 0 && (
            <>
              <VerticalLine />
              <ThreadProfile src={item.profile} alt='thread-profile' />
            </>
          )}
        </Left>
        <Right>
          <Header>
            <HeaderInfo>
              <FullName>{item.fullName}</FullName>
              <div>-</div>
              <div>@{item.username}</div>
              <div>•</div>
              <TimeAgoContainer>
                <TimeAgo datetime={item.createdAt} />
              </TimeAgoContainer>
            </HeaderInfo>
          </Header>
          <Body>
            <Text>{item.text}</Text>
            <MediaContent src={item.mediaUrl} alt='media' />
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
                <FooterText>{item.clickCount}</FooterText>
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
          {item.threads.length > 0 && <ThreadText to={ROUTES.THREAD}>Show this thread</ThreadText>}
        </Right>
      </Wrapper>
    </Container>
  )
}
