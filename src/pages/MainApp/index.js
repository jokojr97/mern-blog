import React from "react";
import { BrowserRouter, Outlet, Route, Router, Routes } from "react-router-dom";
import HomePage from "./Home";
import CreateBlog from "./CreateBlog";
import { Footer, Header } from "../../components";
import './mainApps.scss'

const MainApp = () => {
    return (
        <div className="main-app-wrapper">
            <div className="header-wrapper">
                <Header />
            </div>
            <div className="content-wrapper">
                <Outlet />
            </div>
            <div className="footer-wrapper">
                <Footer />
            </div>
        </div>
    )
}

export default MainApp