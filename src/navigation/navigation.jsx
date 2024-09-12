import { BrowserRouter, Route, Routes } from "react-router-dom"
import BasicExample from "../table/table"




const CustomNavigation =() =>{
    return(
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<BasicExample/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}
export default CustomNavigation