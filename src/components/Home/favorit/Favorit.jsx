import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CustomContext } from "../../../Context";
import "./Favorit.css"

const Favorit = () => {
    const { fromToFav, getFav, isFav } = useContext(CustomContext)
    const [heart, setHeart] = useState()
    const [action, setAction] = useState()
    const [data, setData] = useState()
    useEffect(() => {
        setHeart(isFav)
        setData(getFav())
    }, [action])
    console.log(data)
    return (<>
        <div className="container">
            <div className="slick_title">
                <Link to={"/"} className="footer__link" >Главная </Link>
                / <p className="product__link"> Избранное</p>
            </div>
        </div>
        <div className="favorit">
            <div className="container">
                <div className="fav_title">Избранное</div>
                <div className="fav_quantity">Товаров в избранном: {getFav.length}</div>
                <div className="fovorit_item">
                    {
                        data && data.map((item) => (
                            <div className="fav_card" key={item.id}>
                                <img onClick={() => { fromToFav(item); setAction(w => !w) }} className="fav_like" src="http://kg.ronishop.ru/test/tilek/tilek_lichnye/santes/img/redheard.svg" alt="" />
                                <img className="fav_card_img" src={item.imageUrl} alt="photo" />
                                <div className="fav_card_info">
                                    <div className="fav_card_title">{item.title}</div>
                                    <div className="fav_card_price">{item.price}p</div>
                                    <div className="fav_card_size">Размер: {item.sizes}</div>
                                    {item.color.map((item) => (
                                        <div key={item.id} className="card_item_circle_color" style={{
                                            backgroundColor: `${item}`
                                        }} ></div>
                                    ))}

                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    </>);
}

export default Favorit;