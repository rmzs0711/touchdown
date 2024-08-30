import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import WebApp from '@twa-dev/sdk'
import {AppRoot} from "@telegram-apps/telegram-ui";



WebApp.ready();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppRoot>
      <App />
    </AppRoot>
  </StrictMode>,
)
