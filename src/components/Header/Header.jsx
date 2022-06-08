import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./style.css"
import logosvg from '../../img/vector.svg'

function Header() {
    return (
        <header className="header">
            <div className="container">
                <div className="header__inner">
                    <div className="header__top">
                        <nav>
                            <ul className="header__list">
                                <li className="header__item">
                                    <Link to={"/About"} className="header__link" >О нас</Link>
                                </li>
                                <li className="header__item">
                                    <Link to={"/Collegtion"} className="header__link" >Коллекции</Link>
                                </li>
                                <li className="header__item">
                                    <Link to={"/News"} className="header__link" >Новости</Link>
                                </li>
                            </ul>
                        </nav>
                        <div className="header__phone">
                            <a className="phobe__link" href="tel: 996 000 00 00 00">
                                <span>Тел:</span> +996 000 00 00 00
                            </a>
                        </div>
                    </div>
                    <div className="header__line"></div>
                    <div className="header__content">
                        <Link to={'/'} >
                            <img className="header__content_logo" src={logosvg} alt="" />
                        </Link>
                        <input className="search" type="text" placeholder="Поиск" />
                        <div className="header_basket">
                            <Link to={"/Favorites"} className="header__link" >Избранный</Link>
                            <Link to={"/Korzina"} className="header__link" >Корзина</Link>
                        </div>
                    </div>
                    <div className="header__line"></div>
                </div>
            </div>
        </header>


    );
}

export default Header;