import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainApp, Login, Register, HomePage, CreateBlog, DetailBlog } from "../pages";

const RouteApps = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/register" exact element={<Register />} />
                <Route path="/login" exact element={<Login />} />
                <Route path="/" element={<MainApp />} >
                    <Route path="/" element={<HomePage />} />
                    <Route path="create" element={<CreateBlog />} />
                    <Route path="detail/:postId" element={<DetailBlog />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default RouteApps
