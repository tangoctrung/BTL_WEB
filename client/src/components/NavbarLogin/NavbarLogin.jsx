import React from 'react';
import "./NavbarLogin.css";
import Logo from "../../data/images/logo_login.png";


function NavbarLogin() {
    return (
        <div className="navbarLogin">
            <div className="navbarLogin-info-img">
                    <img src={Logo} alt="logo" />
                </div>
                <div className="navbarLogin-title">
                    <h1>CitizenV</h1>
                    <p>Dự án điều tra, thống kê và phân tích dân số Việt Nam</p>
            </div>
        </div>
    )
}

export default NavbarLogin;
