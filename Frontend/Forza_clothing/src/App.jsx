import {BrowserRouter,Routes,Route} from "react-router-dom"
import Dashboard from "./pages/Dashboard"
import Home from "./pages/Home"


function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/" element={<Home/>}></Route>
      </Routes>
    </BrowserRouter>

  )
}

export default App
