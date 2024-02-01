import { NavLink } from 'react-router-dom'
import './navbar.css'

const Navbar = () => {
    return (
        <>
            <nav class="navbar navbar-expand-md bg-body-tertiary">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">
                        <img src="/src/assets/CarvanaLOGO1.png" alt="Carvana Brand Logo" width="155"/>
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                        <NavLink class="nav-link" href="#" style={{ color: "#183558", fontWeight: "700", textDecoration: "none" }}>SEARCH CARS</NavLink>
                        </li>
                        <li class="nav-item">
                        <NavLink class="nav-link" href="#" style={{ color: "#183558", fontWeight: "700", textDecoration: "none" }}>SELL/TRADE</NavLink>
                        </li>
                        <li class="nav-item">
                        <NavLink class="nav-link" href="#" style={{ color: "#183558", fontWeight: "700", textDecoration: "none"  }} >FINANCING</NavLink>
                        </li>
                    </ul>
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item">
                            <NavLink class="nav-link" href="#" style={{ color: "#00AED9", fontWeight: "700", textDecoration: "none" }}>SIGN IN</NavLink>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>


        </>
    )
}

export default Navbar