import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AdminContextProvider from './contexts/AdminContext';
import ClientContextProvider from './contexts/ClientContext';
import AdminPage from './pages/AdminPage';
import CartPage from './pages/CartPage';
import EditPage from './pages/EditPage';
import MainPage from './pages/MainPage';
import SignInPage from './pages/SigninPage';
import SignUpPage from './pages/SignUpPage';
import OrderPage from './pages/OrderPage';
import InfoPage from './pages/InfoPage';
import Carusel from './components/Carusel';

const Routes = () => {
    return (
        <ClientContextProvider>
            <AdminContextProvider>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/admin" component={AdminPage} />
                        <Route exact path="/edit/:id" component={EditPage} />
                        <Route exact path="/" component={MainPage} />
                        <Route exact path="/cart" component={CartPage} />
                        <Route exact path="/sign-in" component={SignInPage} />
                        <Route exact path="/sign-up" component={SignUpPage} />
                        <Route exact path="/order" component={OrderPage} />
                        <Route exact path="/info/:id" component={InfoPage} />
                        <Route exact path="/carousel" component={Carusel} />



                    </Switch>
                </BrowserRouter>
            </AdminContextProvider>
        </ClientContextProvider>
    );
};

export default Routes;