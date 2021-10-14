import { Container } from '@material-ui/core';
import React from 'react';
import CartTable from '../components/CartTable';
import Navbar from '../components/Navbar'

const CartPage = () => {
    return (
        <>
        
            <Navbar />
            
            <Container>
                <div className="cart">
                    <h3 className="cart-title">Ваша корзина</h3>
                    <CartTable />
                </div>
            </Container>
            
        </>
    );
};

export default CartPage;