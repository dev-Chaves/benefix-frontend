import NavLink from "./NavLink"

const NavBar = () => {
  return (
    <nav className="mx-auto flex justify-between bg-blue-300 rounded-4xl p-4 top-4 sticky">
        <div>
            <h1 className="text-2xl">Benefix</h1>
        </div>

        <div className="flex gap-6">
            <NavLink children={"Sobre"}/>
            <NavLink children={"Benefícios"}/>
            <NavLink children={"Contato"}/>
        </div>

    </nav>
  )
}

export default NavBar