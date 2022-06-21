import React, { useEffect, useState, useContext } from "react";
import { Link, NavLink, useParams } from "react-router-dom";
import 'antd/dist/antd.css';
import { Pagination } from 'antd';
import { CustomContext } from "../../../Context";
import Sims from "../../Simproducts/sims.jsx";
import Cards from "../../../components/Home/card";
const CollecPage = (product) => {
    const [items, setItems] = React.useState([])
    const [heard, setHeard] = React.useState(false)
    const { sale, media } = useContext(CustomContext)
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
                <NavLink to={"/"} className="footer__link" > {params.category} </NavLink>
            </div>
        </div>
        <div className="collecPage">
            <div className="container">
                <div className="title_collection">Коллекция {params.category}</div>
                <div className="card_b">
                    {items.filter((items, idx) => {
                        return idx < page * 12 && idx + 1 > page * 12 - 12
                    }).map((items) => (
                        <Cards key={items.id} id={items.id} title={items.title} price={items.price} imageUrl={items.imageUrl} color={items.color} sizes={items.sizes} category={items.category} salePrice={items.salePrice} sale={items.sale} />
                    ))
                    }

                </div>

                <Pagination className="pagination" current={page} onChange={setPage} total={items.length} pageSize={9} />
                <div className="similar_products">Новинки</div>
                <div className="similar_inner_blocks">
                    {sale.map((items) => (
                        <Sims key={items.id} id={items.id} title={items.title} price={items.price} imageUrl={items.imageUrl} color={items.color} sizes={items.sizes} category={items.category} salePrice={items.salePrice} sale={items.sale} />
                    ))}






                    {/* {
                        sale.slice(0, 5).map((item) => (
                            <div key={item.id} className="similar_inner_block">
                                <img className="similar_inner_img" src={item.imageUrl} alt="" />
                                <div className="similar_inner-title">{item.price} p</div>
                                <div className="similar_title">{item.title} </div>
                                <div className="similar_size">Размер: {item.sizes}</div>
                                {
                                    item.color.map((item) => (
                                        <div key={item.id} className="similar_colors" style={{
                                            backgroundColor: item
                                        }}></div>
                                    ))
                                }
                            </div>
                        ))
                    } */}
                </div>

            </div>
        </div>
    </>);
}

export { CollecPage }