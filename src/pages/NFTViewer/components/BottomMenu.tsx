import { PropsWithChildren, useState } from 'react';
import styled from 'styled-components';
import { Flex } from '../../../components/Box';
import { randomIntFromInterval } from '../../SocialFeed/data/types';
import { modalMode } from '../NFTViewer';
import { Text } from '../styles';

interface BottomMenuProps {
  mode: modalMode;
  setModalMode: (mode: modalMode) => void;
}

const TempImage = require('../../../assets/images/congrats-img.png')

export default function BottomMenu({ mode, setModalMode }: PropsWithChildren<BottomMenuProps>) {
    const [price, setPrice] = useState(0);

    const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPrice(Number(e.target.value));
    };

    return mode === 'buyer' ? (
    <Wrapper>
        <PrimaryButton>BUY NOW</PrimaryButton>
        <SecondaryButton>ADD TO WATCHLIST</SecondaryButton>
    </Wrapper>
    ) : mode === 'owner' ? (
    <Wrapper>
        <PrimaryButton onClick={() => setModalMode('putOnSale')}>PUT ON SALE</PrimaryButton>
        <SecondaryButton onClick={() => setModalMode('transfer')}>TRANSFER NOW</SecondaryButton>
    </Wrapper> 
    ) : mode === 'putOnSale' ? (
    <Wrapper>
        <Flex flexDirection={'column'}>
            <Text size="18px" weight={600}>Put on Sale</Text>
            <Flex flexDirection={'column'} maxWidth={540} marginTop={10} marginBottom={20}>
                <Text size="12px" weight={400} style={{ textAlign: 'left' }}>SET SALE PRICE</Text>
                <PriceInputContainer>
                    <Tag>pCKB</Tag>
                    <PriceInpput name="input" value={price} onChange={handlePriceChange} type={'number'} />
                </PriceInputContainer>
                <Text size="12px" weight={400} style={{ textAlign: 'right' }}>${price * 0.001}</Text>
            </Flex>
            <Flex>
                <RedButton onClick={() => setModalMode('owner')}>x</RedButton>
                <GreenButton onClick={() => setModalMode('owner')}>✓</GreenButton>
            </Flex>
        </Flex>
    </Wrapper>
    ) : mode === 'cancel' ? (
    <Wrapper>
        <Flex>
            <RedButton onClick={() => setModalMode('owner')}>Cancel</RedButton>
            <SecondaryButton onClick={() => setModalMode('transfer')}>TRANSFER NOW</SecondaryButton>
        </Flex>
    </Wrapper>
    ) : mode === 'acceptOffer' ? (
    <Wrapper>
        <Flex>
            <RedButton onClick={() => setModalMode('owner')}>MAYBE NOT</RedButton>
            <GreenButton onClick={() => setModalMode('owner')}>I'M SURE</GreenButton>
        </Flex>
    </Wrapper>
    ) : mode === 'transfer' ? (
    <Wrapper>
        <Flex flexDirection={'column'} width={'100%'} padding="0 10px" alignItems={'center'}>
            <Text size="18px" weight={600}>Transfer</Text>
            <Flex flexDirection={'column'} maxWidth={540} marginTop={10} marginBottom={20} width={'100%'}>
                <img style={{ margin: '10px auto 40px auto' }} src={TempImage} width={160} height={160} alt='nft-asset' />
                <Flex flexDirection={'column'} style={{ width: '100%' }} width={'100%'}> 
                    <Text style={{ textAlign: 'left' }} size="12px" weight={400}>
                        TRANSFER &quot;libreNFT #${randomIntFromInterval(0, 10000)}&quot; to:
                    </Text>
                    <TransferInpput 
                        name="input"
                        placeholder='e.g. ckb1qz... or @handle, or destination.eth/.lens'
                        type={'text'} 
                    />
                </Flex>
            </Flex>
            <Flex>
                <RedButton style={{ width: 'fit-content' }} onClick={() => setModalMode('owner')}>NOT NOW</RedButton>
                <GreenButton style={{ width: 'fit-content' }} onClick={() => setModalMode('owner')}>CONFIRM</GreenButton>
            </Flex>
        </Flex>
    </Wrapper>
    ) : null;
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  background: #1A1A1A;
  position: fixed;
  bottom: 60px;
  width: 100%;
  padding: 15px;
  z-index: 20000;
`;

const PrimaryButton = styled.button`
  display: flex;
  width: 120px;
  height: 45px;
  color: white;
  font-weight: 800;
  justify-content: center;
  align-items: center;
  padding: 4px 26px;
  background: #8B40F4;
  border-radius: 11px;
  border: none;
  margin-inline: 15px;
  cursor: pointer;
`

const SecondaryButton = styled(PrimaryButton)`
  background: transparent;
  border: 1px solid #8B40F4;
  color: #8B40F4;
`;

const RedButton = styled(PrimaryButton)`
  background: #F4404F;
  font-weight: 600;
  font-size: 18px;
`;

const GreenButton = styled(PrimaryButton)`
  background: #40F48B;
  font-weight: 600;
  font-size: 18px;
`;

const PriceInputContainer = styled.div`
  display: flex;
  height: 45px;
  color: #8B40F4;
  justify-content: center;
  align-items: center;
  border: 1px solid #8B40F4;
  border-radius: 8px;
  margin-block: 10px;
`;

const Tag = styled.div`
  display: flex;
  height: 45px;
  color: white;
  justify-content: center;
  align-items: center;
  padding: 4px 26px;
  border-right: 1px solid #8B40F4;
  margin-block: 10px;
  text-align: center;
  width: 30%;
`;

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
`;

const TransferInpput = styled.input`
  display: flex;
  align-items: center;
  background: none;
  color: white;
  border: none;
  height: 45px;
  text-align: left;
  border: 1px solid #8B40F4;
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
`;