import { CreateCollection } from './CreateCollection'
import { CreateSingleNFT } from './CreateSingleNFT'
import { Collection } from './Collection'
import { Home } from './Home'
import Profile from './Profile/Profile'
import { SocialFeed } from './SocialFeed'
import ShowThisThread from './ShowThisThread/ShowThisThread'

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
    path: 'testnet/feed',
  },
  {
    view: <ShowThisThread />,
    path: 'testnet/feed/show-this-thread/:thread_id',
  },
]
