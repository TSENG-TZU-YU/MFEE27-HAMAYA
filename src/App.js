// import Detailed from './constants/Detailed';

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.scss';

// 版面頁面元件
import MainOutlet from './layouts/MainOutlet'

// 其它子頁面
import Home from './pages/Home';
import Products from './pages/Products';
import NEWs from './pages/NEWs';
import Class from './pages/Class';
import Educate from './pages/Educate';
import Place from './pages/Place';
import AboutUs from './pages/AboutUs';
import Members from './pages/Members';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainOutlet />}>
            {/* index代表此路由中的預設子頁 */}
            <Route index element={<Home />} />
            {/* 其它子頁面 */}
            {/* 注意Product頁面在 /product/index.js 裡，只是一個作layout用頁面*/}

            {/* index代表此路由中的預設子頁 */}
              {/* <Route index element={<List />} /> */}
              {/* 代表此路由中的有id子頁，例`product/123` */}
              {/* <Route path=":productId" element={<Detail />} /> */}
            <Route path="product" element={<MainOutlet />}>
              <Route index element={<Products />} />
            </Route>

            <Route path="NEWs" element={<MainOutlet />}>
              <Route index element={<NEWs />} />
            </Route>

            <Route path="Class" element={<MainOutlet />}>
              <Route index element={<Class />} />
            </Route>

            <Route path="Educate" element={<MainOutlet />}>
              <Route index element={<Educate />} />
            </Route>

            <Route path="Place" element={<MainOutlet />}>
              <Route index element={<Place />} />
            </Route>

            <Route path="AboutUs" element={<MainOutlet />}>
              <Route index element={<AboutUs />} />
            </Route>

            <Route path="Members" element={<MainOutlet />}>
              <Route index element={<Members />} />
            </Route>
            
            {/* 404未找到的頁面路由，需放在最下方 */}
            <Route path="*" element={<h1>404 NOT FOUND</h1>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
