import { Routes, Route } from 'react-router-dom';
import Mockman from 'mockman-js';

import Footer from './components/shared/Footer.jsx';
import Header from './components/shared/Header.jsx';
import Home from './components/Home/Home.jsx';
import ProductList from './components/Products/ProductList.jsx';

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <div className="layout">
          <Routes>
            <Route path="/mockman" element={<Mockman />} />
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<ProductList />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
