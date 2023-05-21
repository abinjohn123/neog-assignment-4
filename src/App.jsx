import { Routes, Route } from 'react-router-dom';
import Mockman from 'mockman-js';

import Home from './components/Home/Home.jsx';
import Footer from './components/shared/Footer.jsx';
import Header from './components/shared/Header.jsx';

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <div className="layout">
          <Routes>
            <Route path="/mockman" element={<Mockman />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
