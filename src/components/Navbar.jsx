import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <nav className="nav">
            <div>
                <div> <Link to="/">Home</Link></div>
                <div>  <Link to="/about">About</Link></div>
            </div>
        </nav>
    )
}

export default Navbar