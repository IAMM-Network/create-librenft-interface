import { Flex, Grid } from '../../../../components/Box'
import DatePicker, { DayRange, DayValue } from 'react-modern-calendar-datepicker'
import { Container } from '../../../../components/Layout'
import { Text, Hr, Section, TextArea, Input, A } from '../../styles'
import { LockIcon, TimeframeIcon } from '../../../../components/Svg'
import { Toggle } from 'react-toggle-component'
import { Button } from '../../../../components/Button'
import { Dispatch, SetStateAction } from 'react'

interface NFTTimeframe {
  from: number
  to: number
}

interface NFTConfig {
  fractional: number
  rentable: boolean
  timeframe: boolean | NFTTimeframe
  unlockable: boolean | string
  nsfw: boolean
  supply: number
}

interface TimeLockProps {
  nftConfig: NFTConfig
  isUnlockableContent: boolean
  isTimeframe: boolean
  selectedTimeFrame: DayRange
  setNftConfig: Dispatch<SetStateAction<NFTConfig>>
  setIsTimeframe: Dispatch<SetStateAction<boolean>>
  setIsUnlockableContent: Dispatch<SetStateAction<boolean>>
  setIsTimeLock: Dispatch<SetStateAction<boolean>>
  setSelectedTimeframe: Dispatch<SetStateAction<DayRange>>
}

const TimeLock = ({
  nftConfig,
  isUnlockableContent,
  isTimeframe,
  selectedTimeFrame,
  setNftConfig,
  setIsTimeframe,
  setIsUnlockableContent,
  setIsTimeLock,
  setSelectedTimeframe,
}: TimeLockProps) => {
  const calendarToDate = (calendar: DayValue) => (calendar ? String(`${calendar.month}/${calendar.day}/${calendar.year}`) : String(' '))

  //custom calendar input
  const renderCustomInput = ({ ref }: any) => (
    <Input
      readOnly
      ref={ref} // necessary
      placeholder='Select timeframe'
      value={
        selectedTimeFrame.from && selectedTimeFrame.to
          ? `${calendarToDate(selectedTimeFrame.from)} - ${calendarToDate(selectedTimeFrame.to)}`
          : ''
      }
      style={{
        background: '#8B40F4',
        width: '100%',
        textAlign: 'center',
        fontWeight: '900',
        padding: '1rem 2rem',
      }}
    />
  )

  return (
    <Flex width='100vw' height='100vh' background='#1A1A1A' top='0px' left='0px' position='fixed'>
      <Container maxWidth='90%'>
        <Flex flexDirection='column' paddingTop='32px'>
          <Text weight={600} size='21px'>
            Add Timelock
          </Text>

          <Hr />

          <Section>
            <Grid margin='0.5rem 0' width='100%' gridTemplateColumns='1fr 4fr 1fr' alignItems='center'>
              <Grid alignSelf='center'>
                <LockIcon fill='#8B40F4' />
              </Grid>
              <Grid flexDirection='column' width='100%'>
                <Text weight={600}>Unlockable Content</Text>
                <Text margin='0'>Include unlockable content that can only be revealed by the owner of the item.</Text>
              </Grid>
              <Grid width='100%' alignItems='center' justifyContent='right'>
                <Toggle
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

            {isUnlockableContent && (
              <>
                <TextArea
                  rows={4}
                  placeholder='Enter content (access key, code to redeem, link to a file, etc.)'
                  value={nftConfig.unlockable && typeof nftConfig.unlockable === 'string' ? nftConfig.unlockable : ''}
                  onChange={e => setNftConfig({ ...nftConfig, unlockable: e.target.value })}
                />
                <Text margin="1.5rem 0 1rem 0">
                  <A href='https://www.markdownguide.org/cheat-sheet/' target='__blank'>
                    Markdown
                  </A>{' '}
                  is supported!
                </Text>
              </>
            )}

            <Grid margin='0.5rem 0' width='100%' gridTemplateColumns='1fr 4fr 1fr' alignItems='center'>
              <Grid alignSelf='center'>
                <TimeframeIcon fill='#8B40F4' />
              </Grid>
              <Grid flexDirection='column' width='100%'>
                <Text weight={600}>Timeframe</Text>
                <Text margin='0'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporm.</Text>
              </Grid>
              <Grid width='100%' alignItems='center' justifyContent='right'>
                <Toggle
                  checked={isTimeframe}
                  leftBackgroundColor='#696969'
                  rightBackgroundColor='#8B40F4'
                  leftBorderColor='#696969'
                  rightBorderColor='#8B40F4'
                  knobColor='#1A1A1A'
                  name='toggle-rentable'
                  onToggle={e => setIsTimeframe((e.target as HTMLInputElement).checked)}
                />
              </Grid>
            </Grid>

            {isTimeframe && (
              <Flex justifyContent='center' marginTop='1rem'>
                <DatePicker
                  renderInput={renderCustomInput}
                  value={selectedTimeFrame}
                  onChange={e => {
                    setSelectedTimeframe(e)
                    setNftConfig({
                      ...nftConfig,
                      timeframe: {
                        from: Math.floor(new Date(calendarToDate(e.from)).getTime() / 1000),
                        to: Math.floor(new Date(calendarToDate(e.to)).getTime() / 1000),
                      },
                    })
                  }}
                  colorPrimary='#180A33'
                  colorPrimaryLight='#8B40F4'
                />
              </Flex>
            )}
          </Section>

          <Hr />

          <Flex justifyContent='center'>
            <Button variant='cta' onClick={() => setIsTimeLock(false)}>
              Save
            </Button>
          </Flex>
        </Flex>
      </Container>
    </Flex>
  )
}

export default TimeLock
