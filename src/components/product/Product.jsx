import React, { useContext, useState } from "react";
import { CustomContext } from "../../Context";
import "./product.css"
import { useParams, Link, NavLink } from "react-router-dom";
import axios from "axios";
import basketIcon from '../../img/basket_icon.svg'
import blackHeard from '../../img/black_header.svg'

const Product = () => {
    const params = useParams();
    const [color, setColor] = useState('')
    const [product, setProduct] = useState({});
    const { media, addCart, addFav } = useContext(CustomContext)
    const [butActive, setButActive] = useState(false)

    const sendTo = (id, color, price, imageUrl, title, category, sizes) => {
        addCart(id, color, price, imageUrl, title, category, sizes);
        setButActive(true);
    };


    React.useEffect(() => {
        axios(`http://localhost:3000/${params.category}/${params.id}`)
            .then(({ data }) => {
                setProduct(data)
                setColor(data.color[0])
            })
    }, []);

    return (
        <>
            <div className="container">
                <div className="slick_title">

                    <Link to={"/"} className="footer__link" >Главная </Link>
                    /
                    <NavLink to={"/"} className="footer__link" >{product.category} </NavLink>
                    /
                    <p className="product__link">{product.title}</p>

                </div>
            </div>
            <div className="product">
                <div className="container">
                    {product.title && <>
                        <div className="product_list">
                            <div className="product_list-img">
                                <img className="product_b_img" src={product.imageUrl} alt="" />
                                <img className="product_b_img" src={product.imageUrl} alt="" />
                            </div>
                            <div className="product_info">
                                <div className="product_info-title">
                                    {product.title}
                                </div>
                                <div className="articul">
                                    Артикул: <span>{product.articul}</span>
                                </div>
                                <div className="product_colors">
                                    Цвет:
                                    {
                                        product.color.map((item) => (
                                            <li onClick={() => setColor(item)} key={item.id} style={{ background: item }} className={`product_color ${item == color ? "product_color_active" : ''}`}></li>
                                        ))

                                    }
                                </div>
                                <div className="product-price">{product.price} p</div>
                                <div className="product_info_i">
                                    О товаре:
                                </div>
                                <div className="product_info_inner">
                                    {product.cardinfo}
                                </div>
                                <div className="product_sizes">
                                    <li className="product_size">Размерный ряд: {product.sizes}</li>
                                    <li className="product_size">Состав ткани: {product.sizes}</li>
                                </div>
                                <div className="product_sizes">
                                    <li className="product_size">Размерный ряд: {product.sizes}</li>
                                    <li className="product_size">Состав ткани: {product.sizes}</li>
                                </div>
                                <div className="buttons">
                                    {butActive ? (
                                        <Link to="/Korzina" >
                                            <button className="button-b" ><img width={20} src={basketIcon} alt="basket" /> Перейти в корзину</button>
                                        </Link>
                                    ) : (
                                        <button className="button-b" onClick={() => sendTo({
                                            id: product.id,
                                            title: product.title,
                                            imageUrl: product.imageUrl,
                                            sizes: product.sizes,
                                            color,
                                            price: product.price,
                                            category: product.category

                                        })}> <img width={20} src={basketIcon} alt="" /> Добавить в корзину</button>
                                    )}

                                    <button type="button" className="button-f" onClick={() => addFav({
                                        id: product.id,
                                        title: product.title,
                                        imageUrl: product.imageUrl,
                                        sizes: product.sizes,
                                        color,
                                        price: product.price,
                                        category: product.category
                                    })}> <img width={23} src={blackHeard} alt="" /> </button>
                                </div>
                            </div>
                        </div>
                        <div className="product_list-img">
                            <img className="product_b_img" src={product.imageUrl} alt="" />
                            <img className="product_b_img" src={product.imageUrl} alt="" />
                        </div>
                        <div className="product_list-img">
                            <img className="product_s_img" src={product.imageUrl} alt="" />
                            <img className="product_s_img" src={product.imageUrl} alt="" />
                            <img className="product_s_img" src={product.imageUrl} alt="" />
                            <img className="product_s_img" src={product.imageUrl} alt="" />
                        </div>
                        <div className="similar_products">Похожие товары</div>
                        <div className="similar_inner_blocks">
                            {
                                media.filter((item) => {
                                    return item.category == product.category && item.id !== product.id
                                }).slice(0, 5).map((item) => (
                                    <Link to={params.id}>   <div key={item.id} className="similar_inner_block">
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
                                    </div></Link>
                                ))
                            }
                        </div>
                    </>}
                </div>
            </div>
        </>
    );
}

export { Product }