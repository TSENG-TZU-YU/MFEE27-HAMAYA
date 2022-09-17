import { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom'; //抓取Outlet的props
import MyCartTable from './components/MyCartTable';
import './MyCart.scss';
import MyCartDoCheckout from './components/MyCartDoCheckout';
function MyCart(props) {
    const [setbread] = useOutletContext(); //此CODE為抓取麵包削setbread
    const [myCart, setMyCart] = useState();
    const [myCartPrice, setMyCartPrice] = useState(0);

    useEffect(() => {
        setbread('購物車'); //載入頁面時 設定麵包削
    }, []);
    return (
        <div className="col-12 col-md-8 col-lg-9">
            {/*此className為RWD設定請勿更動*/}
            <h4 className="main-color">
                <b> 購物車</b>
            </h4>
            <div className="p-2">
                <div className="row col-lg-5 align-items-center ">
                    <div class="col-3 d-inline-flex justify-content-evenly form-check">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                        />
                        <label
                            className="form-check-label"
                            for="flexCheckDefault"
                        >
                            全選
                        </label>
                    </div>
                    <button className="btn btn-primary col mx-2 p-0 text-nowrap">
                        移除品項
                    </button>
                    <button className="btn btn-primary col mx-2 p-0 text-nowrap">
                        加入收藏
                    </button>
                </div>
            </div>
            <div className="">
                <MyCartTable
                    myCart={myCart}
                    setMyCart={setMyCart}
                    myCartPrice={myCartPrice}
                    setMyCartPrice={setMyCartPrice}
                />
            </div>
            <div className="pb-5 row justify-content-around">
                <MyCartDoCheckout
                    myCart={myCart}
                    setMyCart={setMyCart}
                    myCartPrice={myCartPrice}
                    setMyCartPrice={setMyCartPrice}
                />
            </div>
        </div>
    );
}
export default MyCart;
