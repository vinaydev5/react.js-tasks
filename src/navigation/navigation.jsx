import { BrowserRouter, Route, Routes } from "react-router-dom"
import Search from "../table/table"
import CustomizeTodos from "../components/12-09-24task/todos"




const CustomNavigation =() =>{
    return(
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Search/>}/>
                    <Route path="todos" element={<CustomizeTodos/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}
export default CustomNavigation