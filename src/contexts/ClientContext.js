import axios from 'axios';
import React, { useEffect, useReducer, useState } from 'react';
import { calcSubPrice, calcTotalPrice } from '../helpers/calc';
import { API } from '../helpers/const';

export const clientContext = React.createContext()

const INIT_STATE = {
    products: null,
    productCountCart: JSON.parse(localStorage.getItem("cart")) ? JSON.parse(localStorage.getItem("cart")).products.length : 0,
    cart: null,
    brands: []
}

const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case "GET_PRODUCTS":
            return { ...state, products: action.payload }
        case "ADD_AND_DELETE_PRODUCT_IN_CART":
            return { ...state, productsCountInCart: action.payload }
        case "GET_CART":
            return { ...state, cart: action.payload }
        case "GET_BRANDS":
            return { ...state, brands: action.payload }
        default:
            return { ...state }
    }
}

const ClientContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE)

    const getProducts = async () => {
        const { data } = await axios(`${API}${window.location.search}`)
        dispatch({
            type: "GET_PRODUCTS",
            payload: data
        })
    }


    // const saveEditedProduct = async (editedProduct) => {
    //     await axios.patch(`${API}/${editedProduct.id}`, editedProduct)
    //     getProducts()
    // }

    const addAndDeleteProductInCart = (product) => {
        let cart = JSON.parse(localStorage.getItem("cart"))
        if (!cart) {
            cart = {
                products: [],
                totalPrice: 0,
            }
        }
        let newProduct = {
            product: product,
            count: 1,
            subPrice: 0
        }
        newProduct.subPrice = calcSubPrice(newProduct)
        let newCart = cart.products.filter(item => item.product.id === product.id)
        if (newCart.length) {
            cart.products = cart.products.filter(item => item.product.id !== product.id)
        }
        else {
            cart.products.push(newProduct)
        }
        cart.totalPrice = calcTotalPrice(cart.products)
        localStorage.setItem("cart", JSON.stringify(cart))
        dispatch({
            type: "ADD_AND_DELETE_PRODUCT_IN_CART",
            payload: cart.products.length
        })
    }

    /*********************************************************** */
    const checkProductInCart = (id) => {
        let cart = JSON.parse(localStorage.getItem("cart"));
        if (!cart) {
            return false
        }
        let newCart = cart.products.filter(item => item.product.id === id)
        return !newCart.length ? true : false;
    }

    /******************************************************* */

    const getCart = () => {
        let cart = JSON.parse(localStorage.getItem("cart"));
        dispatch({
            type: "GET_CART",
            payload: cart
        })
    }

    /**************************************************** */

    const changeCountProducts = (count, id) => {
        let cart = JSON.parse(localStorage.getItem("cart"))
        if (!cart) {
            return
        }
        cart.products = cart.products.map(item => {
            if (item.product.id === id) {
                item.count = count
                item.subPrice = calcSubPrice(item)
            }
            return item
        })
        cart.totalPrice = calcTotalPrice(cart.products)
        localStorage.setItem("cart", JSON.stringify(cart))
        getCart()
    }

    /********************************************* */

    const getBrands = async () => {
        const { data } = await axios(API)
        // console.log(data);
        const arr = []
        data.forEach(item => {
            arr.push(item.brand)
        })
        

        let newArr = []
        arr.forEach(elem => {
            let chech = newArr.filter(item => item.trim() === elem.trim())
            if (chech.length === 0) {
                newArr.push(elem)
            }
        })
        
        dispatch({
            type: "GET_BRANDS",
            payload: newArr
        })
    }


    const [posts, setPosts] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage] = useState(6)

    useEffect(() => {
        const fetchProducts = () => {
            const data = state.products || []
            setPosts(data)
        }
        fetchProducts()
    }, [state.products])

    const indexOfLastPost = currentPage * postsPerPage
    const indexofFirstPost = indexOfLastPost - postsPerPage
    const currentPosts = posts.slice(indexofFirstPost, indexOfLastPost)
    const totalPosts = posts.length
    


    const changePage = (newPage) => {
        setCurrentPage(newPage)
    }

   

    const createNewUser = async (newUser, history) => {
        try {
            const data = await axios.post('https://intense-retreat-64750.herokuapp.com/auth/registration', newUser)
            
            history.push('/')
        }
        catch (e) {
           
            alert(e.response.data.message)
        }
    }

 
    const login = async (user, history) => {
        try {
            const data = await axios.post('https://intense-retreat-64750.herokuapp.com/auth/login', user)
            history.push('/')
        }
        catch (e) {
            alert(e.response.data.message)
        }
    }

    

    return (
        <clientContext.Provider value={{
            products: state.products,
            productsCountInCart: state.productsCountInCart,
            cart: state.cart,
            brands: state.brands,
            currentPosts,
            postsPerPage,
            totalPosts,
            getProducts,
            addAndDeleteProductInCart,
            checkProductInCart,
            getCart,
            changeCountProducts,
            getBrands,
            changePage,
            createNewUser,
            login
        }}>
            {children}
           
        </clientContext.Provider>
    );
};

export default ClientContextProvider;