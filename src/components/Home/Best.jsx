import React, { useContext } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { CustomContext } from "../../Context";

const Best = ({ title, price, color, sizes, imageUrl, category, id }) => {
    const [heard, setHeard] = React.useState(false)
    const onClickHeader = () => {
        setHeard(!heard);
    };

    const { addFav } = useContext(CustomContext)

    return (
        <>
            <div className="card">
                <img onClick={onClickHeader} className="card_header" src={heard ? "http://kg.ronishop.ru/test/tilek/tilek_lichnye/santes/img/redheard.svg" : "http://kg.ronishop.ru/test/tilek/tilek_lichnye/santes/img/heard.svg"} alt="" />
                <div className="items_i">
                    <Link to={`/Product/${id}`}>
                        <img className="card_img" src={imageUrl} alt="img" />
                    </Link>
                    <div className="card_item">
                        <div className="card_item_title">{title}</div>
                        <div className="card_item_price">{price}р</div>
                        <div className="card_item_old">{category}</div>
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