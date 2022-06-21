import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import './sims.css'
import { CustomContext } from "../../Context";
const Sims = ({ title, price, color, sizes, imageUrl, id, salePrice, category, sale }) => {
    const { fromToFav, isFav } = useContext(CustomContext)
    const [heard, setHeard] = React.useState()
    useEffect(() => {
        setHeard(isFav(id))
    }, [])


    let p = "p"
    return (<>

        <div className="card_sims" >

            <div className="card_header" onClick={() => {
                fromToFav({
                    id: id,
                    title: title,
                    imageUrl: imageUrl,
                    sizes: sizes,
                    color: color,
                    price: price,
                    category: category
                }); setHeard(isFav(id))
            }} style={heard ?
                { background: `url("http://kg.ronishop.ru/test/tilek/tilek_lichnye/santes/img/redheard.svg")` } : {

                    '&:hover': {
                        background: `url("http://kg.ronishop.ru/test/tilek/tilek_lichnye/santes/img/heard.svg")`,
                    },
                }
            } ></div>
            <img width={51} className="sale_card_img" src={salePrice ? "http://kg.ronishop.ru/test/tilek/tilek_lichnye/santes/img/sale.svg" : null} alt="" />
            <div>{salePrice ? <><span className="sale_icon">{sale}</span></> : null}</div>
            <div className="items_i">
                <Link to={`/${category}/${id}`}>
                    <img className="card_sims_img" src={imageUrl} alt="img" />
                </Link>
                <div className="card_sims_item">
                    <div className="card_item_price">{salePrice ? <>
                        <span>{price} p </span>
                        <span className="PriceSale" style={{ textDecoration: 'line-through' }}> {salePrice} c</span>
                    </>
                        : ` ${price} ${p}`} </div>
                    <div className="card_item_title">{title}</div>
                    <div className="card_item_size">Размер: {sizes}</div>
                    {color.map((item) => (
                        <div key={id} className="card_item_circle_color" style={{
                            backgroundColor: `${item}`
                        }} ></div>
                    ))}

                </div>


            </div>


        </div>

    </>);
}

export default Sims;