import { HashConnect } from "hashconnect";
const hashconnect = new HashConnect();


export function getPairingData(){

    console.log(hashconnect.hcData.pairingData);    
}