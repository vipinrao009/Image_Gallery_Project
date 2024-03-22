import { Route, Routes } from "react-router-dom"
import ImageList from "../Components/ImageList/ImageList"
import ImageDetails from "../Components/ImageDetails/ImageDetails";

function CustomRouter (){
    return(
        <div className="custom-router">
            <Routes>
                <Route path="/" element ={<ImageList/>}/>
                <Route path="/image/:id" element={<ImageDetails/>}/>
            </Routes>

        </div>
    )
}

export default CustomRouter;
