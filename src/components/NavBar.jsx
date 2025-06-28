import NavLink from "./NavLink"
import { useState } from "react"

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="mx-12 mt-8 mb-12 shadow-lg flex flex-wrap justify-between bg-principal rounded-4xl p-4 sticky top-4 z-50">
        <div className="flex items-center">
            <h1 className="text-2xl text-background font-Logo">Benefix</h1>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col justify-center items-center"
          aria-label="Menu"
        >
          {/* Linhas do menu */}
          <span className={`h-0.5 w-6 bg-background transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
          <span className={`h-0.5 w-6 bg-background my-1 transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
          <span className={`h-0.5 w-6 bg-background transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
        </button>

        <div className={`${isOpen ? 'flex' : 'hidden'} md:flex w-full md:w-auto flex-col md:flex-row gap-6 mt-4 md:mt-0`}>
            <NavLink href="#sobre">Sobre</NavLink>
            <NavLink href="#beneficios">Benefícios</NavLink>
            <NavLink href="#como-funciona">Como Funciona</NavLink>
            <NavLink href="#depoimentos">Depoimentos</NavLink>
            <NavLink href="#faq">FAQ</NavLink>
            <NavLink href="#contato">Contato</NavLink>
        </div>
    </nav>
  )
}

export default NavBar