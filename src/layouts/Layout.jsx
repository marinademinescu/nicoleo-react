import { Outlet } from "react-router-dom"

import Navbar from "../components/Footer"
import Footer from "../components/Footer"


const Layout = () => {
    return (
        <>

            <Navbar />
            <div className="page-render-box">
                <Outlet />
            </div>
            <Footer />

        </>
    )
}

export default Layout