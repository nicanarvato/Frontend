import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Way from './Way.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Way />
  </StrictMode>,
)

