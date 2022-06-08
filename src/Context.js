import React, { createContext, useState, useEffect } from "react";
export const CustomContext = createContext();


export const Context = (prors) => {
    const [media, setMedia] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3000/media`)
            .then((res) => {
                return res.json();
            })
            .then((arr) => {
                setMedia(arr);
            })
    }, [])

    const [cart, setCart] = useState([])
    const [fav, setFav] = useState([])


    const addFav = (favorit) => {
        setFav([...fav])
    }

    const addCart = (product) => {

        let idx = cart.findIndex((item) => item.id == product.id && item.color == product.color)

        setCart([...cart, product])
    }

    const deleteCart = (id, color, sizes) => {
        setCart(cart.filter((item) => {
            return !(item.id === id && item.color === color)
        }))
    }


    const value = {
        media,
        setMedia,
        cart,
        setCart,
        addCart,
        deleteCart
    }
    return <CustomContext.Provider value={value}>
        {prors.children}
    </CustomContext.Provider>
};