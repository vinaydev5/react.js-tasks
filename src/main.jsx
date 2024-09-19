import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from "./App"
// import CustomizeTodos from './components/12-09-24task/todos'
// import CustomNavigation from './navigation/navigation.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <CustomNavigation/> */}
    {/* <CustomizeTodos/> */}
    <App/>

  </StrictMode>,
)
