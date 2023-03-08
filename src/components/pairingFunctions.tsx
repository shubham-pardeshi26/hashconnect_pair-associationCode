import { HashConnect } from "hashconnect";


let hashconnect = new HashConnect();

let appMetaData = {
    name: "DPA custom and trial application",
    description: "for making sure it works",
    icon: "https://cdn.pixabay.com/photo/2022/03/12/07/37/peace-7063559__340.png"
}

export class hashpackWallet{
     pairWallet = async () => {
        let initData = await hashconnect.init(appMetaData, 'testnet', false)
        
        hashconnect.foundExtensionEvent.once((walletMetaData) => {
            // console.log(walletMetaData)
            console.log("wallet found ... Pairing to the wallet")
            hashconnect.connectToLocalWallet();
        })
    
        hashconnect.pairingEvent.once((pairingData) => {
            console.log("pairingData : ", pairingData)
            // console.log(pairingData);
            console.log('wallet-paired');
            //gives u meta data have account ids and pairing data
            // console.log(`this is the paring data-------${pairingData}`);  
                hashconnect.connectionStatusChangeEvent.once((connectionStatus) => {
                    console.log("connection status : " + connectionStatus)
                })
        })
        
        return initData
    };
  
}

