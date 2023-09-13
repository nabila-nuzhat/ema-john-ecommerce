import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Shop from './components/Shop/Shop.jsx';
import Home from './components/Layout/Home.jsx';
import Order from './components/Order/Order.jsx';
import Inventory from './components/Inventory/Inventory.jsx';
import Login from './components/Login/Login.jsx';
import cartProductsLoader from './loaders/cartProductsLoader.js';
import Checkout from './components/Checkout/Checkout.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    children: [
      {
        path: '/',
        element: <Shop></Shop>
      },

      {
        path: 'order',
        element: <Order></Order>,
        /** Previous simple loader
         * loader: () => fetch('products.json')
         * 
         */

        loader: cartProductsLoader //using custom loader js function
      },

      {
        path: 'inventory',
        element: <Inventory></Inventory>
      },

      {
        path: 'login',
        element: <Login></Login>
      },
// checkout page
      {
        path: 'checkout',
        element: <Checkout></Checkout>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* basic router */}
    <RouterProvider router={router} />

  </React.StrictMode>,
)
