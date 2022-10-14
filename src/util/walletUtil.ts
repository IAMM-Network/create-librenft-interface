import SignClient from "@walletconnect/sign-client";
import QRCodeModal from "@walletconnect/qrcode-modal";

export const onSessionConnected = (data:any) => console.log(data) 

export class WalletUtil {
    public static projectId = "d01df257d7ed76cf52851e91d2021adb"
    public static async connectWallet() {

        try {
            const signClient = await SignClient.init({
                projectId: WalletUtil.projectId,
                metadata: {
                    name: "IAMM - Polygon - WalletConnect",
                    description: "Building libre and creative economies through impact meta-markets",
                    url: "www.iamm.network",
                    icons: ["https://iamm.network/static/media/iamm-home.ed82176cc59e1f880bfb.png"],
                },
            });
            const { uri, approval } = await signClient.connect({
                // Optionally pairingTopic: pass a known prior pairing (e.g. from `client.pairing.values`) to skip the `uri` step.
                // Provide the namespaces and chains (e.g. `eip155` for EVM-based chains) we want to use in this session.
                requiredNamespaces: {
                  eip155: {
                    methods: [
                      "eth_sendTransaction",
                      "eth_signTransaction",
                      "eth_sign",
                      "personal_sign",
                      "eth_signTypedData",
                    ],
                    chains: ["eip155:1"],
                    events: ["chainChanged", "accountsChanged"],
                  },
                },
            });

            // Open QRCode modal if a URI was returned (i.e. we're not connecting an existing pairing).
            if (uri) {
                QRCodeModal.open(uri, () => {
                    console.log("EVENT", "QR Code Modal closed");
                });
            }

            // Await session approval from the wallet.
            const session = await approval();
            // Handle the returned session (e.g. update UI to "connected" state).
            await onSessionConnected(session);
        } catch(e){
            console.log(e)
        } finally {
            // Close the QRCode modal in case it was open.
            QRCodeModal.close();
        }
    }
}