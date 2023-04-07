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
import TransferSuccess from './TranferSuccess/TransferSuccess'

export const ROUTES = {
  HOME: '/',
  FEED: '/testnet/feed',
  THREAD: '/testnet/feed/show-this-thread/:thread_id',
  CREATE_SINGLE_NFT: '/testnet/create-single-nft',
  NFT_VIEWER_OWNER: '/testnet/viewer-owner-LNFT',
  NFT_VIEWER_BUYER: '/testnet/viewer-buyer-LNFT',
  SHARE_POST: '/testnet/impact-shareLNFT',
  TRANSFER_SUCCESS: '/testnet/viewer-owner-transferLNFT',
}

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
    path: ROUTES.FEED,
  },
  {
    view: <ShowThisThread />,
    path: ROUTES.THREAD,
  },
  {
    view: <Handle />,
    path: 'testnet/profile-handle',
  },
  {
    view: <NFTViewer mode="owner" />,
    path: ROUTES.NFT_VIEWER_OWNER,
  },
  {
    view: <NFTViewer mode="buyer"/>,
    path: ROUTES.NFT_VIEWER_BUYER,
  },
  {
    view: <SharePost/>,
    path: ROUTES.SHARE_POST,
  },
  {
    view: <TransferSuccess/>,
    path: ROUTES.TRANSFER_SUCCESS,
  },
]
