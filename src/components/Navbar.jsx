import { Link } from 'react-router-dom'

//rafce
export const Navbar = () => {
  return (
    <nav className="bg-gray-400">
    <div className="flex justify-between items-center px-20 py-6 ">
      
      <img className="h-14 bg-gradient-to-r from-cyan-500 to-blue-500" src="/src/img/el.ico" alt="" />
  
      <div class="text-5xl font-extrabold ...">
  <span class="bg-clip-text  bg-gradient-to-r from-pink-500 ">
    BARSHOP
  </span>
</div>
      
   
      <ul className="flex">
        <li >
            <Link to="/" className="text-white hover:text-gray-400 px-4 py-2">Inicio</Link>
        </li>
        <li>
            <Link to="/about" className="text-white hover:text-gray-400 px-4 py-2">Acerca</Link>
        </li>

        <li>
            <Link to="/clients" className="text-white hover:text-gray-400 px-4 py-2">clients</Link>
        </li>

        <li>
            <Link to="/create" className="text-white hover:text-gray-400 px-4 py-2">nuevo</Link>
        </li>
        
      </ul>
    </div>
  </nav>
  )
}





