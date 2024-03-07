import './App.css';
import Navbar from './Components/Assets folder/Navbar/Navbar.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './Pages/Shop.jsx'
import ShopCategory from './Pages/ShopCategory.jsx'
import Product from './Pages/Product.jsx'
import LoginSignup from './Pages/LoginSignup.jsx'
import Cart from './Pages/Cart.jsx';
import Footer from './Components/footer/Footer.jsx';
import men_banner from './Components/Assets folder/Assets/banner_mens.png'
import women_banner from './Components/Assets folder/Assets/banner_women.png'
import kids_banner from './Components/Assets folder/Assets/banner_kids.png'


function App() {
  return (
    <div>


      <BrowserRouter>
        <Navbar />
        <Routes>

          <Route path='/' element={<Shop />} />
          <Route path='/SHOP' element={<ShopCategory />} />
          <Route path='/MEN' element={<ShopCategory banner={men_banner} category="men" />} />
          <Route path='/WOMEN' element={<ShopCategory banner={women_banner} category="women" />} />
          <Route path='KIDS/' element={<ShopCategory banner={kids_banner}  category="kid" />} />
          <Route path='/product' element={<Product />}>
            <Route path=':product' element={<Product />} />

          </Route>
          <Route path='/Cart' element={<Cart/>}/>
          <Route path='/login' element={<LoginSignup/>} />
        </Routes>
      </BrowserRouter>

    <Footer/>
    </div>
  );
}

export default App;
