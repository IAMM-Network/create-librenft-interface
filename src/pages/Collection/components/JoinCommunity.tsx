import { Button } from '../../../components/Button'
import { CommunityIcon } from '../../../components/Svg'
import { JoinCommunityWrapper } from '../styles'

const JoinCommunity = () => (
  <JoinCommunityWrapper height='150' maxWidth='90%' margin='8px auto' marginTop='16px'>
    <Button variant='cta' startIcon={<CommunityIcon />} className='--justify-center'>
      Join Community
    </Button>
    {/**
     * //TODO: Add highlight about what is IAMM Community
     * <Box position="absolue" top="50%" right="0">
     *  <HilightIcon />
     * </Box>
     */}
  </JoinCommunityWrapper>
)

export default JoinCommunity
