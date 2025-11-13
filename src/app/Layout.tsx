import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import '../styles/index.css';

const Layout = ({children}:{children:React.ReactNode}) => {
    return(
        <div className="root-wrapper">
            <Navbar/>
                <main>
                    {children}
                    <Outlet/>
                </main>
            <Footer/>
        </div>
    )
}

export default Layout;