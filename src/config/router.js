import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePages, Login, Register } from "../pages";

const RouteApps = () => {
    return (
        <React.Fragment>
            <BrowserRouter>
                <Routes>
                    <Route path="/" exact element={<HomePages />} />
                    <Route path="/register" exact element={<Register />} />
                    <Route path="/login" exact element={<Login />} />
                </Routes>
            </BrowserRouter>
        </React.Fragment>
    )
}

export default RouteApps
