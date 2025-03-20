const HeaderNavigation = () => {
    return(
        <>
         <nav className="hidden md:flex space-x-6">
          <a href="/" className="hover:text-gray-200">Home</a>
          <a href="/about" className="hover:text-gray-200">About</a>
          <a href="/services" className="hover:text-gray-200">Services</a>
          <a href="/contact" className="hover:text-gray-200">Contact</a>
        </nav>
        </>
    )
}

export default HeaderNavigation;