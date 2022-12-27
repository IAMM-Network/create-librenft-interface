import { Box, Flex, Grid } from '../../../../components/Box'
import { Container } from '../../../../components/Layout'
import { AlertIcon, CircleCheckIcon, TransferableIcon } from '../../../../components/Svg'
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
}

const OwnershipLock = ({
  isFractional,
  nftConfig,
  setIsFractional,
  setNftConfig,
  setIsOwnershipLock,
  selectedRentableTimeFrame,
  setSelectedRentableTimeframe,
}: OwnershipLockProps) => {
  return (
    <Flex width='100vw' height='100vh' background='#1A1A1A' top='0px' left='0px' position='fixed' zIndex={10000} justifyContent='center'>
      <Box overflowY='scroll' paddingBottom='3rem'>
        <Container maxWidth='90%'>
          <Flex flexDirection='column' paddingTop='32px'>
            <Text weight={600} size='21px'>
              Add OwnershipLock
            </Text>

            <Hr />

            <Section>
              <Grid margin='0.5rem 0' width='100%' gridTemplateColumns='1fr 8fr 3fr' alignItems='start'>
                <Grid alignSelf='start' justifySelf='start'>
                  <AlertIcon width={15} fill='#8B40F4' />
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
                    onToggle={e => {
                      setNftConfig({ ...nftConfig, rentable: (e.target as HTMLInputElement).checked })
                    }}
                  />
                </Grid>
              </Grid>

              <Box marginBottom='1rem'>
                <Calendar
                  value={selectedRentableTimeFrame}
                  onChange={setSelectedRentableTimeframe}
                  colorPrimary={nftConfig.rentable ? '#8B40F4' : '#696969'}
                  calendarClassName={nftConfig.rentable ? 'custom-calendar' : 'custom-calendar-disabled'}
                  colorPrimaryLight={nftConfig.rentable ? '#8B40F4' : '#696969'}
                />
              </Box>

              <Grid margin='0.5rem 0' width='100%' gridTemplateColumns='1fr 8fr 3fr' alignItems='start'>
                <Grid alignSelf='start' justifySelf='start'>
                  <AlertIcon width={15} fill='#8B40F4' />
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

              <Input
                disabled={!isFractional}
                style={{ marginBottom: '1rem' }}
                type='number'
                value={isFractional ? nftConfig.fractional : ''}
                min={1}
                max={100}
                placeholder='how many fractions?'
                onChange={e => setNftConfig({ ...nftConfig, fractional: parseInt(e.target.value, 10) })}
              />

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
              <Button variant='cta' onClick={() => setIsOwnershipLock(false)}>
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
