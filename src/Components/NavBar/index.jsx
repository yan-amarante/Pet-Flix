import homeIcon from "../../assets/homeIcon.svg"
import petflixLogo from "../../assets/petflixIcon.svg"
import "./styles.css"

function NavBar() {
    return (
        <nav className="container-nav">
            <img className="logo-icon" src={petflixLogo} />
            <img className="home-icon" src={homeIcon} />
        </nav>
    )
}

export default NavBar