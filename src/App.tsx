import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import { Provider } from "./providers/index"

import Table from "./components/@pages"
import Sum from "./components/@pages/Sum"

import "./styles.css"

export default function App() {
  return (
    <div className='App'>
      <Provider>
        <Router>
          <Routes>
            <Route path='/' element={<Table />} />
            <Route path='/sum' element={<Sum />} />
          </Routes>
        </Router>
      </Provider>
    </div>
  )
}
