//se borro los import

import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePages from "./pages/HomePages"
import AboutPage from "./pages/AboutPage"





function App() {
  

  return (
    <>
  
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePages/>}></Route>
      <Route path="/about" element={<AboutPage/>}></Route>
      

    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
