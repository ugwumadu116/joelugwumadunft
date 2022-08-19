const pinataSDK = require('@pinata/sdk');
require("dotenv").config()
const fs = require('fs')
const pinata = pinataSDK(process.env.PENATA_API_Key, process.env.PENATA_API_Secret);

const readableStreamForFile = fs.createReadStream('./images/j1.jpeg');


const options = {
    pinataMetadata: {
        name: "joelugwumadunft",
        keyvalues: {
            customKey: 'customValue',
            customKey2: 'customValue2'
        }
    },
    pinataOptions: {
        cidVersion: 0
    }
};



const pinFileToIPFS = async () => {
    try {
        const result =  await pinata.pinFileToIPFS(readableStreamForFile, options)
        return `https://gateway.pinata.cloud/ipfs/${result.IpfsHash}`
        
    } catch (error) {
        console.log(error);
    }
   const result =  await pinata.pinFileToIPFS(readableStreamForFile, options)
   return `https://gateway.pinata.cloud/ipfs/${result.IpfsHash}`
}

const pinJSONToIPFS = async (body) => {
    try {
        const result = await  pinata.pinJSONToIPFS(body, options)
        return `https://gateway.pinata.cloud/ipfs/${result.IpfsHash}`
        
    } catch (error) {
        console.log(error);
    }
  
}

const getMetada = async () => {
    const imgURL = await pinFileToIPFS()
    const body = {
        name:"joelugwumadunft",
        description:"my first joelugwumadu nft project ",
        image:imgURL,
     };


     const metaData = await pinJSONToIPFS(body)
     
   
     console.log(metaData)

}

getMetada()








