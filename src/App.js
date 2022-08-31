// import Detailed from './constants/Detailed';

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// 版面頁面元件
import MainOutlet from './layouts/MainOutlet';
import Footer from './layouts/Footer';
import Header from './layouts/Header';

// 其它子頁面
import Home from './pages/Home';
import Products from './pages/Products';
import NEWs from './pages/NEWs';
import Class from './pages/Class';
import Place from './pages/Place';
import AboutUs from './pages/AboutUs';
import Member from './pages/Member';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<MainOutlet />}>
            <Route index element={<Home />} />

            <Route path="product" element={<MainOutlet />}>
              <Route index element={<Products />} />
            </Route>

            <Route path="news" element={<MainOutlet />}>
              <Route index element={<NEWs />} />
            </Route>

            <Route path="class" element={<MainOutlet />}>
              <Route index element={<Class />} />
            </Route>


            <Route path="place" element={<MainOutlet />}>
              <Route index element={<Place />} />
            </Route>

            <Route path="aboutus" element={<MainOutlet />}>
              <Route index element={<AboutUs />} />
            </Route>

            <Route path="member" element={<MainOutlet />}>
              <Route index element={<Member />} />
              <Route path="class" element={<Member />} />
              <Route path="bucketlist" element={<Member />} />
              <Route path="cart" element={<Member />} />
              <Route path="order" element={<Member />} />
              <Route path="coupon" element={<Member />} />
              <Route path="question" element={<Member />} />
            </Route>

            {/* 404未找到的頁面路由，需放在最下方 */}
            <Route path="*" element={<h1>404 NOT FOUND</h1>} />
          </Route>
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
