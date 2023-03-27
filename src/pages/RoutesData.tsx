import { CreateCollection } from './CreateCollection'
import { CreateSingleNFT } from './CreateSingleNFT'
import { Collection } from './Collection'
import { Home } from './Home'
import Profile from './Profile/Profile'
import Handle from './Profile/Handle'
import { SocialFeed } from './SocialFeed'

export const RoutesData = [
  {
    view: <Home />,
    path: '/',
  },
  {
    view: <CreateSingleNFT />,
    path: 'testnet/create-single-nft',
  },
  {
    view: <CreateCollection />,
    path: 'testnet/create-collection',
  },
  {
    view: <Profile />,
    path: 'testnet/profile-dashboard',
  },
  {
    view: <Collection />,
    path: 'testnet/collection/:collection_name',
  },
  {
    view: <SocialFeed />,
    path: 'feed',
  },
  {
    view: <Handle />,
    path: 'testnet/profile-handle',
  },
]
