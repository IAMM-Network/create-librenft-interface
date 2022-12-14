/// <reference types="react-scripts" />

interface EthereumProvider {
    request: (request: { method: string; params?: any[] }) => Promise<any>;
    chainId: string;
    selectedAddress: string;
    networkVersion: string;
    on: any;
    removeListener: any;
    isConnected: () => boolean;
}

interface Window {
    ethereum: EthereumProvider
}