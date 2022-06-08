import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CustomContext } from "../../../Context";
import "./Korzina.css"
const Korzina = () => {

    const { cart, deleteCart } = useContext(CustomContext)

    return (<>
        <div className="container">
            <div className="slick_title">
                <ul>
                    <Link to={"/"} className="footer__link" >Главная </Link>
                    / <p className="product__link"> Корзина</p>
                </ul>
            </div>
        </div>
        <div className="baster">
            <div className="container">
                <div className="basket_inner">
                    {
                        cart.map((item, idx) => (
                            <div className="basket_cart" key={idx}>
                                <img className="basket_img" src={item.imageUrl} alt="" />
                                <div className="basket_inner_block">
                                    <div className="basket_title">{item.title}</div>
                                    <div className="basket_size">Размер: {item.sizes}</div>
                                    <div className="basket_color-item"  >Цвет: <span className="basket_color" style={{ backgroundColor: item.color }}>ff</span></div>
                                    <div className="basket_price">{item.price} P</div>
                                    <div className="basker_delete" onClick={() => deleteCart(item.id, item.color, item.sizes)} ></div>
                                </div>
                            </div>
                        ))

                    }
                    <div className="basket-item">

                    </div>

                </div>
            </div>
        </div>
    </>);
}

export default Korzina;