import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import Body from './components/Body'
import AddComp from './pages/AddComp.jsx'
import { BrowserRouter } from 'react-router-dom'



createRoot(document.getElementById('root')).render(
<BrowserRouter>
{/* <Body/> */}

<App/>

</BrowserRouter>
)