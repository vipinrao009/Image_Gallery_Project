 import "./ImageCard.css"
 import { Link } from "react-router-dom"
 function ImageCard({image}){
    return(
        <Link to={"/"}>
        <div className="image-card">
            <img className="image" src={image}/>
        </div>
        </Link>
    )
 }

 export default ImageCard