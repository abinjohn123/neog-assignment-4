import { Routes, Route } from 'react-router-dom';
import Mockman from 'mockman-js';

import Footer from './components/shared/Footer.jsx';
import Header from './components/shared/Header.jsx';
import Home from './components/Home/Home.jsx';
import ProductList from './components/Products/ProductList.jsx';
import SingleProduct from './components/Products/SingleProduct.jsx';
import Cart from './components/Products/Cart.jsx';
import Authenticate from './components/Auth/Authenticate.jsx';
import RequiresAuth from './components/Auth/RequiresAuth.jsx';

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <div className="layout">
          <Routes>
            <Route path="/mockman" element={<Mockman />} />
            <Route path="/" element={<Home />} />
            <Route
              path="/products"
              element={
                <RequiresAuth>
                  <ProductList />
                </RequiresAuth>
              }
            />
            <Route path="/products/:productId" element={<SingleProduct />} />
            <Route path="/login" element={<Authenticate />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
