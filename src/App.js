import './App.css';
import Navbar from './Components/Assets folder/Navbar/Navbar.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './Pages/Shop.jsx'
import ShopCategory from './Pages/ShopCategory.jsx'
import Product from './Pages/Product.jsx'
import LoginSignup from './Pages/LoginSignup.jsx'
import Cart from './Pages/Cart.jsx';
import Footer from './Components/footer/Footer.jsx';
function App() {
  return (
    <div>


      <BrowserRouter>
        <Navbar />
        <Routes>

          <Route path='/' element={<Shop />} />
          <Route path='/SHOP' element={<ShopCategory />} />
          <Route path='/MEN' element={<ShopCategory category="MEN" />} />
          <Route path='/WOMEN' element={<ShopCategory category="WOMEN" />} />
          <Route path='KIDS/' element={<ShopCategory category="KIDS" />} />
          <Route path='/product' element={<Product />}>
            <Route path=':product' element={<Product />} />

          </Route>
          <Route path='=/Cart' element={<Cart/>}/>
          <Route path='/login' element={<LoginSignup />} />

        </Routes>
      </BrowserRouter>

    <Footer/>
    </div>
  );
}

export default App;
