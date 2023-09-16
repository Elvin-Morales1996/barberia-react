//se borro los import

import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePages from "./pages/HomePages"
import Clients from "./pages/Clients"
import Services from "./pages/Services"
import Musics from "./pages/Musics"




function App() {
  

  return (
    <>
 
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePages/>}></Route>
      <Route path="/clients" element={<Clients/>}></Route>
      <Route path="/services" element={<Services/>}></Route>
      <Route path="/musics" element={<Musics/>}></Route>


    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
