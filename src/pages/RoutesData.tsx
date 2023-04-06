import { CreateCollection } from './CreateCollection'
import { CreateSingleNFT } from './CreateSingleNFT'
import { Collection } from './Collection'
import { Home } from './Home'
import Profile from './Profile/Profile'
import Handle from './Profile/Handle'
import { SocialFeed } from './SocialFeed'
import ShowThisThread from './ShowThisThread/ShowThisThread'
import NFTViewer from './NFTViewer/NFTViewer'
import SharePost from './Share/SharePost'

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
  {
    view: <Handle />,
    path: 'testnet/profile-handle',
  },
  {
    view: <NFTViewer mode="owner" />,
    path: 'testnet/viewer-owner-LNFT',
  },
  {
    view: <NFTViewer mode="buyer"/>,
    path: 'testnet/viewer-buyer-LNFT',
  },
  {
    view: <SharePost/>,
    path: 'testnet/impact-shareLNFT',
  },
]
