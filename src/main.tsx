import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// GTM wird nicht mehr von hier aus geladen: Das Inline-Script in index.html
// erledigt das früher (und mit der Container-ID im Quelltext, damit die Search
// Console sie ohne JavaScript findet) — auf Basis derselben Einwilligung.

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
