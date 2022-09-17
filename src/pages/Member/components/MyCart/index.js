import { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom'; //抓取Outlet的props
import MyCartTable from './components/MyCartTable';
import './MyCart.scss';
import MyCartDoCheckout from './components/MyCartDoCheckout';
import axios from 'axios';
import { API_URL } from '../../../../utils/config';
import { useAuth } from '../../../../utils/use_auth';
function MyCart(props) {
    const [setbread] = useOutletContext(); //此CODE為抓取麵包削setbread
    const { member, setMember, isLogin, setIsLogin } = useAuth();
    //需進行map的狀態要宣告陣列才不會報錯

    //全部購物車
    const [myCart, setMyCart] = useState([]);
    //product
    const [myCartA, setMyCartA] = useState([]);
    //class
    const [myCartB, setMyCartB] = useState([]);
    //有資料true,沒資料false
    const [hiddenState, setHiddenState] = useState(false);
    //金額
    const [myCartPrice, setMyCartPrice] = useState(0);

    useEffect(() => {
        setbread('購物車'); //載入頁面時 設定麵包削

        async function getMyCart() {
            try {
                let response = await axios.get(
                    `${API_URL}/member/mycart/${member.id}`
                );

                let items_amount = response.data.myCart.length;
                if (items_amount !== 0) {
                    setHiddenState(true);
                    setMyCart(response.data.myCart);
                    console.log(response.data.myCart);
                    //分類別
                    let myCartList = response.data.myCart;
                    const myCart_cateA = myCartList.filter((v) => {
                        return v.category_id === 'A';
                    });
                    setMyCartA(myCart_cateA);
                    const myCart_cateB = myCartList.filter((v) => {
                        return v.category_id === 'B';
                    });
                    setMyCartB(myCart_cateB);

                    //TODO:金額無法即時更新
                    let myCartListPrice = [];
                    myCartListPrice = myCartList
                        .map((v) => {
                            return v.price;
                        })
                        .reduce((prev, curr) => prev + curr);
                    setMyCartPrice(myCartListPrice);
                    console.log('myCartListPrice', myCartListPrice);
                }
            } catch (err) {
                console.log('錯誤', err);
            }
        }
        getMyCart();
    }, []);

    return (
        <div className="col-12 col-md-8 col-lg-9">
            {/*此className為RWD設定請勿更動*/}
            <h4 className="main-color">
                <b> 購物車</b>
            </h4>
            {hiddenState ? (
                <>
                    <MyCartTable
                        myCart={myCart}
                        setMyCart={setMyCart}
                        myCartPrice={myCartPrice}
                        setMyCartPrice={setMyCartPrice}
                        myCartB={myCartB}
                        setMyCartB={setMyCartB}
                        myCartA={myCartA}
                        setMyCartA={setMyCartA}
                    />
                    <div className="pb-5 row justify-content-around">
                        <MyCartDoCheckout
                            myCart={myCart}
                            setMyCart={setMyCart}
                            myCartPrice={myCartPrice}
                            setMyCartPrice={setMyCartPrice}
                        />
                    </div>
                </>
            ) : (
                <h5 className="text-center py-2">目前沒有資料</h5>
            )}
        </div>
    );
}
export default MyCart;
