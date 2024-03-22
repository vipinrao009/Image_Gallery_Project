    import axios from "axios"
    import { useEffect, useState } from "react"
    import { useParams } from "react-router"
    import "./ImageDetails.css"


function ImageDetails(){
    const [image, setImage] = useState({});
    const {id} = useParams()
    const [loading, setLoading] = useState(true)
    
    async function downloadImage (){
        const response = await axios.get(`https://api.slingacademy.com/v1/sample-data/photos/${id}`)
        console.log(response);
        
        const data = response.data.photo
        console.log(data);
        setImage({
            photo:data.url,
            description:data.description,
            title:data.title
        })
    }

    useEffect(()=>{
       downloadImage()
    },[])

    return(
        <div className="singleImage-wrapper">
          <img className="imagee" src={image.photo} alt="" />
          <div className="wrapperr">
            <div className="titlee">{image.title}</div>
            <div className="description">{image.description}</div>
          </div>
        </div>
    )

}



export default ImageDetails