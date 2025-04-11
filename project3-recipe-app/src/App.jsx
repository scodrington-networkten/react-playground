import {useState} from 'react'
import './assets/css/index.scss'
import logo from '@assets/images/react.svg'
import Header from '@components/header';
import Footer from "@components/footer.jsx";
import Main from "@components/Main.jsx";

function App() {
    //const [count, setCount] = useState(0)

    return (
        <>
            <div className="main">
                <Header/>
                <Main/>
                {/*<Footer/>*/}
            </div>
        </>
    )
}

export default App
