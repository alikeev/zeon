import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

function New() {
    const [items, setItems] = React.useState([])
    const [limit, setLimit] = React.useState(4)
    const [max, setMax] = React.useState(true)
    const params = useParams()
    function sore() {
        setLimit(limit + 4);
        if (limit == 4) {
            setMax(false);
        }
    }

    useEffect(() => {
        fetch(`http://localhost:3000/new?_limit=${limit}`)
            .then((res) => {
                return res.json();
            })
            .then((arr) => {
                setItems(arr);
            })
    }, [limit])

    let p = "p"

    const [heard, setHeard] = React.useState(false)
    const onClickHeader = () => {
        setHeard(!heard);
    }


    return (
        <>
            <div className="card_items">

                {items.map((items) => (

                    <div className="card" key={items.id}>

                        <img width={51} className="sale_card_img" src={items.salePrice ? "http://kg.ronishop.ru/test/tilek/tilek_lichnye/santes/img/sale.svg" : null} alt="" />
                        <div>{items.salePrice ? <><span className="sale_icon">{items.sale}</span></> : null}</div>
                        <div className="items_i">
                            <Link to={`/${items.category}/${items.id}`}>
                                <img className="card_img" src={items.imageUrl} alt="img" />
                            </Link>


                            <div className="card_item">
                                <div className="card_item_title">{items.title}</div>
                                <div className="card_item_price">{items.salePrice ? <>
                                    <span>{items.price} p </span>
                                    <span className="PriceSale" style={{ textDecoration: 'line-through' }}> {items.salePrice} c</span>
                                </>
                                    : ` ${items.price} ${p}`} </div>
                                <div className="card_item_size">Размер: {items.sizes}</div>
                                {items.color.map((item) => (
                                    <div key={item.id} className="card_item_circle_color" style={{
                                        backgroundColor: `${item}`
                                    }} ></div>
                                ))}

                            </div>


                        </div>


                    </div>
                ))}
            </div>
            {max ? <button className="click_btn" onClick={sore} >ЕЩЕ</button> : null}
        </>
    );
}

export default New;