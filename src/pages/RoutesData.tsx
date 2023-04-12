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
import NFTSettings from './NFTSettings/NFTSettings'

export const ROUTES = {
  HOME: '/',
  FEED: '/testnet/feed',
  THREAD: '/testnet/feed/show-this-thread/:thread_id',
  CREATE_SINGLE_NFT: '/testnet/create-single-nft',
  NFT_VIEWER_OWNER: '/testnet/viewer-owner-LNFT',
  NFT_VIEWER_BUYER: '/testnet/viewer-buyer-LNFT',
  SHARE_POST: '/testnet/impact-shareLNFT',
  TRANSFER_SUCCESS: '/testnet/viewer-owner-transferLNFT',
  PROFILE_HANDLE: '/testnet/profile-handle',
  PROFILE_DASHBOARD: '/testnet/profile-dashboard',
  CREATE_COLLECTION: '/testnet/create-collection',
  COLLECTION_INFO: '/testnet/collection/:collection_name',
  NFT_SETTINGS: '/testnet/settings-LNFT',
}

export const RoutesData = [
  {
    view: <Home />,
    path: ROUTES.HOME,
  },
  {
    view: <CreateSingleNFT />,
    path: ROUTES.CREATE_SINGLE_NFT,
  },
  {
    view: <CreateCollection />,
    path: ROUTES.CREATE_COLLECTION,
  },
  {
    view: <Profile />,
    path: ROUTES.PROFILE_DASHBOARD,
  },
  {
    view: <Collection />,
    path: ROUTES.COLLECTION_INFO,
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
    path: ROUTES.PROFILE_HANDLE,
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
  {
    view: <TransferSuccess/>,
    path: ROUTES.TRANSFER_SUCCESS,
  },
  {
    view: <NFTSettings/>,
    path: ROUTES.NFT_SETTINGS,
  },
]
