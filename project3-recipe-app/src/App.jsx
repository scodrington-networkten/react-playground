import { useState } from 'react'
import './assets/css/index.scss'

import logo from '@assets/images/react.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
          <h2>Hello world!</h2>
          <img src={logo}/>
      </div>
    </>
  )
}

export default App
