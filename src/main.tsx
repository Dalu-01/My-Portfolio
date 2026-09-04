import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
)

const initialLoader = document.getElementById('initial-loader')

if (initialLoader) {
  window.setTimeout(() => {
    initialLoader.classList.add('is-hidden')
    window.setTimeout(() => initialLoader.remove(), 500)
  }, 350)
}
