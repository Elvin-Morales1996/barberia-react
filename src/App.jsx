//se borro los import

import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePages from "./pages/HomePages"
import AboutPage from "./pages/AboutPage"
import { Clients } from "./pages/Clients"






function App() {
  

  return (
    <>
  
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePages/>}></Route>
      <Route path="/about" element={<AboutPage/>}></Route>
<<<<<<< HEAD
      <Route path="/clients" element={<Clients/>}></Route>
      
=======
  
>>>>>>> 06a9867ce6b3189fe9cfbae55d0a77d70fc2eaab
      

    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
