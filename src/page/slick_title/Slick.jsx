import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import App from './style.css';

const Slick = () => {
    return (
        <div className="slick_title">
            <ul>
                <Link to={"/"} className="footer__link" >Главная / </Link>
                <Link to={"/About"} className="footer__link" >  О нас</Link>
            </ul>
        </div>

    );
}

export default Slick;