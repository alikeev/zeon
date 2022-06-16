import React, { useEffect, useState, useContext } from "react";
import { Link, NavLink, useParams } from "react-router-dom";
import 'antd/dist/antd.css';
import { Pagination } from 'antd';
import { CustomContext } from "../../../Context";
const CollecPage = (product) => {
    const [items, setItems] = React.useState([])
    const [heard, setHeard] = React.useState(false)
    const { media } = useContext(CustomContext)
    const params = useParams()
    const onClickHeader = () => {
        setHeard(!heard);
    }
    useEffect(() => {
        fetch(`http://localhost:3000/${params.category}`)
            .then((res) => {
                return res.json();
            })
            .then((arr) => {
                setItems(arr);
            })
    }, [])

    let p = "p"

    const [page, setPage] = useState(1);



    return (<>
        <div className="container">
            <div className="slick_title">
                <Link to={"/"} className="footer__link" >Главная </Link>
                /
                <Link to={"/<Collegtion>"} className="footer__link" > Коллекции </Link>
                /
                <NavLink to={"/"} className="footer__link" > {params.category}</NavLink>
            </div>
        </div>
        <div className="collecPage">
            <div className="container">
                <div className="title_collection">Коллекция {params.category}</div>
                <div className="card_b">
                    {items.filter((item, idx) => {
                        return idx < page * 12 && idx + 1 > page * 12 - 12
                    }).map((item) => (
                        <div className="collectionCard">
                            <img onClick={onClickHeader} className="card_header" src={heard ? "http://kg.ronishop.ru/test/tilek/tilek_lichnye/santes/img/redheard.svg" : "http://kg.ronishop.ru/test/tilek/tilek_lichnye/santes/img/heard.svg"} alt="" />
                            <img width={51} className="sale_card_img" src={item.salePrice ? "http://kg.ronishop.ru/test/tilek/tilek_lichnye/santes/img/sale.svg" : null} alt="" />
                            <Link to={`/${item.category}/${item.id}`}>
                                <img className="card_img" src={item.imageUrl} alt="img" />
                            </Link>
                            <div className="card_item">
                                <div className="card_item_title">{item.title}</div>
                                <div className="card_item_price">{item.salePrice ? <>
                                    <span>{item.price} p </span>
                                    <span className="PriceSale" style={{ textDecoration: 'line-through' }}> {item.salePrice} c</span>
                                </>
                                    : ` ${item.price} ${p}`} </div>

                                <div className="card_item_size">Размер: {item.sizes}</div>
                                {item.color.map((item) => (
                                    <div key={item.id} className="card_item_circle_color" style={{
                                        backgroundColor: `${item}`
                                    }} ></div>
                                ))}

                            </div>


                        </div>
                    ))
                    }

                </div>

                <Pagination className="pagination" current={page} onChange={setPage} total={items.length} pageSize={9} />
                <div className="similar_products">Новинки</div>
                <div className="similar_inner_blocks">
                    {
                        media.slice(0, 5).map((item) => (
                            <div key={item.id} className="similar_inner_block">
                                <img className="similar_inner_img" src={item.imageUrl} alt="" />
                                <div className="similar_inner-title">{item.price} p</div>
                                <div className="similar_title">{item.title} </div>
                                <div className="similar_size">Размер: {item.sizes}</div>
                                {
                                    item.color.map((it) => (
                                        <div key={it.id} className="similar_color" style={{
                                            backgroundColor: it.src
                                        }}></div>
                                    ))
                                }





                            </div>
                        ))
                    }
                </div>

            </div>
        </div>
    </>);
}

export { CollecPage }