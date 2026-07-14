import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { initConsent } from './lib/consent'

// Falls der Nutzer bei einem früheren Besuch eingewilligt hat, GTM direkt laden.
initConsent()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
