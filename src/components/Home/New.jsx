import React, { useEffect } from "react";


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




    return (
        <>
            <div className="card_items">
                {items.map((items) => (


                    <div className="card" key={items.id}>

                        <div className="items_i">

                            <img src={items.imageUrl} alt="img" className="card_img" />

                            <div className="card_item">
                                <div className="card_item_title">{items.title}</div>
                                <div className="card_item_price">{items.price}р</div>
                                <div className="card_item_old">{items.category}</div>
                                <div className="card_item_size">Размер: {items.sizes}</div>
                                {items.color.map((it, i) => (
                                    <div key={it.id} className="card_item_circle_color" style={{
                                        backgroundColor: `${it.src}`
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