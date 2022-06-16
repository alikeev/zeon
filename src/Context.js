import axios from "axios";
import React, { createContext, useState, useEffect } from "react";

export const CustomContext = createContext();


export const Context = (prors) => {
    const [media, setMedia] = useState([]);
    const [collec, setCollec] = useState([]);
    useEffect(() => {
        axios(`http://localhost:3000/bestseller`)
            .then(({ data }) => setMedia(data)
            )
        axios(`http://localhost:3000/collection/`)
            .then(({ data }) => setCollec(data)
            )
    }, [])


    const [isFav, setIsFav] = useState([])
    const addFav = (product) => {
        let idx = isFav.findIndex((item) => item.id == product.id && item.color == product.color)
        setIsFav([...isFav, product])
    }


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




    const value = {
        media,
        isFav,
        setIsFav,
        setMedia,
        cart,
        addFav,
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