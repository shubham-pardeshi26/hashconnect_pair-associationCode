import { TransactionId, TokenAssociateTransaction , AccountId, PrivateKey , Client } from "@hashgraph/sdk";
import { HashConnect, MessageTypes  } from "hashconnect";
const hashconnect = new HashConnect();

const userAccount = AccountId.fromString("0.0.7508");
const userPrivKey = PrivateKey.fromString("302e020100300506032b6570042204208abf0107722a86a8e58ff831237601a69ad0adf52baf5a15d16189416adea92d")
// const userPublicKey = PublicKey.fromString("302a300506032b65700321008be98a3bfd6b787c8a1e76afb4354e8e127a2d98f0e727d1e0294242d66aa1ff")

const clientForTestnet = Client.forTestnet().setOperator(userAccount, userPrivKey);

export function byteConversion(tokenId : string, accountId: string){
    const transectionId = TransactionId.generate(userAccount);
    const tokenlist = [];
    tokenlist.push(tokenId)
    const tx = new TokenAssociateTransaction()
        .setAccountId(accountId)
        .setTokenIds(tokenlist)
        .setNodeAccountIds([new AccountId(3)])
        .setTransactionId(transectionId)
        .freeze()

    const bytes = tx.toBytes()
    console.log("BYTES------"+bytes+"-------BYTES");
    return bytes
}

export async function signTransactionFromHashpack(bytesArray : Uint8Array){
    const r = window.localStorage.hashconnectData;
    const hashconnectSaveData = JSON.parse(r);
          
        const accountid : string = hashconnectSaveData.pairingData[0].accountIds[0]
        const topic1 : string = hashconnectSaveData.pairingData[0].topic;
        const ekey = hashconnectSaveData.encryptionKey;
        console.log("Topic ID :"+topic1);
        console.log("Account ID :"+accountid);
        console.log('Encryption key: '+ekey);

    // let transactionBytes: Uint8Array = await SigningService.signAndMakeBytes(trans);

        
    const transaction : MessageTypes.Transaction = {
        topic: topic1,
        byteArray: bytesArray,
        metadata: {
            accountToSign: accountid,
            returnTransaction: false,
            hideNft: false
        }
    }
    
    console.log("--------------------Before creating the transaction-----------------")
    console.log("Transaction: " + JSON.stringify(transaction)   + " object created"  );
    const response = await hashconnect.sendTransaction(topic1, transaction);
    console.log("--------------------After recieving the transaction the transaction-----------------")
    console.log(response);
    
    return {response}

}

export async function combineSignature(signature : any) {
   
    if(signature === Uint8Array)
    {
        const newtnx = TokenAssociateTransaction.fromBytes(signature);
        // const tnxwithsign = newtnx.addSignature(clientpubkey,singnature);
        const submitTx = await newtnx.execute(clientForTestnet);
        const receipt = await submitTx.getReceipt(clientForTestnet)
        const transactionStatus = `this is the status ` + receipt.status;
        console.log(transactionStatus);
        clientForTestnet.close();
        return transactionStatus
    }
    else{
        console.log("Signature is not a Uint8Array");
    } 
}