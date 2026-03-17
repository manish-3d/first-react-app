import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Apple from './just.jsx'
import {Person} from './just.jsx'
import{Clock} from './just.jsx'
import App from './App.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Apple />
    <Person/>
    <Clock/>
    <App/>
  </StrictMode>
)