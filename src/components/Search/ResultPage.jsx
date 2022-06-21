import React, { useEffect } from "react";
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import "./resultpage.css"
import Cards from "../Home/card.jsx";
const ResultPage = () => {
    const { name } = useParams();
    const [data, setData] = useState();
    useEffect(() => {
        axios.get(`http://localhost:3000/bestseller?title_like=${name}`)
            .then((a) => setData(a.data))
            .catch(console.error)
    }, []);
    console.log(data)
    return (<>

        <div className="container">
            <div className="slick_title">
                <Link to={"/"} className="footer__link" >Главная </Link>
                / <p className="product__link"> Избранное</p>
            </div>
        </div>
        <div className="resultpage">
            <div className="container">
                <div className="result">
                    {Array.isArray(data) &&
                        data.map((items) => {
                            return (
                                <Cards key={items.id} id={items.id} title={items.title} price={items.price} imageUrl={items.imageUrl} color={items.color} sizes={items.sizes} category={items.category} salePrice={items.salePrice} sale={items.sale} />
                            );
                        })}
                </div>
            </div>
        </div>
    </>
    );
};

export default ResultPage;