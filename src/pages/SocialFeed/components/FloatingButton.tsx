import { Dispatch, SetStateAction } from 'react'
import styled from 'styled-components'
import { BuilderIcon, CollectionIcon, CommunityIcon, DiscoverIcon, ImpactIcon } from '../../../components/Svg'

interface ButtonProps {
  open: boolean
  setOpen?: any
}

const Container = styled.div`
  right: 25px;
  bottom: 90px;
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
`

const FlotingButton = styled.button<ButtonProps>`
  background-color: #8b40f4;
  width: ${({ open }) => (!open ? '40px' : '50px')};
  height: ${({ open }) => (!open ? '40px' : '50px')};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: none;

  cursor: pointer;
  transform: scale(1.05);
  transition: all 0.2s ease-in-out;
`

const Menus = styled.div`
  margin-bottom: 20px;
  margin-right: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  gap: 10px;
  transition: all 0.2s ease-in-out;
`

const Menu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Button = styled.button`
  background-color: #8b40f4;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: none;
  cursor: pointer;
`

const ButtonText = styled.div`
  font-weight: 600;
  size: 12px;
  color: white;
  margin-right: 10px;
`

export default function FloatingButton({ open, setOpen }: ButtonProps) {
  return (
    <Container>
      {open && (
        <Menus>
          <Menu>
            <ButtonText>Impact</ButtonText>
            <Button>
              <ImpactIcon width={16} height={16} />
            </Button>
          </Menu>
          <Menu>
            <ButtonText>Discover</ButtonText>
            <Button>
              <DiscoverIcon width={16} height={16} />
            </Button>
          </Menu>
          <Menu>
            <ButtonText>Create Collection</ButtonText>
            <Button>
              <CollectionIcon width={20} height={20} />
            </Button>
          </Menu>
          <Menu>
            <ButtonText>Create Community</ButtonText>
            <Button>
              <CommunityIcon width={20} height={20} />
            </Button>
          </Menu>
        </Menus>
      )}
      <FlotingButton open={open} onClick={() => setOpen((prev: boolean) => !prev)}>
        <BuilderIcon width={open ? '24px' : '16px'} height={open ? '24px' : '16px'} />
      </FlotingButton>
    </Container>
  )
}
