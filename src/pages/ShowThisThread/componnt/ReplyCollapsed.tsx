import { Dispatch, SetStateAction } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  cursor: pointer;
`

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-block: 15px;
`
const Placeholder = styled.div`
  display: flex;
  flex-direction: column;
  color: #696969;
  font-size: 16px;
  margin-left: 15px;
`

const ProfileImage = styled.img`
  width: 45px;
  height: 45px;
`

const Left = styled.div`
  display: flex;
  align-items: center;
`

export const ReplyImpactButton = styled.button<{ active: boolean }>`
  background: #8b40f4;
  opacity: ${({ active }) => (active ? 1 : 0.3)};
  border-radius: 12px;
  padding: 6px 12px;
  color: white;
  border: none;
  cursor: pointer;
`

export default function ReplyCollapsed({ setReply }: { setReply: Dispatch<SetStateAction<boolean>> }) {
  return (
    <Container onClick={() => setReply((prev: boolean) => !prev)}>
      <Wrapper>
        <Left>
          <ProfileImage src='/profile-2.png' alt='profile-image' />
          <Placeholder>Wanna reply?</Placeholder>
        </Left>
        <ReplyImpactButton active={false}>Impact</ReplyImpactButton>
      </Wrapper>
    </Container>
  )
}
