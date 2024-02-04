
import axios from "axios"
import { useEffect, useState } from "react";
import ImageCard from "../ImageCard/ImageCard";
import "./ImageList.css"


function ImageList(){
    
    const [loading,setLoding] = useState(true)
    const [url,setUrl] = useState("https://api.slingacademy.com/v1/sample-data/photos")
    const [imageList,setImageList] = useState()
    const [isLoading,setIsLoading] = useState(true)

    async function downloadImage(){
       
        const res = await axios.get(url)
        const urlResult = res.data.photos
        console.log(urlResult);

        const imagResult = urlResult.map((img) =>{
            return{
                image:img.url,
                title:img.title,
                id:img.id,
                description:img.description  
            }
        })

        console.log(imagResult);
        setImageList(imagResult)
        setIsLoading(false)
    }
    useEffect(()=>{
        downloadImage()
    },[url])

    return(
        <div className="image-list-wrapper">
            <div className="image-wrapper">
                {
                  (isLoading ? "Loading...." : imageList.map((image , i)=> <ImageCard image={image.image} key={i}/>))
                }
            </div>

        
        </div>
    )
}
export default ImageList