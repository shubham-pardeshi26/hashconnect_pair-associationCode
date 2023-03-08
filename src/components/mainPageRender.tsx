import { AssociationPage } from "../associationFunction/associationPage";
import { factoryForWallet } from "./factoryMethod";

export function PairingWithHashpack(){
    

    return(
        <><select id='valueSelected'>
        <option value="blade">blade</option>
        <option value="shubham">shubham</option>
        <option value="nimitt">nimitt</option>
        <option value="hashpack">hashpack</option>
        </select>
        <button onClick={()=>{
            const valueSelected = catchSelected();
            let walletObj = new factoryForWallet().createWallet(valueSelected)
           if (walletObj !== undefined){
            walletObj.pairWallet()
           }
           else{
            console.log("error creating wallet of : "+ valueSelected)
           }
        }}>
            Pair with the wallet selected
        </button>
            <AssociationPage/>
        </>

        
        
    )
}

export function catchSelected(){
    let abc = document.getElementById("valueSelected") as HTMLInputElement;
    // console.log("-----------"+abc.value +"---------------");
    return abc.value;
}

export function getLocalData(){
    let savedData = JSON.parse(localStorage.hashconnectData)
    // console.log( savedData ) ;
    return savedData;
}