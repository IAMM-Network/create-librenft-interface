import { Box, Flex, Grid } from '../../../../components/Box'
import { Container } from '../../../../components/Layout'
import { CircleCheckIcon, CloseIcon, FractionalIcon, RentableIcon, TransferableIcon } from '../../../../components/Svg'
import { Section, Hr, Text, Input } from '../../styles'
import { Toggle } from 'react-toggle-component'
import { Button } from '../../../../components/Button'
import { Dispatch, SetStateAction } from 'react'
import { NFTConfig } from '../../CreateSingleNFT'
import { Calendar, DayRange } from 'react-modern-calendar-datepicker'
import Checkbox from '../../../../components/Checkbox/Checkbox'
import { WhoPaysTheMint } from '../../../../data/nftConfig'

interface OwnershipLockProps {
  isFractional: boolean
  nftConfig: NFTConfig
  selectedRentableTimeFrame: DayRange
  setSelectedRentableTimeframe: Dispatch<SetStateAction<DayRange>>
  setIsOwnershipLock: Dispatch<SetStateAction<boolean>>
  setIsFractional: Dispatch<SetStateAction<boolean>>
  setNftConfig: Dispatch<SetStateAction<NFTConfig>>
  onClose: () => void
}

const OwnershipLock = ({
  isFractional,
  nftConfig,
  setIsFractional,
  setNftConfig,
  setIsOwnershipLock,
  selectedRentableTimeFrame,
  setSelectedRentableTimeframe,
  onClose,
}: OwnershipLockProps) => {
  return (
    <Flex width='100vw' height='100vh' background='#1A1A1A' top='0px' left='0px' position='fixed' zIndex={10000} justifyContent='center'>
      <Box overflowY='scroll' paddingBottom='3rem'>
        <Container maxWidth='90%'>
          <Flex justifyContent='end' paddingTop='1rem'>
            <CloseIcon width={15} onClick={onClose} cursor='pointer' />
          </Flex>
          <Flex flexDirection='column' paddingTop='32px' marginTop='-1rem'>
            <Text weight={600} size='21px'>
              Add OwnershipLock
            </Text>

            <Hr style={{ marginBottom: '1rem' }} />

            <Text style={{ width: '270px' }} margin='5px auto 25px auto'>
              Once active, these utilities options can be manage in the NFT Settings on your profile.
            </Text>

            <Section>
              <Grid margin='0.5rem 0' width='100%' gridTemplateColumns='1fr 8fr 3fr' alignItems='start'>
                <Grid alignSelf='start' justifySelf='start'>
                  <RentableIcon width={15} fill='#8B40F4' />
                </Grid>
                <Grid flexDirection='column' width='100%'>
                  <Text margin='0px' weight={600}>
                    Rentable
                  </Text>
                  <Text margin='0'>
                    This function will let you set up an specific rent time & date, allowing another user to utilize your NFT.
                  </Text>
                </Grid>
                <Grid width='100%' alignItems='center' justifyContent='right'>
                  <Toggle
                    height='20px'
                    checked={nftConfig.rentable}
                    leftBackgroundColor='#696969'
                    rightBackgroundColor='#8B40F4'
                    leftBorderColor='#696969'
                    rightBorderColor='#8B40F4'
                    knobColor='#1A1A1A'
                    name='toggle-rentable'
                    onToggle={e => { console.log(`Rentable: ${(e.target as HTMLInputElement).checked }`)
                      setNftConfig({ ...nftConfig, rentable: (e.target as HTMLInputElement).checked })
                    }}
                  />
                </Grid>
              </Grid>

              <Grid margin='0.5rem 0' width='100%' gridTemplateColumns='1fr 8fr 3fr' alignItems='start'>
                <Grid alignSelf='start' justifySelf='start'>
                  <FractionalIcon width={15} fill='#8B40F4' />
                </Grid>
                <Grid flexDirection='column' width='100%'>
                  <Text margin='0px' weight={600}>
                    Fractional
                  </Text>
                  <Text margin='0'>Allow your single NFT to be divided and collected in a specific number of fractions.</Text>
                </Grid>
                <Grid width='100%' alignItems='center' justifyContent='right'>
                  <Toggle
                    height='20px'
                    checked={isFractional}
                    leftBackgroundColor='#696969'
                    rightBackgroundColor='#8B40F4'
                    leftBorderColor='#696969'
                    rightBorderColor='#8B40F4'
                    knobColor='#1A1A1A'
                    name='toggle-isfractional'
                    onToggle={e => {
                      if (isFractional) setNftConfig({ ...nftConfig, fractional: 1 })
                      setIsFractional((e.target as HTMLInputElement).checked)
                    }}
                  />
                </Grid>
              </Grid>

              <Grid margin='0.5rem 0' width='100%' gridTemplateColumns='1fr 8fr 3fr' alignItems='start'>
                <Grid alignSelf='start' justifySelf='start'>
                  <TransferableIcon width={15} fill='#8B40F4' />
                </Grid>
                <Grid flexDirection='column' width='100%'>
                  <Text margin='0px' weight={600}>
                    Transferable
                  </Text>
                  <Text margin='0'>
                    Enable your NFT to be transferable, if not enable NFT wont be transferable after minting to owner/buyer.
                  </Text>
                </Grid>
                <Grid width='100%' alignItems='center' justifyContent='right'>
                  <Toggle
                    height='20px'
                    checked={nftConfig.transferable}
                    leftBackgroundColor='#696969'
                    rightBackgroundColor='#8B40F4'
                    leftBorderColor='#696969'
                    rightBorderColor='#8B40F4'
                    knobColor='#1A1A1A'
                    name='toggle-transferable'
                    onToggle={e => {
                      setNftConfig({ ...nftConfig, transferable: (e.target as HTMLInputElement).checked })
                    }}
                  />
                </Grid>
              </Grid>

              <Grid margin='0.5rem 0' width='100%' gridTemplateColumns='1fr 8fr 3fr' alignItems='start'>
                <Grid alignSelf='start' justifySelf='start'>
                  <CircleCheckIcon width={15} fill='#8B40F4' />
                </Grid>
                <Grid flexDirection='column' width='100%'>
                  <Text margin='0px' weight={600}>
                    Who pays the mint
                  </Text>
                  <Text margin='0'>Choose who is paying for the NFT minting transaction fee/cost.</Text>
                </Grid>
                <Grid width='100%' alignItems='start' justifyContent='end' marginTop='-12px'>
                  <Checkbox payers={WhoPaysTheMint} disabled={[1]} />
                </Grid>
              </Grid>
            </Section>

            <Hr />

            <Flex justifyContent='center'>
              <Button style={{ width: '120px', justifyContent: 'center' }} variant='cta' onClick={() => setIsOwnershipLock(false)}>
                Save
              </Button>
            </Flex>
          </Flex>
        </Container>
      </Box>
    </Flex>
  )
}

export default OwnershipLock
