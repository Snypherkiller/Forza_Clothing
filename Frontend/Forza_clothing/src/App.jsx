import {BrowserRouter,Routes,Route} from "react-router-dom"
import Dashboard from "./pages/Dashboard"
import Home from "./pages/Home"
import DetailContainer from "./components/DetailContainer"
import Navbar from "./components/Navbar"


function App() {


  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/" element={<Home/>}></Route>
      </Routes>
    </BrowserRouter>

  )
}

export default App
