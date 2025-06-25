import NavLink from "./NavLink"

const NavBar = () => {
  return (
    <nav className="mx-12 mt-8 mb-12 flex justify-between bg-principal rounded-4xl p-4">
        <div>
            <h1 className="text-2xl text-background font-Logo">Benefix</h1>
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