//se borro los import

import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePages from "./pages/HomePages"
import Clients from "./pages/Clients"
import Services from "./pages/Services"
import Musics from "./pages/Musics"
import Branches from "./pages/Branches"
import Styles from "./pages/Styles"
import Drinks from "./pages/Drinks"
import Shedules from "./pages/Shedules"
import Appointments from "./pages/Appointments"




function App() {
  

  return (
    <>
 
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePages/>}></Route>
      <Route path="/clients" element={<Clients/>}></Route>
      <Route path="/services" element={<Services/>}></Route>
      <Route path="/musics" element={<Musics/>}></Route>
      <Route path="/branches" element={<Branches/>}></Route>
      <Route path="/styles" element={<Styles/>}></Route>
      <Route path="/drinks" element={<Drinks/>}></Route>
      <Route path="/shedules" element={<Shedules/>}></Route>
      <Route path="/apo" element={<Appointments/>}></Route>
      
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
