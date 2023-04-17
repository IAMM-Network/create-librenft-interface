import { PopupContext, UserProfile } from './contexts'

const Providers: React.FC = ({ children }) => {
  return (
    <UserProfile>
      <PopupContext>{children}</PopupContext>
    </UserProfile>
  )
}

export default Providers
