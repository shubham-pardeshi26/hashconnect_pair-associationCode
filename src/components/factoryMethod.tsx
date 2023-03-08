import { hashpackWallet } from "./pairingFunctions";

export class factoryForWallet {
//    typeOfWallet : string;
//     constructor(str : string) {
//            this.typeOfWallet  = str;     
//     }

     createWallet(str : string)   {
        if(str === "hashpack") {
            return new hashpackWallet();
        }
        else if(str === "blade") {
            console.log("we dont have blade wallet integrated yet");
        }
        else if(str === "shubham") {
            console.log("we dont have shubham wallet integrated yet");
        }
        else if(str === "nimitt") {
            console.log("we dont have nimitt wallet integrated yet");
        }
    
  }
}