import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import Navbar from "./Component/header/Navbar";
import Footer from "./Component/footer/Footer";


import { ProductProvider } from "./Context/ProductContext";
import CartProvider from "./Context/CartContext";
import { UserProvider } from "./Context/RegistrationForm/UserProvider";
import ScrollToTopButton from "./Component/ScrollToTopButton";
import ShowProductSearch from "./Page/ShowProductSearch";

// Navbar
import Home from "./Component/main/Home";
import SignUp from "./Component/RegistrationForm/SignupForm";
import About from "./Component/header/About";
import Cart from "./Component/header/Cart";

// page
import WinterProducts from "./Page/WinterProducts";
import SummerProducts from "./Page/SummerProducts";
import SuitProducts from "./Page/SuitProducts";
import EveningDress from "./Page/EveningDress";
import BrideDress from "./Page/BrideDress";
import SportsProducts from "./Page/SportsProducts";
import DetailsPage from "./Page/DetailsPage";
import PageNotFound from "./Component/header/PageNotFound";


// scrollTop
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null
}


function App() {

  return (
    <CartProvider>
      <ProductProvider>
        <UserProvider>
          < ScrollToTop/>
          < ScrollToTopButton/>
          <Navbar/>

      
          <Routes>
            {/* navbar */}
            <Route path="/" element={<Home/>}/>
            <Route path="/signup" element={<SignUp/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/*" element={<PageNotFound/>} />


            {/* Search */}
            <Route path="/search" element={<ShowProductSearch/>} />


            {/* page */}
              {/* DetailsPage */}
            <Route path="/DetailsPage/:id" element={<DetailsPage/>}/>

              {/* WinterProducts */}
            <Route path="/WinterProducts" element={<WinterProducts/>} />
          
              {/* SummerProducts */}
            <Route path="/SummerProducts" element={<SummerProducts/>} />

              {/* SuitProducts */}
            <Route path="/SuitProducts" element={<SuitProducts/>} />

              {/* EveningDress */}
            <Route path="/EveningDress" element={<EveningDress/>} />

              {/* {BrideDress} */}
            <Route path="/BrideDress" element={<BrideDress/>} />

              {/* SportsDress */}
            <Route path="/SportsProducts" element={<SportsProducts/>} />

          </Routes>

          <Footer/>
        </UserProvider>
      </ProductProvider>
    </CartProvider>
  )
}

export default App;
