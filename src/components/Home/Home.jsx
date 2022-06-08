import React, { useEffect } from "react";
import { BrowserRouter } from 'react-router-dom'
import "./style.css"
import Best from "./Best.jsx";
import New from "./New.jsx";
import Collegtion from "../../page/Collegtion/Collegtion";
import Slider from "react-slick/lib/slider";
import CorouselBox from "./slider";

function Home() {
    const [items, setItems] = React.useState([])
    const [limit, setLimit] = React.useState(8)
    const [max, setMax] = React.useState(true)

    function more() {
        setLimit(limit + 4);
        if (limit == 12) {
            setMax(false);
        }
    }

    useEffect(() => {
        fetch(`http://localhost:3000/media?_limit=${limit}`)
            .then((res) => {
                return res.json();
            })
            .then((arr) => {
                setItems(arr);
            })
    }, [limit])


    return (
        <div className="home">
            <div className="container">
                <CorouselBox />
                <h1 className="home_title">Хит продаж</h1>
                <div className="card_items">
                    {items.map((items) => (
                        <Best key={items.id} id={items.id} title={items.title} price={items.price} imageUrl={items.imageUrl} color={items.color} sizes={items.sizes} category={items.category} />
                    ))} {max ? <button className="click_btn" onClick={more} >ЕЩЕ</button> : null}
                </div>
                <h1 className="home_title">Новинки</h1>
                <New />
                <h1 className="home_title">Коллекция</h1>
                <Collegtion />


            </div>
        </div >
    );
}


export default Home;


