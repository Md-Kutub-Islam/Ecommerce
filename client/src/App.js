import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter, Outlet } from 'react-router-dom';
import ErrorPage from './components/Error/ErrorPage';
import Header from './components/Header/Header.js';
import Footer from './screens/Footer/Footer.js';
import Body from './components/Home/Body.js';
import Profile from './screens/User/Profile.js';
import RegistrationPage from './screens/auth/RegistratonPage.js';
import Login from './screens/auth/Login.js';
import Wishlist from './screens/BAG/Wishlist.js';
import Bag from './screens/BAG/Bag.js';
import SearchProduct from './screens/product/SearchProduct.js';
import ProductDetailsPage from './screens/product/ProductDetailsPage.js';
import About from './screens/Footer/About.js';
import Products from './screens/product/Products.js';
import SingleProduct from './screens/product/SingleProduct.js';
import ErrorPage from './components/Error/ErrorPage';
import Myorders from './screens/User/MyOrderPage.js';
import PlaceOrderPage from './screens/order/PlaceOrderPage.js';
import Notification from './components/Notification.js';
import ResetPassword from './screens/auth/ResetPassword.js';
import VerifyEmail from './screens/auth/VerifyEmail.js';
import { Provider } from 'react-redux';
import { persistor, store } from './app/store.js';
import { PersistGate } from 'redux-persist/integration/react';
import Category from './screens/category/Category.js';
import ProductPage from './screens/product/ProductPage.js';

const Applayout = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="app">
          <Header />
          <Outlet />
          <Footer />
        </div>
      </PersistGate>
      <PersistGate loading={null} persistor={persistor}>
        <div className="app">
          <Header />
          <Outlet />
          <Footer />
        </div>
      </PersistGate>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Notification />
        <Applayout />
      </>
    ),
    children: [
      {
        path: '/',
        element: <Body />,
      },
      {
        path: '/profile',
        element: <Profile />,
      },
      {
        path: '/register',
        element: <RegistrationPage />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/forgotpassword',
        element: <Login />,
      },
      {
        path: '/wishlist',
        element: <Wishlist />,
      },
      {
        path: '/bag',
        element: <Bag />,
      },
      {
        path: '/search/:query',
        element: <SearchProduct />,
      },
      {
        path: '/category/:id',
        element: <ProductDetailsPage />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/category',
        element: <Category />,
      },
      {
        path: '/products',
        element: <ProductPage />,
      },
      {
        path: '/singleProduct/:categoryId',
        element: <SingleProduct />,
      },
      {
        path: '/myorders',
        element: <Myorders />,
      },
      {
        path: '/placeOrder',
        element: <PlaceOrderPage />,
      },
      {
        path: '/emailVerify',
        element: <VerifyEmail />,
      },
      {
        path: '/resetPassword',
        element: <ResetPassword />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);
