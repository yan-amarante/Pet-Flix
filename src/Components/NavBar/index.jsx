import homeIcon from "../../assets/homeIcon.svg"
import petflixLogo from "../../assets/petflixIcon.svg"
import { Link } from "react-router-dom"
import "./styles.css"

function NavBar() {
    return (
        <nav className="container-nav">
            <img className="logo-icon" src={petflixLogo} />
            <Link className="link-home" to='/'>
            <img className="home-icon" src={homeIcon} />
            </Link>
        </nav>
    )
}

export default NavBar