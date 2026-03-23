import { createRoot } from 'react-dom/client'

import PageJS from './PageJS/index.js'
import PageJSX from './PageJSX/index.jsx'

const App = () => {
  return (
    <div>
      App
      <PageJS />
      <PageJSX />
    </div>
  )
}

createRoot(document.getElementById('app')).render(<App />)
