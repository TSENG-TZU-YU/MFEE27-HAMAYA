import { useState, useEffect } from 'react';
import { useOutletContext, Link } from 'react-router-dom'; //抓取Outlet的props
import MyCartTable from './components/MyCartTable';
import './MyCart.scss';
import MyCartDoCheckout from './components/MyCartDoCheckout';
import axios from 'axios';
import { API_URL } from '../../../../utils/config';
import { useAuth } from '../../../../utils/use_auth';
function MyCart() {
    const [setbread] = useOutletContext(); //此CODE為抓取麵包削setbread
    const { member, setMember, isLogin, setIsLogin } = useAuth();

    // 收藏 product
    const [favA, setFavA] = useState([]);
    // 收藏 class
    const [favB, setFavB] = useState([]);

    // 會員收藏的資料
    useEffect(() => {
        let getAllFavProducts = async () => {
            let response = await axios.get(
                `${API_URL}/member/mybucketlist/${member.id}`,
                { withCredentials: true }
            );
            let productsA = response.data.product.map(
                (item) => item.product_id
            );
            let productsB = response.data.class.map((item) => item.product_id);
            setFavA(productsA);
            setFavB(productsB);
        };
        if (member.id) {
            getAllFavProducts();
        }
    }, [member]);


    //全部購物車
    const [myCart, setMyCart] = useState([]);
    //product
    const [myCartA, setMyCartA] = useState([]);
    //class
    const [myCartB, setMyCartB] = useState([]);
    //有資料true,沒資料false
    const [hiddenState, setHiddenState] = useState(false);

    useEffect(() => {
        setbread('購物車'); //載入頁面時 設定麵包削
    }, []);

    useEffect(() => {
        async function getMyCart() {
            try {
                let response = await axios.get(
                    `${API_URL}/member/mycart/${member.id}`
                );

                let items_amount = response.data.myCart.length;
                if (items_amount !== 0) {
                    setHiddenState(true);
                    setMyCart(response.data.myCart);
                    // console.log('All MyCart', response.data.myCart);
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
                }
            } catch (err) {
                console.log('載入購物車錯誤', err);
            }
        }
        getMyCart();
    }, []);

    //總金額
    const calcTotalPrice = () => {
        let total = 0;
        for (let i = 0; i < myCart.length; i++) {
            total += Number(myCart[i].amount) * Number(myCart[i].price);
        }
        return total;
    };

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
                        myCartB={myCartB}
                        setMyCartB={setMyCartB}
                        myCartA={myCartA}
                        setMyCartA={setMyCartA}
                        favA={favA}
                        setFavA={setFavA}
                        favB={favB}
                        setFavB={setFavB}
                        setHiddenState={setHiddenState}
                    />
                    <div className="pb-5 row justify-content-around">
                        <MyCartDoCheckout
                            myCart={myCart}
                            setMyCart={setMyCart}
                            setMyCartA={setMyCartA}
                            setMyCartB={setMyCartB}
                            setHiddenState={setHiddenState}
                            calcTotalPrice={calcTotalPrice()}
                        />
                    </div>
                </>
            ) : (
                <>
                    <h5 className="text-center py-2">目前沒有購物清單</h5>
                    <h6 className="text-center py-2">
                        <Link to="/products">回到音樂商城</Link>
                    </h6>
                </>
            )}
        </div>
    );
}
export default MyCart;
