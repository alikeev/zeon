import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { BrowserRouter } from 'react-router-dom'
import { Routes, Route, Link } from "react-router-dom";
import "./news.css"


function News() {
    const [items, setItems] = useState([]);
    const [page, setPage] = useState(1);
    const [fetching, setFetching] = useState(true);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        if (fetching) {
            axios
                .get(`http://localhost:3000/inews?_limit=4&_page=${page}`)
                .then((response) => {
                    setItems([...items, ...response.data]);
                    setPage((prevState) => prevState + 1);
                    setTotal(response.headers["x-total-count"])
                })
                .finally(() => setFetching(false));
        }
    }, [fetching]);

    useEffect(() => {
        document.addEventListener("scroll", scrollBay);
        return function () {
            document.removeEventListener("scroll", scrollBay);
        }
    }, [fetching]);

    const scrollBay = (e) => {
        if (
            e.target.documentElement.scrollHeight -
            (e.target.documentElement.scrollTop + window.innerHeight) <
            100 && items.length < total
        ) {
            setFetching(true);
        }
    }
        ;

    return (
        <div className="news">
            <div className="news_line">
                <ul>
                    <Link to={"/"} className="footer__link" >Главная / </Link>
                    <Link to={"/News"} className="footer__link" >Новости</Link>
                </ul>
            </div>
            <div className="inner_container">
                <h1>Новости</h1>
                <div className="inner__news__item"  >
                    {items.map((items) => (
                        <div key={items.id} className="news__content">
                            <img className="inner__content__img" src={items.image} alt="img" />
                            <div className="inner__content_info">
                                <div className="news__title">{items.title}</div>
                                <div className="news__text">{items.text}</div>
                            </div>


                        </div>

                    ))}

                </div>
            </div>
        </div>

    );
}

export { News } 