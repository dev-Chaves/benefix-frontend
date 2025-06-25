const NavLink = ({children, href}) => {
  return( 
    <a href={href}
        className="text-blue-100 font-bold hover:text-brand-blue transition-colors duration-200"
    >{children}</a>
  )
}
export default NavLink