import styled from 'styled-components'
import { Grid, Flex, Box } from '../../../components/Box'

/* Cover */
export const CoverContainer = styled.section`
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  position: relative;
`
export const CoverPicture = styled.img`
  width: 100%;
`

export const ProfilePicture = styled.img`
  height: 160px;
  width: 160px;
`

/* Description */
export const CollectionTitle = styled.h1`
  color: white;
  font-size: 22px;
`
export const CollectionCreator = styled.h4`
  color: white;
  font-size: 14px;
  font-weight: 300;

  strong {
    font-weight: 600;
  }
`
export const CollectionDescription = styled.p`
  color: white;
  font-size: 12px;
`
export const LevelImg = styled.img`
  height: 25px;
  margin-top: 8px;
  margin-bottom: 8px;
`

/* Stats */
export const StatsWrapper = styled(Grid)`
  max-width: 90%;
  border: 0.5px solid #ffffff;
  margin: 0 auto;
  border-radius: 18px;
  padding: 12px 8px;
`

export const StatsValue = styled.h3`
  color: white;
  font-weight: 600;
  font-size: 18px;
`

export const StatsItem = styled.h5`
  color: white;
  font-weight: 300;
  font-size: 10px;
`

/* Join Community */
export const JoinCommunityWrapper = styled(Grid)`
  position: relative;

  button.--justify-center {
    justify-content: center;
  }
`

/* Filters */
export const InputWrapper = styled(Flex)`
  align-items: center;
  border: 1px solid #626262;
  border-radius: 8px;
  position: relative;
  margin: 8px auto;
  width: 90%;
  padding: 8px 16px;
`

export const TextInput = styled.input`
  background-color: transparent;
  color: white;
  border: none;
  outline: none;
  padding-left: 16px;

  ::placeholder {
    color: white;
  }
`

/* GridItems */
export const GridItemsCollectionName = styled.h3`
  font-size: 12px;
  font-weight: 600;
`

export const GridItemsImage = styled(Box)`
  background: linear-gradient(110deg, #ececec 8%, #f5f5f5 18%, #ececec 33%);
  background-size: 200% 100%;
  height: 144px;

  animation: .5s shine ease-out infinite;

  @keyframes shine {
  to {
    background-position-x: -200%;
  }
}
`

export const GridItemsTokenId = styled.h3`
  margin-top: 4px;
  font-size: 12px;
  font-weight: 300;
`
