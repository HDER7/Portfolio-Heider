function Navi(){
    return(
        <div>
        <nav id="navbar" className="navbar"><a href="/" to="/"> </a></nav>
        <div className="menu">
            <a href="/" className="menu-icon fas fa-home" to="/"> </a>
            <a href="/About" className="menu-icon fas fa-user" to="/About"> </a>
            <a href="/Projects" className="menu-icon fas fa-code" to="/Projects"> </a>
            <a href="/Contacts" className="menu-icon fas fa-envelope" to="/Contacts"> </a>
        </div>
        </div>
    );
}
export default Navi;