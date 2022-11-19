import { useParams } from 'react-router-dom'
import { Cover, Description, Filters, GridItems, JoinCommunity, Stats } from './components'

const Collection = () => {
  //get the collection name given by the URL collection_name param
  const { collection_name: collectionName } = useParams()

  return (
    <>
      <Cover collectionName={String(collectionName)} />
      <Description collectionName={String(collectionName)} />
      <Stats />
      <JoinCommunity />
      <Filters />
      <GridItems />
    </>
  )
}

export default Collection
