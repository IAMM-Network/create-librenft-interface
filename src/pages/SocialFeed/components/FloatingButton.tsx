import { Dispatch, SetStateAction } from 'react'
import styled from 'styled-components'
import {
  BuilderIcon,
  CollectionIcon,
  CommunityIcon,
  DiscoverIcon,
  ImpactCreatorIcon,
  ImpactIcon,
  LightBulbOffIcon,
  LightBulbOnIcon,
  LNFTIcon,
  MultipleIcon,
  PlaskIcon,
} from '../../../components/Svg'
import { ROUTES } from '../../RoutesData'
import { Link, useNavigate } from 'react-router-dom'
import Actions from '../../../util/enums'

interface ButtonProps {
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
  isConnected: boolean
  isCollector: boolean
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

const TriggerButton = styled.button<{ open: boolean; setOpen?: Dispatch<SetStateAction<boolean>> }>`
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

export default function FloatingButton({ open, setOpen, isConnected, isCollector }: ButtonProps) {
  const navigate = useNavigate()

  const setAction = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    const button: HTMLButtonElement = event.currentTarget
    const action = parseInt(button.value)

    switch (action) {
      case Actions.Impact:
        navigate(ROUTES.SHARE_IMPACT)
        break
      case Actions.CreateLNFT:
        navigate(ROUTES.CREATE_SINGLE_NFT)
        break
      case Actions.SharePost:
        navigate(ROUTES.SHARE_IMPACT)
        break
    }
  }

  return (
    <Container>
      {open && isCollector ? (
        <Menus>
          <Menu>
            <ButtonText>Impact</ButtonText>
            <Link to={ROUTES.COMPOSE_IMPACT}>
              <Button>
                <ImpactIcon width={16} height={16} />
              </Button>
            </Link>
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
      ) : open && !isCollector ? (
        <Menus>
          <Menu>
            <ButtonText>Impact</ButtonText>
            <Link to={ROUTES.COMPOSE_IMPACT}>
              <Button>
                <ImpactCreatorIcon width={16} height={16} />
              </Button>
            </Link>
          </Menu>
          <Menu>
            <ButtonText>Create LNFT</ButtonText>
            <Button value={Actions.CreateLNFT} onClick={setAction}>
              <LNFTIcon width={16} height={16} />
            </Button>
          </Menu>
          <Menu>
            <ButtonText>Create Multiple</ButtonText>
            <Button>
              <MultipleIcon width={20} height={20} />
            </Button>
          </Menu>
          <Menu>
            <ButtonText>Create Collection</ButtonText>
            <Button>
              <CollectionIcon width={20} height={20} />
            </Button>
          </Menu>
          <Menu>
            <ButtonText>Mix & Pimp</ButtonText>
            <Button style={{ background: '#696969' }}>
              <PlaskIcon width={20} height={20} />
            </Button>
          </Menu>
        </Menus>
      ) : null}
      <TriggerButton open={open} onClick={() => setOpen((prev: boolean) => !prev)}>
        {isCollector ? (
          <BuilderIcon width={open ? '24px' : '16px'} height={open ? '24px' : '16px'} />
        ) : !isCollector && !open ? (
          <LightBulbOffIcon width={'16px'} height={'16px'} />
        ) : (
          <LightBulbOnIcon width={'24px'} height={'24px'} />
        )}
      </TriggerButton>
    </Container>
  )
}
