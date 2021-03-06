import React from "react";
import './style.css';
import { Link } from "react-router-dom";
import Slick from "../slick_title/Slick";
import aboutImgOne from '../../img/about_img1.jpg'
import aboutImgTwo from '../../img/about_img2.jpg'
import aboutImgThree from '../../img/about_img3.jpg'

const About = () => {
    return (
        <>
            <div className="container">
                <div className="slick_title">
                    <ul className="to">
                        <Link to={"/"} className="footer__link" >Главная / </Link>

                        <Link to={"/About"} className="product__link" >О нас</Link>

                    </ul>
                </div>
            </div>

            <div className="about_page">

                <div className="container">
                    <div className="page_container">
                        <div className="img_info_one_col">
                            <img src={aboutImgOne} alt="img" />
                            <img src={aboutImgTwo} alt="img" />
                        </div>
                        <div className="img_info_one_row">
                            <img src={aboutImgThree} alt="img" />
                        </div>
                        <div className="about_content">
                            <h5>О нас</h5>
                            <p>У нас Вы найдёте всё, что Вам так нужно. Ассортимент магазина постоянно расширяется и дополняется в зависимости от пожеланий клиентов. Женская одежда из наших коллекций – это комфортная, стильная и качественная одежда не только на каждый день, но и для любых ситуаций по доступным ценам.Натуральные материалы, продуманные силуэты, современный дизайн и возможность легкого сочетания моделей помогут Вам всегда оставаться в центре внимания и чувствовать себя уместно в любой ситуации.Если Вы любите одеваться ярко, модно и оригинально, у нас Вы найдете все необходимое, чтобы всегда быть в центре внимания. У нас большая коллекция для любого торжества и праздника, которая сможет удовлетворить вкус самой взыскательной модницы! А для деловых ситуаций, в которых Вам непременно нужно выглядеть элегантно и стильно, мы предлагаем Вам одежду из коллекции "деловой стиль и офис". Мода постоянно диктует нам свои требования и для современной девушки, желающей идти в ногу со временем, важно иметь возможность постоянно пополнять свой гардероб стильной одеждой.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export { About }