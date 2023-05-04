import "./App.css"
import { Routes, Route } from "react-router-dom"
import Home from "./features/home"
import Swap from "./features/swap"
import Farm from "./features/farm"
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trade" element={<Swap />} />
        <Route path="/earn" element={<Farm />} />
      </Routes>
    </>
  )
}

export default App
