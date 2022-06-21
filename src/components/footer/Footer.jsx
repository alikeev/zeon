import React from "react";
import './footer.css'
import { Link } from "react-router-dom";
import logosvg from '../../img/footerlogo.svg'
import call from '../../img/call.svg'
import sms from '../../img/sms.svg'
import instagram from '../../img/instagram.svg'
import telegram from '../../img/footer-teleg.svg'
import whatsapp from '../../img/footer-whats.svg'


const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="footer_inner">

                    <img src={logosvg} alt="Zeonlogo" className="footer__inner__logo" />

                    <div className="footer__inner__card">
                        <h5 className="footer__card__title">Компания</h5>
                        <ul className="footer__list">
                            <li className="footer__item">
                                <Link to={"/About"} className="footer__link" >О нас</Link>

                            </li>
                            <li className="footer__item">
                                <Link to={"/News"} className="footer__link" >Новости</Link>

                            </li>
                            <li className="footer__item">
                                <Link to={"/Helppage"} className="footer__link" >Помощь</Link>

                            </li>
                        </ul>
                    </div>
                    <div className="footer__inner__card">
                        <h5 className="footer__card__title">Контакты</h5>
                        <ul className="footer__list">
                            <li className="footer__item">
                                <img src={call} alt="phone" className="footer__item__logo" />
                                <a href="" className="footer__link">+996 500 123 456</a>
                            </li>
                            <li className="footer__item">
                                <img src={call} alt="phone" className="footer__item__logo" />
                                <a href="" className="footer__link">+996 500 123 456</a>
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