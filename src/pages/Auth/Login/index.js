import React from "react";
import { RegisterBg } from "../../../assets";
import { Button, Input, Gap, Link } from "../../../components";

const Register = () => {
    return (
        <div className="main-page">
            <div className="left">
                <img src={RegisterBg} className="bg-image" />
            </div>
            <div className="right">
                <p className="title">Form Login</p>
                <Input label="Email" placeholder="Email" />
                <Input label="Password" placeholder="Password" />
                <Gap height={20} />
                <Button title="Login" />
                <Gap height={60} />
                <Link title="Kembali Ke Login" />
            </div>
        </div>
    )
}

export default Register