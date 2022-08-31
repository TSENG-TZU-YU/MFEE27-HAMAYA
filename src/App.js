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

// class 次頁面
import ClassList from './pages/Class/ClassList';
import AdultCourse from './pages/Class/ClassList/AdultCourse';
import ChildrenCourse from './pages/Class/ClassList/ChildrenCourse';

//member次頁面
import MyProfile from './pages/Member/components/MyProfile';
import MyClass from './pages/Member/components/MyClass';
import MyBucketList from './pages/Member/components/MyBucketList';
import MyCart from './pages/Member/components/MyCart';
import MyOrder from './pages/Member/components/MyOrder';
import MyCoupon from './pages/Member/components/MyCoupon';
import MyQuestion from './pages/Member/components/MyQuestion';

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
              <Route path="classlist" element={<ClassList />} />
              <Route path="adultCourse" element={<AdultCourse />} />
              <Route path="childrenCourse" element={<ChildrenCourse />} />
            </Route>

            <Route path="place" element={<MainOutlet />}>
              <Route index element={<Place />} />
            </Route>

            <Route path="aboutus" element={<MainOutlet />}>
              <Route index element={<AboutUs />} />
            </Route>

            <Route path="member" element={<Member />}>
              <Route index element={<MyProfile />} />
              <Route path="myclass" element={<MyClass />} />
              <Route path="mybucketlist" element={<MyBucketList />} />
              <Route path="mycart" element={<MyCart />} />
              <Route path="myorder" element={<MyOrder />} />
              <Route path="mycoupon" element={<MyCoupon />} />
              <Route path="myquestion" element={<MyQuestion />} />
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
