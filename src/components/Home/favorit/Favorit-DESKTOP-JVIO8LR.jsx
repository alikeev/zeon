import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CustomContext } from "../../../Context";
import "./Favorit.css"

const Favorit = () => {
    const { isFav } = useContext(CustomContext)
    return (<>
        <div className="container">
            <div className="slick_title">
                <ul>
                    <Link to={"/"} className="footer__link" >Главная </Link>
                    / <p className="product__link"> Избранное</p>
                </ul>
            </div>
        </div>
        <div className="favorit">
            <div className="container">
                <h1>Избранное</h1>
                <div className="fovorit_item">
                    {
                        isFav.map((item, idx) => (
                            <div className="fav_card" key={idx}>
                                <img className="fav_card_img" src={item.imageUrl} alt="photo" />
                                <div className="fav_card_info">
                                    <div className="fav_card_title">{item.title}</div>
                                    <div className="fav_card_price">{item.price}p</div>
                                    <div className="fav_card_size">Размер: {item.sizes}</div>
                                    <div className="fav_card_colors"></div>
                                </div>
                            </div>
                        ))}



                </div>
            </div>
        </div>
    </>);
}

export default Favorit;