import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import {App, Test} from './App.jsx'
import Navbar from './Navbar.jsx';

const root = document.getElementById('root');
createRoot(root).render(
    <StrictMode>
        <App/>
        <Test/>
        <Navbar/>
    </StrictMode>,
)


