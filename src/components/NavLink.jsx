const NavLink = ({children, href}) => {
  return( 
    <a href={href}
        className="text-background font-Titulos font-medium p-2 hover:text-durk transition-colors duration-200"
    >{children}</a>
  )
}
export default NavLink