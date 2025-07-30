import { useState } from 'react'
import './App.css'
import IndexPage from './IndexComponent/IndexPage'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Routes, Route, Link } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (
  <div>
    <Routes>
      <Route path='/' element={<IndexPage/>}/>
      <Route path='/product-details' element={<h1>this page is under development</h1>}/>
    </Routes>
  </div>
  )
}

export default App
