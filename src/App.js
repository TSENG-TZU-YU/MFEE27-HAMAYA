// import Detailed from './constants/Detailed';

import React, { useEffect } from 'react';

// import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// 登入元件
import { AuthProvider } from './utils/use_auth';
// import { ClassContext } from './pages/Class/UseContext';

// 版面頁面元件
import MainOutlet from './layouts/MainOutlet';
import SubOutlet from './layouts/SubOutlet';

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

//News 次頁面
import MusicArticle from './pages/NEWs/MusicArticle';
import Article from './pages/NEWs/Article';

// product 次頁面
import ProductDetail from './pages/Products/ProductDetail';

// class 次頁面
import ClassList from './pages/Class/ClassList';
import Detailed from './pages/Class/Detailed';
import Teacher from './pages/Class/Teacher';

//member次頁面
import MyProfile from './pages/Member/components/MyProfile';
import MyClass from './pages/Member/components/MyClass';
import MyBucketList from './pages/Member/components/MyBucketList';
import MyCart from './pages/Member/components/MyCart';
import MyOrder from './pages/Member/components/MyOrder';
import MyCoupon from './pages/Member/components/MyCoupon';
import MyQuestion from './pages/Member/components/MyQuestion';

function App() {
    //page to top 要用的
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);
    return (
        <>
            {/* <ClassContext.Provider value={{ selectCourse, setSelectCourse }}> */}
            <BrowserRouter>
                <AuthProvider>
                    <Header />
                    <Routes>
                        <Route path="/" element={<MainOutlet />}>
                            <Route index element={<Home />} />

                            <Route path="products" element={<MainOutlet />}>
                                <Route index element={<Products />} />
                                <Route
                                    path="detail"
                                    element={<ProductDetail />}
                                />
                            </Route>

                            <Route path="news" element={<MainOutlet />}>
                                <Route index element={<NEWs />} />
                                <Route
                                    path="section"
                                    element={<MusicArticle />}
                                />
                                <Route path="category" element={<Article />} />
                            </Route>

                            <Route path="class" element={<MainOutlet />}>
                                <Route index element={<Class />} />
                                <Route path="list" element={<SubOutlet />}>
                                    <Route index element={<ClassList />} />
                                    <Route
                                        path=":detailedID"
                                        element={<Detailed />}
                                    />
                                </Route>
                                <Route path="teacher" element={<Teacher />} />
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
                                <Route
                                    path="mybucketlist"
                                    element={<MyBucketList />}
                                />
                                <Route path="mycart" element={<MyCart />} />
                                <Route path="myorder" element={<MyOrder />} />
                                <Route path="mycoupon" element={<MyCoupon />} />
                                <Route
                                    path="myquestion"
                                    element={<MyQuestion />}
                                />
                            </Route>

                            {/* 404未找到的頁面路由，需放在最下方 */}
                            <Route path="*" element={<h1>404 NOT FOUND</h1>} />
                        </Route>
                    </Routes>
                    <Footer />
                </AuthProvider>
            </BrowserRouter>
            {/* </ClassContext.Provider> */}
        </>
    );
}

export default App;
