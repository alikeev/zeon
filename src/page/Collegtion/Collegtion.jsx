import { useParams, Link, NavLink } from "react-router-dom";
import React from "react";
import "./collegtion.css"
import 'antd/dist/antd.css';
import { Pagination } from 'antd';
const Collegtion = () => {
    const params = useParams();
    const [items, setItems] = React.useState([])
    const [page, setPage] = React.useState(1);
    React.useEffect(() => {
        fetch(`http://localhost:3000/collection/`)
            .then((res) => {
                return res.json();
            })
            .then((arr) => {
                setItems(arr);
            })
    }, [])

    return (
        <>
            <div className="container">
                <div className="slick_title">

                    <Link to={"/"} className="footer__link" >Главная </Link>
                    /
                    <p className="product__link"> Коллекции</p>


                </div>
            </div>
            <div className="collection">
                <div className="container">
                    <div className="title_collection">Коллекции</div>
                    <div className="coll-item">
                        {items.filter((item, idx) => {
                            return idx < page * 8 && idx + 1 > page * 8 - 8
                        }).map((item) => (
                            <div className="coll__card" key={item.id}>
                                <img className="coll_img-g" src={item.image} alt="" />
                                <p className="coll_img_title">{item.title}</p>
                                <div className="coll__inner">
                                    <Link to={`/collecPage/${item.category}/${item.id}`}>
                                        <div className="coll__link" >Смотреть все</div>
                                    </Link>

                                </div>
                            </div>
                        ))

                        }
                    </div>
                    <div className="pag"></div>
                    <Pagination className="pagination" current={page} onChange={setPage} total={items.length} pageSize={8} />;
                </div>
            </div>
        </>

    );
}

export default Collegtion;