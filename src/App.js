// import Detailed from './constants/Detailed';

import React, { useEffect } from 'react';

// import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// 登入元件
import { AuthProvider } from './utils/use_auth';
// import { ClassContext } from './pages/Class/UseContext';
// 購物車
import { CartProvider } from './utils/use_cart';
// 收藏
import { LikedProvider } from './utils/use_liked';
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
import NotFound from './pages/NotFound';
import EnableMember from './utils/EnableMember';
import ForgetPassword from './pages/ForgetPassword';

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
import MyOrderDetail from './pages/Member/components/MyOrder/components/MyOrderDetail';
import MyPlace from './pages/Member/components/MyPlace';

//MyOrder次頁面
import MyOrderAdd from './pages/Member/components/MyOrder/components/MyOrderAdd';
import MyOrderQA from './pages/Member/components/MyOrder/components/MyOrderQA';

//MyQuestion 次頁面
import MyQuestionList from './pages/Member/components/MyQuestion/components/MyQuestionList';
import MyQuestionAdd from './pages/Member/components/MyQuestion/components/MyQuestionAdd';
import MyQuestionDetail from './pages/Member/components/MyQuestion/components/MyQuestionDetail';

// MyPlace 次頁面
import MyPlaceList from './pages/Member/components/MyPlace/components/MyPlaceList';
import MyPlaceDetail from './pages/Member/components/MyPlace/components/MyPlaceDetail';

//後臺頁面
import Admin from './pages/Admin';

//後臺次頁面
import Articles from './pages/Admin/components/Articles';
import Coupon from './pages/Admin/components/Coupon';
import CustomerService from './pages/Admin/components/CustomerService';
import Members from './pages/Admin/components/Members';
import Order from './pages/Admin/components/Order';
import Product from './pages/Admin/components/Product';
import Teachers from './pages/Admin/components/Teachers';
import BeHome from './pages/Admin/components/BeHome';

//Order次頁
import OrderDetail from './pages/Admin/components/Order/OrderDetail';

//CustomerService次頁
import CommonQA from './pages/Admin/components/CustomerService/CommonQA';
import CommonQADetail from './pages/Admin/components/CustomerService/CommonQADetail';
import OrderQA from './pages/Admin/components/CustomerService/OrderQA';
import OrderQADetail from './pages/Admin/components/CustomerService/OrderQADetail';
import PlaceQA from './pages/Admin/components/CustomerService/PlaceQA';
import PlaceQADetail from './pages/Admin/components/CustomerService/PlaceQADetail';

//Coupon次頁
import CouponList from './pages/Admin/components/Coupon/CouponList';
import CouponAdd from './pages/Admin/components/Coupon/CouponAdd';
import CouponDetail from './pages/Admin/components/Coupon/CouponDetail';
import MyOrderConfirm from './pages/Member/components/MyOrder/components/MyOrderConfirm';

function App() {
    //page to top 要用的
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);
    return (
        <>
            <BrowserRouter>
                <AuthProvider>
                    <LikedProvider>
                        <CartProvider>
                            <Header />
                            <Routes>
                                <Route path="/" element={<MainOutlet />}>
                                    <Route index element={<Home />} />

                                    <Route
                                        path="products"
                                        element={<MainOutlet />}
                                    >
                                        <Route index element={<Products />} />
                                        <Route
                                            path=":productId"
                                            element={<ProductDetail />}
                                        />
                                    </Route>

                                    <Route path="news" element={<MainOutlet />}>
                                        <Route index element={<NEWs />} />
                                        <Route
                                            path="section"
                                            element={<MusicArticle />}
                                        />
                                        <Route
                                            path=":content"
                                            element={<Article />}
                                        />
                                    </Route>

                                    <Route
                                        path="class"
                                        element={<MainOutlet />}
                                    >
                                        <Route index element={<Class />} />
                                        <Route
                                            path="list"
                                            element={<SubOutlet />}
                                        >
                                            <Route
                                                index
                                                element={<ClassList />}
                                            />
                                            <Route
                                                path=":detailedID"
                                                element={<Detailed />}
                                            />
                                        </Route>
                                        <Route
                                            path="teacher/:detailedID"
                                            element={<Teacher />}
                                        />
                                    </Route>

                                    <Route
                                        path="place"
                                        element={<MainOutlet />}
                                    >
                                        <Route index element={<Place />} />
                                    </Route>

                                    <Route
                                        path="aboutus"
                                        element={<MainOutlet />}
                                    >
                                        <Route index element={<AboutUs />} />
                                    </Route>

                                    <Route path="member" element={<Member />}>
                                        <Route index element={<MyProfile />} />
                                        <Route
                                            path="myclass"
                                            element={<MyClass />}
                                        />
                                        <Route
                                            path="mybucketlist"
                                            element={<MyBucketList />}
                                        />
                                        <Route
                                            path="mycart"
                                            element={<MyCart />}
                                        />
                                        <Route
                                            path="myorder"
                                            element={<MyOrder />}
                                        />
                                        <Route
                                            path="/member/myorder/:orderId"
                                            element={<MyOrderDetail />}
                                        />
                                        <Route
                                            path="/member/myorder/linepay/confirm"
                                            element={<MyOrderConfirm />}
                                        />
                                        <Route
                                            path="myorder/addqa"
                                            element={<MyOrderAdd />}
                                        />
                                        <Route
                                            path="myorder/qadetail"
                                            element={<MyOrderQA />}
                                        />
                                        <Route
                                            path="mycoupon"
                                            element={<MyCoupon />}
                                        />
                                        <Route
                                            path="myquestion"
                                            element={<MyQuestion />}
                                        >
                                            <Route
                                                index
                                                element={<MyQuestionList />}
                                            />
                                            <Route
                                                path="add"
                                                element={<MyQuestionAdd />}
                                            />
                                            <Route
                                                path="detail"
                                                element={<MyQuestionDetail />}
                                            />
                                        </Route>
                                        <Route
                                            path="myplace"
                                            element={<MyPlace />}
                                        >
                                            <Route
                                                index
                                                element={<MyPlaceList />}
                                            />
                                            <Route
                                                path="detail"
                                                element={<MyPlaceDetail />}
                                            />
                                        </Route>
                                    </Route>
                                    <Route path="admin" element={<Admin />}>
                                        <Route index element={<BeHome />} />
                                        <Route
                                            path="articles"
                                            element={<Articles />}
                                        />
                                        <Route
                                            path="coupon"
                                            element={<Coupon />}
                                        >
                                            <Route
                                                index
                                                element={<CouponList />}
                                            />
                                            <Route
                                                path="add"
                                                element={<CouponAdd />}
                                            />
                                            <Route
                                                path="detail"
                                                element={<CouponDetail />}
                                            />
                                        </Route>
                                        <Route
                                            path="customerservice"
                                            element={<CustomerService />}
                                        >
                                            <Route
                                                index
                                                element={<CommonQA />}
                                            />
                                            <Route
                                                path="commonqa/detail"
                                                element={<CommonQADetail />}
                                            />
                                            <Route
                                                path="orderqa"
                                                element={<OrderQA />}
                                            />
                                            <Route
                                                path="orderqa/detail"
                                                element={<OrderQADetail />}
                                            />
                                            <Route
                                                path="placeqa"
                                                element={<PlaceQA />}
                                            />
                                            <Route
                                                path="placeqa/detail"
                                                element={<PlaceQADetail />}
                                            />
                                        </Route>
                                        <Route
                                            path="members"
                                            element={<Members />}
                                        />
                                        <Route
                                            path="order"
                                            element={<Order />}
                                        />
                                        <Route
                                            path="order/detail"
                                            element={<OrderDetail />}
                                        />
                                        <Route
                                            path="product"
                                            element={<Product />}
                                        />
                                        <Route
                                            path="teachers"
                                            element={<Teachers />}
                                        />
                                    </Route>
                                    <Route
                                        path="enable"
                                        element={<EnableMember />}
                                    />
                                    <Route
                                        path="forget"
                                        element={<ForgetPassword />}
                                    />
                                    {/* 404未找到的頁面路由，需放在最下方 */}
                                    <Route path="*" element={<NotFound />} />
                                </Route>
                            </Routes>
                            <Footer />
                        </CartProvider>
                    </LikedProvider>
                </AuthProvider>
            </BrowserRouter>
        </>
    );
}

export default App;
