import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Cards from "./card";
function New() {
    const [items, setItems] = React.useState([])
    const [limit, setLimit] = React.useState(4)
    const [max, setMax] = React.useState(true)
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
                    <Cards key={items.id} id={items.id} title={items.title} price={items.price} imageUrl={items.imageUrl} color={items.color} sizes={items.sizes} category={items.category} salePrice={items.salePrice} sale={items.sale} />
                ))}
            </div>
            {max ? <button className="click_btn" onClick={sore} >ЕЩЕ</button> : null}
        </>
    );
}

export default New;