import { Box, Flex, Grid } from '../../../../components/Box'
import { Container } from '../../../../components/Layout'
import { AlertIcon, TransferableIcon } from '../../../../components/Svg'
import { Section, Hr, Text, Input } from '../../styles'
import { Toggle } from 'react-toggle-component'
import { Button } from '../../../../components/Button'
import { Dispatch, SetStateAction } from 'react'
import { NFTConfig } from '../../CreateSingleNFT'
import { Calendar, DayRange } from 'react-modern-calendar-datepicker'

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
    <Flex width='100vw' height='100vh' background='#1A1A1A' top='0px' left='0px' position='fixed' zIndex={10000}>
      <Container maxWidth='90%'>
        <Flex flexDirection='column' paddingTop='32px'>
          <Text weight={600} size='21px'>
            Add OwnershipLock
          </Text>

          <Hr />

          <Section>
            <Grid margin='0.5rem 0' width='100%' gridTemplateColumns='1fr 4fr 1fr' alignItems='center'>
              <Grid alignSelf='start' justifySelf='center'>
                <AlertIcon width={15} fill='#8B40F4' />
              </Grid>
              <Grid flexDirection='column' width='100%'>
                <Text margin='0px' weight={600}>
                  Rentable
                </Text>
                <Text margin='0'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporm.</Text>
              </Grid>
              <Grid width='100%' alignItems='center' justifyContent='right'>
                <Toggle
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

            {nftConfig.rentable && (
              <Box marginBottom='1rem'>
                <Calendar
                value={selectedRentableTimeFrame}
                onChange={setSelectedRentableTimeframe}
                colorPrimary='#8B40F4'
                calendarClassName='custom-calendar'
                colorPrimaryLight='#8B40F4'
              />
              </Box>
            )}

            <Grid margin='0.5rem 0' width='100%' gridTemplateColumns='1fr 4fr 1fr' alignItems='center'>
              <Grid alignSelf='start' justifySelf='center'>
                <AlertIcon width={15} fill='#8B40F4' />
              </Grid>
              <Grid flexDirection='column' width='100%'>
                <Text margin='0px' weight={600}>
                  Fractional
                </Text>
                <Text margin='0'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporm.</Text>
              </Grid>
              <Grid width='100%' alignItems='center' justifyContent='right'>
                <Toggle
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

            {isFractional && (
              <Input
                style={{ marginBottom: '1rem' }}
                type='number'
                value={nftConfig.fractional}
                placeholder='how many fractions?'
                onChange={e => {
                  if (parseInt(e.target.value) >= 1) {
                    setNftConfig({ ...nftConfig, fractional: parseInt(e.target.value, 10) })
                  }
                }}
              />
            )}

            <Grid margin='0.5rem 0' width='100%' gridTemplateColumns='1fr 4fr 1fr' alignItems='center'>
              <Grid alignSelf='start' justifySelf='center'>
                <TransferableIcon width={15} fill='#8B40F4' />
              </Grid>
              <Grid flexDirection='column' width='100%'>
                <Text margin='0px' weight={600}>
                  Transferable
                </Text>
                <Text margin='0'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporm.</Text>
              </Grid>
              <Grid width='100%' alignItems='center' justifyContent='right'>
                <Toggle
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
          </Section>

          <Hr />

          <Flex justifyContent='center'>
            <Button variant='cta' onClick={() => setIsOwnershipLock(false)}>
              Save
            </Button>
          </Flex>
        </Flex>
      </Container>
    </Flex>
  )
}

export default OwnershipLock
