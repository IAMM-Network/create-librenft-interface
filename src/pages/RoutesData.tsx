import { CreateCollection } from './CreateCollection'
import { CreateSingleNFT } from './CreateSingleNFT'
import { Collection } from './Collection'
import { Home } from './Home'
import Profile from './Profile/Profile'

export const RoutesData = [
  {
    view: <Home />,
    path: '/',
  },
  {
    view: <CreateSingleNFT />,
    path: 'create-single-nft',
  },
  {
    view: <CreateCollection />,
    path: 'create-collection',
  },
  {
    view: <Profile />,
    path: 'profile-dashboard',
  },
  {
    view: <Collection />,
    path: 'collection/:collection_name'
  }
]
