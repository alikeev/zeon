import React from "react";
import "./Helppage.css"
import help from "../../img/helppage.jpg"
import { Link } from "react-router-dom";
import Accord from "./accordion.jsx";

const Helppage = () => {
    return (
        <>
            <div className="container">
                <div className="slick_title">
                    <ul className="to">
                        <Link to={"/"} className="footer__link" >Главная / </Link>

                        <Link to={"/Helppage"} className="product__link" > Помощь </Link>

                    </ul>
                </div>
            </div>
            <div className="helppage">
                <div className="container">
                    <div className="helppage_item">
                        <div className="helppage__img">
                            <img src={help} alt="" />
                        </div>
                        <div className="Accord"> <Accord /></div>
                    </div>
                </div>
            </div>
        </>
    );
}

export { Helppage }