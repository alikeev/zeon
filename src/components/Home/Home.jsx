import React, { useContext, useEffect } from "react";
import "./style.css"
import { Link } from "react-router-dom";
import Best from "./Best.jsx";
import New from "./New.jsx";
import CorouselBox from "./slider";
import { CustomContext } from "../../Context";
import Modal from "./Modal/Modal";
import hookPhone from '../../img/hook_phone.svg'
import hookArrow from '../../img/hook_arrow.svg'
import hookMess from '../../img/hook_mess.svg'
import hookClose from '../../img/hook_close.svg'
import hookWhapsapp from '../../img/hook_whatsapp.svg'
import hookTelegram from '../../img/hook_telegramm.svg'
import Advantages from "./advantages/advantages.jsx";
function Home() {
    const [modalActive, setModalActive] = React.useState(false)
    const [hookActive, setHookActive] = React.useState(false)
    const { collec } = useContext(CustomContext)
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
        fetch(`http://localhost:3000/bestseller?_limit=${limit}`)
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
                        <Best key={items.id} id={items.id} title={items.title} price={items.price} imageUrl={items.imageUrl} color={items.color} sizes={items.sizes} category={items.category} salePrice={items.salePrice} sale={items.sale} />
                    ))} {max ? <button className="click_btn" onClick={more} >ЕЩЕ</button> : null}
                </div>
                <h1 className="home_title">Новинки</h1>
                <New />
                <h1 className="home_title">Коллекция</h1>

                <div className="coll-item">
                    {
                        collec.slice(0, 4).map((item) => (
                            <div className="coll__card" key={item.id}>
                                <img className="coll_img-g" src={item.image} alt="" />
                                <p className="coll_img_title">{item.title}</p>
                                <div className="coll__inner">
                                    <Link onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} to={`/collecPage/${item.category}/${item.id}`}>
                                        <div className="coll__link" >Смотреть все</div>
                                    </Link>

                                </div>
                            </div>
                        ))

                    }
                    < button className="click_btn" onClick={collec ? collec.slice(0, 8) : null}  >ЕЩЕ</button>
                </div>
                <Modal active={modalActive} setActive={setModalActive} />
                <div className="hooks">
                    <img width={25} src={hookArrow} alt="" />
                    <div className="hooks_inner">
                        <img onClick={() => setHookActive((d) => !d)} style={{ marginTop: 20 }} src={hookActive ? hookClose : hookMess} alt="" />
                    </div>
                </div>
                <div className={hookActive ? "hooks_item active " : "hooks_item"} onClick={() => setHookActive(false)}>
                    <a href=""> <img width={44} src={hookTelegram} alt="" /></a>
                    <a href=""> <img width={44} src={hookWhapsapp} alt="" /></a>
                    <img width={44} onClick={() => setModalActive(true)} src={hookPhone} alt="" />
                </div>
                <h1 className="home_title">Наши преимущества</h1>
                <Advantages />
            </div>
        </div >
    );
}


export default Home;


