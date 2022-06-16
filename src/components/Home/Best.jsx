import React, { useContext } from "react";
import { Link } from "react-router-dom";


const Best = ({ title, price, color, sizes, imageUrl, id, salePrice, category, sale }) => {
    const [heard, setHeard] = React.useState(false)
    const onClickHeader = () => {
        setHeard(!heard);
    }
    let p = "p"

    return (
        <>
            <div className="card">
                <img onClick={onClickHeader} className="card_header" src={heard ? "http://kg.ronishop.ru/test/tilek/tilek_lichnye/santes/img/redheard.svg" : "http://kg.ronishop.ru/test/tilek/tilek_lichnye/santes/img/heard.svg"} alt="" />
                <img width={51} className="sale_card_img" src={salePrice ? "http://kg.ronishop.ru/test/tilek/tilek_lichnye/santes/img/sale.svg" : null} alt="" />
                <div>{salePrice ? <><span className="sale_icon">{sale}</span></> : null}</div>

                <div className="items_i">
                    <Link to={`/${category}/${id}`}>
                        <img className="card_img" src={imageUrl} alt="img" />
                    </Link>
                    <div className="card_item">

                        <div className="card_item_title">{title}</div>
                        <div className="card_item_price">{salePrice ? <>
                            <span>{price} p </span>
                            <span className="PriceSale" style={{ textDecoration: 'line-through' }}> {salePrice} c</span>
                        </>
                            : ` ${price} ${p}`} </div>

                        <div className="card_item_size">Размер: {sizes}</div>
                        {color.map((item) => (
                            <div key={id} className="card_item_circle_color" style={{
                                backgroundColor: `${item}`
                            }} ></div>
                        ))}

                    </div>


                </div>


            </div>


        </>
    );
}

export default Best;