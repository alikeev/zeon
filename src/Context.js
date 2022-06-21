import axios from "axios";
import React, { createContext, useState, useEffect } from "react";
export const CustomContext = createContext();
export const Context = (prors) => {
    const [sale, setSale] = useState([]);
    const [media, setMedia] = useState([]);
    const [collec, setCollec] = useState([]);
    useEffect(() => {
        axios(`http://localhost:3000/bestseller`)
            .then(({ data }) => setMedia(data)
            )
        axios(`http://localhost:3000/collection/`)
            .then(({ data }) => setCollec(data)
            )
        axios(`http://localhost:3000/sales/`)
            .then(({ data }) => setSale(data)
            )
    }, [])

    //Избранное //
    const fromToFav = (data) => {
        let arr = JSON.parse(localStorage.getItem('fav')) || []
        let ids = arr.map(e => e.id)
        const bool = ids.includes(data.id)
        if (bool) {
            arr = arr.filter(e => e.id != data.id)
        } else {
            arr.push(data)
        }
        localStorage.setItem('fav', JSON.stringify(arr))
    }
    const isFav = (id) => {
        const arr = JSON.parse(localStorage.getItem('fav')) || []
        const bool = arr.map(e => e.id).includes(id)
        return bool
    }
    const getFav = () => {
        return JSON.parse(localStorage.getItem('fav'))
    }
    //Избранноe //
    //Корзина 
    const [cart, setCart] = useState([])

    const addCart = (product) => {

        let idx = cart.findIndex((item) => item.id == product.id && item.color == product.color)
        if (idx >= 0) {
            setCart(cart.map((item) => {
                if (item.id == product.id && item.color == product.color) {
                    return { ...item }
                } else {
                    return item
                }
            }))
        } else {
            setCart([...cart, product])

        }


    }

    const deleteCart = (id, color) => {
        setCart(cart.filter((item) => {
            return !(item.id === id && item.color === color)
        }))
    }
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart))
        if (localStorage.getItem('cart') !== null) {
            setCart(JSON.parse(localStorage.getItem('cart')))
        }
    }, [])

    //Корзина 

    const value = {
        media,
        isFav,
        setMedia,
        fromToFav,
        cart,
        sale,
        getFav,
        setCart,
        addCart,
        deleteCart,
        collec,
        setCollec

    }
    return <CustomContext.Provider value={value}>
        {prors.children}
    </CustomContext.Provider>
};