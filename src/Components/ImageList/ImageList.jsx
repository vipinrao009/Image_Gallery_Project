
import axios from "axios"
import { useEffect, useState } from "react";


function ImageList(){
    
    const [loading,setLoding] = useState(true)
    const [url,setUrl] = useState("https://api.slingacademy.com/v1/sample-data/photos")

    async function downloadImage(){
       
        const res = await axios.get(url)
        const urlResult = res.data.photos
        console.log(urlResult);

    }
    useEffect(()=>{
        downloadImage()
    },[url])
    return(
        <>
        <h1>This is image list</h1>
        </>
    )
}
export default ImageList