import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {InvoiceApp} from './components/invoiceApp.jsx'

import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <InvoiceApp />
  </StrictMode>,
)
