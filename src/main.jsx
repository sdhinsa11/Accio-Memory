import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import MemoryGame from './MemoryGame.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MemoryGame />
  </StrictMode>,
)
