import { BrowserRouter, Routes, Route, } from "react-router-dom"
import React from "react"
import Home from "./pages/Home"
import Footer from "./main-sections/footer"
import Header from "./main-sections/header"
import Rgister from "./pages/register"
import AllTeacher from "./pages/all"
import Profile from "./pages/profile"
import AboutUs from "./pages/aboutUs"
import './app.css'
const App = () => { 
    return ( <BrowserRouter >
        <Header/>
        <Routes >
            <Route exact path = "/" element = { < Home/> }/>
            <Route exact path = "join-us"element = { <Rgister/> }/>
            <Route  exact path = "all" element = { <AllTeacher/> }/ > 
            <Route exact path = "profile" element = { <Profile/> }/>
            <Route exact path ='aboutus' element = {<AboutUs/>}/>
        </Routes>
        <Footer/>

    </BrowserRouter> 



    )
}


export default App ; 