 import "./ImageCard.css"
 function ImageCard({image}){
    return(
        <div className="image-card">
            <img className="image" src={image}/>
        </div>
    )
 }

 export default ImageCard