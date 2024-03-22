import axios from "axios"

import { useEffect } from "react"
import { useParams } from "react-router"



    function ImageDetails(){
    const {id} = useParams()
    
    async function downloadImage (){
        const response = await axios.get(`https://api.slingacademy.com/v1/sample-data/photos/${id}`)
        console.log(response);
    }

    useEffect(()=>{
       downloadImage()
    },[])

}



export default ImageDetails