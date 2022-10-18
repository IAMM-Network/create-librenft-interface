import { ExternalProvider } from '@ethersproject/providers/src.ts/web3-provider'

/// <reference types="react-scripts" />

declare global {
    interface Window {
        ethereum: ExternalProvider
    }
}