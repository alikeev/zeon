import React from "react";
import { Link } from "react-router-dom";
import "./style.css"
import logosvg from '../../img/vector.svg'
import headerHeard from '../../img/header_heard.svg'
import basket from '../../img/basket.svg'
import basketin from '../../img/basketin.svg'
import { useContext } from "react";
import { CustomContext } from "../../Context";
function Header() {

    const { cart } = useContext(CustomContext)
    return (
        <header className="header">

            <div className="header__inner">
                <div className="container">
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
                </div>
                <div className="header__line">
                    <div className="container">
                        <div className="header__content">
                            <Link to={'/'} >
                                <img className="header__content_logo" src={logosvg} alt="" />
                            </Link>
                            <input className="search" type="text" placeholder="Поиск" />
                            <div className="header_basket">
                                <Link to={"/Favorit"} className="header__link" >
                                    <img src={headerHeard} alt="" /> Избранный</Link>
                                <div className="line_bor"></div>
                                <Link to={"/Korzina"} className="header__link" >
                                    <img src={cart.length ? basketin : basket} alt="" />
                                    <span>Корзина</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </header>


    );
}

export default Header;