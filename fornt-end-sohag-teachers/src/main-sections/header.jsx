import { Link } from "react-router-dom"
import React from "react";
const Header = () => {

    return ( <header className="header">
    <div className="container">
        <Link to="/" className="logo">معلمون سوهاج</Link>
        <div className="navs">
            <Link to="/">الرئيسية</Link>
            <Link to="join-us">انضم الينا</Link>
            <Link to="aboutus">About us</Link>
           
        </div>
    </div>
</header>
        

    )
}


export default Header ; 