import React, { useState } from "react";
import { byteConversion , signTransactionFromHashpack , combineSignature } from "./bytesConversion.Function";

export function AssociationPage(){
    const [inputValue, setInputValue] = useState("");

    const handleClick = async() => {
        console.log("This is the start of the function");
        const r = window.localStorage.hashconnectData;
        const hashconnectSaveData = JSON.parse(r);
        // console.log(hashconnectSaveData);
        // console.log(hashconnectSaveData.topic)
        // console.log(hashconnectSaveData.pairingData[0]);
        // const c = hashconnectSaveData.pairingData[0];
        const accountid = hashconnectSaveData.pairingData[0].accountIds[0]
        // const topic = hashconnectSaveData.pairingData[0].topic
        // const topic1 = JSON.stringify(topic);
        // console.log(topic);
        // console.log(accountid);
        // console.log(inputValue + "select value!!!");
        

        const bytes = byteConversion(inputValue,accountid);
        const signature = await signTransactionFromHashpack(bytes);
        const sign = signature.response.signedTransaction;
        console.log(sign);     
        const tnx = await combineSignature(sign);
        console.log(tnx);
    };

    const handleChange = (event : any ) => {
        setInputValue(event.target.value);
    }
  
    return(
        <>
            <div>
            <input type="text" value={inputValue} onChange={handleChange} />
            <button onClick={handleClick}>Associate token </button>
            </div>
        </>
    )
}