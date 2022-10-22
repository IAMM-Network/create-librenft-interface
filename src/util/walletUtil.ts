import * as ethers from 'ethers';

export const onSessionConnected = (data:any) => console.log(data) 

export class WalletUtil {
    public static projectId = "d01df257d7ed76cf52851e91d2021adb"

    public static formatAddress(address:string) {
        return `${address.slice(0, 5)}...${address.slice(-7)}`
    }

    public static async connectWallet(callback:any) {

        try {
            const provider = new ethers.providers.Web3Provider(window.ethereum)

            const address = await provider.send('eth_requestAccounts', [])

            
            const signer = provider.getSigner()

            callback(address[0])

        } catch(e){
            console.log(e)
        } 
    }
}
