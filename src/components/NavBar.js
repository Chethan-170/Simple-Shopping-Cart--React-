export const NavBar = ({totalProducts}) => {
    return (  
        <nav className="navbar navbar-light bg-primary text-white">
          <h2 className="navbar-text ml-2 text-white">
            Shopping Cart 
          </h2>
          <span className="float-right mr-2" style={{fontSize:25}}>Total Products: {totalProducts}</span>
        </nav>
    );
}