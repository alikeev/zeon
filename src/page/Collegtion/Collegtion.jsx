import { BrowserRouter } from 'react-router-dom'
import { Routes, Route, Link } from "react-router-dom";
import React from "react";
import "./collegtion.css"
import whatsapp from '../../'





const Collegtion = () => {
    const [items, setItems] = React.useState([])
    const [limit, setLimit] = React.useState(8)
    const [max, setMax] = React.useState(true)

    function sore() {
        setLimit(limit + 4);

    }

    React.useEffect(() => {
        fetch(`http://localhost:3000/collection?_limit=${limit}`)
            .then((res) => {
                return res.json();
            })
            .then((arr) => {
                setItems(arr);
            })
    }, [])


    return (
        <>
            <div className="collection">
                <div className="container">
                    <div className="coll-item">
                        {items.map((item) => (
                            <div className="coll__card" key={item.id}>
                                <img className="coll_img-g" src={item.image} alt="" />
                                <p className="coll_img_title">{item.title}</p>
                                <div className="coll__inner">
                                    <div className="coll__link">Смотреть все</div>
                                </div>
                            </div>
                        ))

                        }
                    </div>
                </div>
            </div>
        </>

    );
}

export default Collegtion;