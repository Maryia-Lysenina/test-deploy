import React from 'react';

import {Routes, Route} from "react-router-dom";
import {MAIN, CATALOG, PRODUCT, BASKET, CHECKOUT, ARTICLES, NOT_FOUND} from './Constants';
import Main from '../Pages/Main/Main';
import Catalog from '../Pages/Catalog/Catalog';
import Product from '../Pages/Product/Product';
import Articles from '../Pages/Articles/Articles';
import Basket from '../Pages/Basket/Basket';
import Checkout from '../Pages/Checkout/Checkout';
import NotFound from '../Pages/NotFound/NotFound';
function AppRoutes() {
    return ( 
        <Routes>
            <Route path={MAIN} element={<Main />}/>
            <Route path={CATALOG} element={<Catalog />}/>
            <Route path={PRODUCT} element={<Product />}/>
            <Route path={BASKET} element={<Basket />}/>
            <Route path={CHECKOUT} element={<Checkout />}/>
            <Route path={ARTICLES} element={<Articles />}/>
            <Route path={NOT_FOUND} element={<NotFound />}/>
        </Routes>
     );
}

export default AppRoutes;