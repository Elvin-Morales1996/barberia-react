import { Link } from 'react-router-dom'

//rafce
export const Navbar = () => {
  return (
    <nav className="bg-gray-400">
    <div className="flex justify-between items-center px-20 py-6 ">
      
      <img className="h-14 bg-gradient-to-r from-cyan-500 to-blue-500" src="/src/img/el.ico" alt="" />
  
      <div class="text-5xl font-extrabold ...">
  <span class="bg-clip-text  bg-gradient-to-r from-pink-500 ">
    BARBERIA SHOP
  </span>
</div>
      
   
      <ul className="flex">
        <li >
            <Link to="/" className="text-white hover:text-gray-400 px-4 py-2">Inicio</Link>
        </li>
        <li>
            <Link to="/clients" className="text-white hover:text-gray-400 px-4 py-2">clientes</Link>
        </li>
        <li>
            <Link to="/services" className="text-white hover:text-gray-400 px-4 py-2">servicios</Link>
        </li>
        <li>
            <Link to="/musics" className="text-white hover:text-gray-400 px-4 py-2">Musics</Link>
        </li>
        <li>
            <Link to="/branches" className="text-white hover:text-gray-400 px-4 py-2">sucursales</Link>
        </li>
        
      </ul>
    </div>
  </nav>
  )
}





