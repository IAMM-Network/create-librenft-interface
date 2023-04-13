import styled from 'styled-components'
import LogoIcon from '../../Svg/Icons/LogoIcon'
import PeopleIcon from '../../Svg/Icons/PeopleIcon'

interface IAdditionalMenuProps {
  accounts: string[]
}
const AdditionalMenu = (props: IAdditionalMenuProps) => {
  const { accounts } = props
  const account = accounts.length > 0 ? [accounts[0].slice(0, -3), accounts[0].slice(-3)] : ['', '']

  return (
    <SectionWrapper>
      <LinkWrapper>
        <MenuLink href='.'>
          <LogoIcon width={20} height={20} />
          <span style={{ fontWeight: 'bold' }}>Dashboard</span>
        </MenuLink>
        <MenuLink href='.'>
          <PeopleIcon width={20} height={20} />
          <span>Profile</span>
        </MenuLink>
      </LinkWrapper>
      <ProfileWrapper>
        <Profile />
        <AccountWrapper>
          <span className='ellipsis'>{account[0]}</span>
          <span>{account[1]}</span>
        </AccountWrapper>
      </ProfileWrapper>
    </SectionWrapper>
  )
}

const SectionWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  .ellipsis {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`
const LinkWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: flex-start;
  margin-top: 1.5rem;
`
const ProfileWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const Profile = styled.div`
  width: 3.75rem;
  height: 3.75rem;
  overflow: hidden;
  border: 1px solid #8b40f4;
  border-radius: 50%;
`
const AccountWrapper = styled.div`
  max-width: 7rem;
  display: flex;
  overflow: hidden;
  padding: 0.75rem 1rem;
  border: 1.5px solid #8b40f4;
  border-radius: 0.75rem;
  span {
    color: white;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
  }
`

const MenuLink = styled.a`
  display: flex;
  align-items: center;
  color: white;
  text-decoration: none;
  gap: 1rem;

  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
`

export default AdditionalMenu
