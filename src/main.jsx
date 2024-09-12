import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import CustomNavigation from './navigation/navigation.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CustomNavigation/>

  </StrictMode>,
)
