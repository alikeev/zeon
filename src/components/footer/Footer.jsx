import React from "react";
import './footer.css'
import { Routes, Route, Link } from "react-router-dom";
import logosvg from '../../img/footerlogo.svg'
import call from '../../img/call-phobe.png'
import sms from '../../img/sms.png'
import instagram from '../../img/instagram.png'
import telegram from '../../img/telegram.png'
import whatsapp from '../../img/whatsapp.png'


const Footer = ({ call, img }) => {
    return (
        <div className="footer">
            <div className="container">
                <div className="footer_inner">
                    <Link to={'/'}>
                        <img src={logosvg} alt="Zeonlogo" className="footer__inner__logo" />
                    </Link>
                    <div className="footer__inner__card">
                        <h5 className="footer__card__title">Компания</h5>
                        <ul className="footer__list">
                            <li className="footer__item">
                                <Link to={"/About"} className="footer__link" >О нас</Link>

                            </li>
                            <li className="footer__item">

                                <a href="" className="footer__link">Новости</a>
                            </li>
                            <li className="footer__item">
                                <a href="" className="footer__link">Помощь</a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer__inner__card">
                        <h5 className="footer__card__title">Контакты</h5>
                        <ul className="footer__list">
                            <li className="footer__item">
                                <img src={img} alt="phone" className="footer__item__logo" />
                                <a href="" className="footer__link">+{call}</a>
                            </li>
                            <li className="footer__item">
                                <img src={call} alt="phone" className="footer__item__logo" />
                                <a href="" className="footer__link">+{call}</a>
                            </li>
                            <li className="footer__item">
                                <img src={sms} alt="phone" className="footer__item__logo" />
                                <a href="" className="footer__link"> mail@gmail.com</a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer__inner__card">
                        <h5 className="footer__card__title">Мы в социальных сетях:</h5>
                        <ul className="footer__list">
                            <li className="footer__item">
                                <img src={instagram} alt="phone" className="footer__item__logo" />
                                <a href="" className="footer__link">Instagram</a>
                            </li>
                            <li className="footer__item">
                                <img src={telegram} alt="phone" className="footer__item__logo" />
                                <a href="" className="footer__link">Telegram</a>
                            </li>
                            <li className="footer__item">
                                <img src={whatsapp} alt="phone" className="footer__item__logo" />
                                <a href="" className="footer__link">Whatsapp</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="footer_l_t">
                    Developed by Zeon 2022
                </div>
            </div>
        </div>
    );
}

export default Footer;