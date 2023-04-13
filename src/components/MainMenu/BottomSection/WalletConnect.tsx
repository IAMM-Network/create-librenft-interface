import styled from 'styled-components'
import Button from '../../Button/Button'
import ScanWalletIcon from '../../Svg/Icons/ScanWalletIcon'

interface IWalletConnectProps {
  MetaMaskInitialization: () => void
}
const WalletConnect = (props: IWalletConnectProps) => {
  const { MetaMaskInitialization } = props

  return (
    <SectionWrapper>
      <Button className='connectWallet' variant='cta' onClick={MetaMaskInitialization}>
        CONNECT WALLET
      </Button>
      <Button className='connectUnipass' variant='uni'>
        LOGIN WITH UNIPASS
      </Button>
      <ScanWalletIcon width='100%' height='100%' className='qrcode' />
    </SectionWrapper>
  )
}

const SectionWrapper = styled.div`
  width: 100%;
  display: grid;
  margin-top: 5rem;

  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 2.5rem;
  grid-row-gap: 0.5rem;
  grid-column-gap: 2.5rem;
  grid-template-areas:
    'connectWallet .'
    'connectUnipass qrcode';
  > button {
    height: 100%;
    display: flex;
    justify-content: center;
    margin: 0;
  }
  > .connectWallet {
    grid-area: connectWallet;
  }
  > .connectUnipass {
    grid-area: connectUnipass;
  }
  > .qrcode {
    grid-area: qrcode;
  }
`

export default WalletConnect
