import React from "react";
import { Link } from "react-router-dom";
import './style.css';

const Slick = () => {
    return (
        <div className="slick_title">
            <ul className="to">
                <Link to={"/"} className="footer__link" >Главная / </Link>
                <Link to={"/About"} className="footer__link" >  О нас</Link>
            </ul>
        </div>

    );
}

export default Slick;