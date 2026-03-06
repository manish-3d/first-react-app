import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Apple from './just.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Apple />
  </StrictMode>
)