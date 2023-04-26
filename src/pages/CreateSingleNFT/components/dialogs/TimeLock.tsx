import { Box, Flex, Grid } from '../../../../components/Box'
import { Calendar, DayRange } from 'react-modern-calendar-datepicker'
import { Container } from '../../../../components/Layout'
import { Text, Hr, Section, A } from '../../styles'
import { CloseIcon, DeadlineIcon, LockIcon, TimeframeIcon, TimelineIcon } from '../../../../components/Svg'
import { Toggle } from 'react-toggle-component'
import { Button } from '../../../../components/Button'
import { Dispatch, SetStateAction } from 'react'
import { NFTConfig } from '../../CreateSingleNFT'
import FileUploader from '../input/FileUploader'

interface TimeLockProps {
  nftConfig: NFTConfig
  isUnlockableContent: boolean
  selectedTimeFrame: DayRange
  setNftConfig: Dispatch<SetStateAction<NFTConfig>>
  setIsUnlockableContent: Dispatch<SetStateAction<boolean>>
  setIsTimeLock: Dispatch<SetStateAction<boolean>>
  onClose: () => void
}

const TimeLock = ({
  nftConfig,
  isUnlockableContent,
  selectedTimeFrame,
  setNftConfig,
  setIsUnlockableContent,
  setIsTimeLock,
  onClose
}: TimeLockProps) => {
  // TODO date string upper Calendar

  return (
    <Flex width='100vw' height='100vh' background='#1A1A1A' top='0px' left='0px' position='fixed' zIndex={10000} justifyContent='center'>
      <Box overflowY='scroll' paddingBottom='3rem'>
        <Container maxWidth='90%'>
          <Flex justifyContent="end" paddingTop="1rem">
            <CloseIcon width={15} onClick={onClose} cursor="pointer" />
          </Flex>
          <Flex flexDirection='column' paddingTop='32px' marginTop="-1rem">
            <Text weight={600} size='21px'>
              Add Content Lock
            </Text>

            <Hr />

            <Section>
              <Grid margin='0.5rem 0' width='100%' gridTemplateColumns='1fr 8fr 3fr' alignItems='start'>
                <Grid alignSelf='start' justifySelf='start'>
                  <LockIcon width={15} fill='#8B40F4' />
                </Grid>
                <Grid flexDirection='column' width='100%'>
                  <Text margin='0px' weight={600}>
                    Unlockable Content
                  </Text>
                  <Text margin='0px'>Include unlockable content that can only be revealed by the owner of the item.</Text>
                </Grid>
                <Grid width='100%' alignItems='center' justifyContent='right'>
                  <Toggle
                    height='20px'
                    checked={isUnlockableContent}
                    leftBackgroundColor='#696969'
                    rightBackgroundColor='#8B40F4'
                    leftBorderColor='#696969'
                    rightBorderColor='#8B40F4'
                    knobColor='#1A1A1A'
                    name='toggle-isfractional'
                    onToggle={e => {
                      setIsUnlockableContent((e.target as HTMLInputElement).checked)
                    }}
                  />
                </Grid>
              </Grid>

              <Grid margin='0.5rem 0' width='100%' gridTemplateColumns='1fr 8fr 3fr' alignItems='start'>
                <Grid alignSelf='start' justifySelf='start'>
                  <TimeframeIcon width={15} fill='#8B40F4' />
                </Grid>
                <Grid flexDirection='column' width='100%'>
                  <Text margin='0px' weight={600}>
                    Timeframe
                  </Text>
                  <Text margin='0px'>Give exclusive time utility to your NFTex: Game levels access, clubs/communities memberships and more.</Text>
                </Grid>
                <Grid width='100%' alignItems='center' justifyContent='right'>
                  <Toggle
                    height='20px'
                    checked={nftConfig.timeframe}
                    leftBackgroundColor='#696969'
                    rightBackgroundColor='#8B40F4'
                    leftBorderColor='#696969'
                    rightBorderColor='#8B40F4'
                    knobColor='#1A1A1A'
                    name='toggle-timeframe'
                    onToggle={e => setNftConfig({ ...nftConfig, timeframe: (e.target as HTMLInputElement).checked })}
                  />
                </Grid>
              </Grid>
            </Section>

            <Hr />

            <Flex justifyContent='center'>
              <Button style={{ width: '120px', justifyContent: 'center' }} variant='cta' onClick={() => setIsTimeLock(false)}>
                Save
              </Button>
            </Flex>
          </Flex>
        </Container>
      </Box>
    </Flex>
  )
}

export default TimeLock
