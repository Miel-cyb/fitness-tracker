import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ClerkProvider } from '@clerk/clerk-react'
import {enUS} from '@clerk/localizations'

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY
const localization = {
  ...enUS,
  errors: {
    ...enUS.errors,
    authorization_invalid: "Invalid credentials. Please check your email and password.",
    form_identifier_not_found: "No account found. Try signing up first.",
  },
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/" localization={
      localization
    }>
      <App />
    </ClerkProvider>
  </StrictMode>,
)
