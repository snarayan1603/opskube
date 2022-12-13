import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";

// import Footer from './templates/Footer';
// import NavBar from './templates/homepage/navBar/NavBar';
// import Loading from './templates/loaders/Loading';

const HomeScreen = lazy(() => import('./screens/HomeScreen'));
// const NewProduct = lazy(() => import("./screens/AddProductScreen/NewProduct"))
const HeaderBottom = lazy(() => import('./templates/HeaderBottom'));
const HeaderTopSlider = lazy(() => import('./templates/HeaderTopSlider'));
// const SelectCountry = lazy(() => import('./templates/headers/SelectCountry'));

// const AllCollection = lazy(() => import('./screens/collections/AllCollection'));
// const ParticularCollection = lazy(() => import('./screens/collections/ParticularCollection'));

// const SearchScreen = lazy(() => import('./screens/search/SearchScreen'));
// const ProductScreen = lazy(() => import('./screens/search/ProductScreen'));
const CartScreen = lazy(() => import('./screens/CartScreen'));

// const OrderDetails = lazy(() => import("./screens/orders/OrderDetails"))
// const OrderHistory = lazy(() => import('./screens/orders/OrderHistory'))

const SignIn = lazy(() => import('./templates/SignIn'))
// const LoginWithOTP = lazy(()=>import('./screens/signInUp/LoginWithOTP'))
const SignUp = lazy(() => import('./templates/SignUp'))

const Account = lazy(() => import('./screens/Account'))


function App() {

  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <HeaderTopSlider />
        {/* {window.location.href === "http://localhost:3000/" && <SelectCountry />} */}
        <HeaderBottom />

        {/* <NavBar border={true} /> */}

        <main >
          <Routes>
            <Route path="/" element={<HomeScreen />} exact></Route>
            <Route path="/cart" element={<CartScreen showNavBar={true} />}></Route>
            {/* <Route path="/all-collections" element={<AllCollection />} ></Route>
            <Route path="/collection/:collectionName" element={<ParticularCollection />} ></Route>
            <Route path="/NewProduct" element={<NewProduct />}></Route>
            <Route path="/products" element={<SearchScreen />}></Route>
            <Route path="/product-details/:productcode" element={<ProductScreen />}></Route>
            

            <Route path="/order/:orderId" element={<OrderDetails />}></Route>
            <Route path="/orderhistory" element={<OrderHistory showNavBar={true} />}></Route> */}

            <Route path="/sign-in" element={<SignIn />}></Route>
            <Route path="/sign-up" element={<SignUp />}></Route>

            <Route path="/accounts/:id" element={<Account />}></Route>

          </Routes>
        </main>

        {/* <Footer /> */}
      </Suspense>
    </BrowserRouter>
  );
}

export default App;


// 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