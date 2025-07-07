import {BrowserRouter,Routes,Route} from "react-router-dom"
import "./app.css"

import Dashboard from "./pages/Dashboard"
import Home from "./pages/Home"
import DetailContainer from "./components/DetailContainer"
import Navbar from "./components/Navbar"
import Men from "./pages/Men"
import Footer from "./components/Footer"



function App() {


  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/" element={<Home/>}></Route>
        <Route path ="/mens wear" element={<Men/>}></Route>
      </Routes>
    <Footer/>
    </BrowserRouter>

  )
}

export default App
