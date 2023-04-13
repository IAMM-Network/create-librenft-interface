import { PropsWithChildren, useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Flex } from '../../../components/Box'
import { ROUTES } from '../../RoutesData'
import { randomIntFromInterval } from '../../SocialFeed/data/types'
import { modalMode } from '../NFTViewer'
import { Text } from '../styles'

interface BottomMenuProps {
  mode: modalMode
  setModalMode: (mode: modalMode) => void
}

const TempImage = require('../../../assets/images/congrats-img.png')

export default function BottomMenu({ mode, setModalMode }: PropsWithChildren<BottomMenuProps>) {
  const [price, setPrice] = useState(0)
  const [onSale, setOnSale] = useState<boolean>(false)

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(Number(e.target.value))
  }

  const handleSaleConfirm = () => {
    setOnSale(true)
    setModalMode('owner')
  }

  const handleCancelSales = () => {
    setOnSale(false)
    setModalMode('owner')
  }

  return mode === 'buyer' ? (
    <Wrapper>
      <PrimaryButton>BUY NOW</PrimaryButton>
      <SecondaryButton>ADD TO WATCHLIST</SecondaryButton>
    </Wrapper>
  ) : mode === 'owner' ? (
    <Wrapper>
      {!onSale ? (
        <PrimaryButton onClick={() => setModalMode('putOnSale')}>
          PUT
          <br />
          ON SALE
        </PrimaryButton>
      ) : (
        <RedButton onClick={() => setModalMode('cancelSale')}>
          CANCEL
          <br />
          SALE
        </RedButton>
      )}
      <SecondaryButton onClick={() => setModalMode('transfer')}>
        TRANSFER
        <br />
        NOW
      </SecondaryButton>
    </Wrapper>
  ) : mode === 'putOnSale' ? (
    <Wrapper>
      <Flex flexDirection={'column'}>
        <Text size='18px' weight={600}>
          Put on Sale
        </Text>
        <Flex flexDirection={'column'} maxWidth={540} marginTop={10} marginBottom={20}>
          <Text size='12px' weight={400} style={{ textAlign: 'left' }}>
            SET SALE PRICE
          </Text>
          <PriceInputContainer>
            <Tag>pCKB</Tag>
            <PriceInpput name='input' value={price} onChange={handlePriceChange} type={'number'} />
          </PriceInputContainer>
          <Text size='12px' weight={400} style={{ textAlign: 'right' }}>
            ${price * 0.001}
          </Text>
        </Flex>
        <Flex>
          <RedButton onClick={() => setModalMode('owner')}>x</RedButton>
          <GreenButton onClick={handleSaleConfirm}>✓</GreenButton>
        </Flex>
      </Flex>
    </Wrapper>
  ) : mode === 'cancelSale' ? (
    <Wrapper>
      <Flex>
        <RedButton onClick={() => setModalMode('owner')}>MAYBE NOT</RedButton>
        <GreenButton onClick={handleCancelSales}>I'M SURE</GreenButton>
      </Flex>
    </Wrapper>
  ) : mode === 'transfer' ? (
    <Wrapper>
      <Flex flexDirection={'column'} width={'100%'} padding='0 10px' alignItems={'center'}>
        <Text size='18px' weight={600}>
          Transfer
        </Text>
        <Flex flexDirection={'column'} maxWidth={540} marginTop={10} marginBottom={20} width={'100%'}>
          <img style={{ margin: '10px auto 40px auto' }} src={TempImage} width={160} height={160} alt='nft-asset' />
          <Flex flexDirection={'column'} style={{ width: '100%' }} width={'100%'}>
            <Text style={{ textAlign: 'left' }} size='12px' weight={400}>
              TRANSFER &quot;libreNFT #${randomIntFromInterval(0, 10000)}&quot; to:
            </Text>
            <TransferInpput name='input' placeholder='e.g. ckb1qz... or @handle, or destination.eth/.lens' type={'text'} />
          </Flex>
        </Flex>
        <Flex>
          <RedButton onClick={() => setModalMode('owner')}>NOT NOW</RedButton>
          <Link style={{ textDecoration: 'none' }} to={ROUTES.TRANSFER_SUCCESS}>
            <GreenButton>CONFIRM</GreenButton>
          </Link>
        </Flex>
      </Flex>
    </Wrapper>
  ) : null
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  background: #1a1a1a;
  position: fixed;
  bottom: 60px;
  width: 100%;
  padding: 15px;
  z-index: 20000;
`

const PrimaryButton = styled.button`
  display: flex;
  width: 120px;
  height: 45px;
  color: white;
  justify-content: center;
  align-items: center;
  background: #8b40f4;
  border-radius: 11px;
  border: none;
  margin-inline: 15px;
  cursor: pointer;
  font-family: 'Montserrat' !important;
  font-weight: 800;
  font-size: 16px;
  text-decoration: none;
  box-sizing: border-box;
`

const SecondaryButton = styled(PrimaryButton)`
  background: transparent;
  border: 1px solid #8b40f4;
  color: #8b40f4;
`

const RedButton = styled(PrimaryButton)`
  background: #f4404f;
`

const GreenButton = styled(PrimaryButton)`
  background: #40f48b;
`

const PriceInputContainer = styled.div`
  display: flex;
  height: 45px;
  color: #8b40f4;
  justify-content: center;
  align-items: center;
  border: 1px solid #8b40f4;
  border-radius: 8px;
  margin-block: 10px;
`

const Tag = styled.div`
  display: flex;
  height: 45px;
  color: white;
  justify-content: center;
  align-items: center;
  padding: 4px 26px;
  border-right: 1px solid #8b40f4;
  margin-block: 10px;
  text-align: center;
  width: 30%;
`

const PriceInpput = styled.input`
  display: flex;
  align-items: center;
  background: none;
  color: white;
  border: none;
  height: 45px;
  text-align: right;
  width: 70%;
  padding-right: 20px;

  ::placeholder {
    color: #696969;
  }
  &:focus {
    outline: none;
  }
`

const TransferInpput = styled.input`
  display: flex;
  align-items: center;
  background: none;
  color: white;
  height: 45px;
  text-align: left;
  border: 1px solid #8b40f4;
  border-radius: 8px;
  padding: 5px 12px;
  width: 100%;
  margin-top: 5px;

  ::placeholder {
    color: #696969;
  }
  &:focus {
    outline: none;
  }
`
