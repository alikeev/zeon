import React from "react";
import "./advantages.css"
import advan1 from '../../../img/advan1.svg'
import advan2 from '../../../img/advan2.svg'
import advan3 from '../../../img/advan3.svg'
import advan4 from '../../../img/advan4.svg'
const Advantages = () => {
    return (<>
        <div className="advantages">
            <div className="container">
                <div className="advantages__inner">
                    <div className="advantages__item">
                        <img className="advantages__img" src={advan1} alt="" />
                        <div className="advantages__title">Удобные способы оплаты</div>
                        <div className="advantages__text">Мы предлагаем возможность безналичной оплаты</div>
                    </div>
                    <div className="advantages__item">
                        <img className="advantages__img" src={advan2} alt="" />
                        <div className="advantages__title">Cвоевремнная доставка</div>
                        <div className="advantages__text">100% гарантия возврата товара - 14 дней на возврат, без скандалов и истерик.</div>
                    </div>
                    <div className="advantages__item">
                        <img className="advantages__img" src={advan3} alt="" />
                        <div className="advantages__title">Профессиональная консультация</div>
                        <div className="advantages__text">Мы проконсультируем
                            и индивидуально подойдем
                            к Вашему заказу </div>
                    </div>
                    <div className="advantages__item">
                        <img className="advantages__img" src={advan4} alt="" />
                        <div className="advantages__title">Акции и бонусы для покупателей</div>
                        <div className="advantages__text">Промокоды со скидками для постоянных клиентов, акции
                            на новые позиции</div>
                    </div>
                </div>
            </div>
        </div>
    </>);
}

export default Advantages;