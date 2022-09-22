import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '../../../../../utils/config';
import { useAuth } from '../../../../../utils/use_auth';
//svg
import { ReactComponent as AshBin } from '../../../../../assets/svg/delete.svg';
import { ReactComponent as AddCart } from '../../../../../assets/svg/shopping_cart_check.svg';

function BucketClass({ myBucketB, setMyBucketB }) {
    console.log('myBucketB', myBucketB);
    const { member } = useAuth();
    //checkbox check 裡面放product_id
    const [check, setCheck] = useState([]);
    // console.log('check', check);
    const [allCheck, setAllCheck] = useState(false);

    console.log('我的收藏BucketClass元件中', myBucketB);

    //商品單選checkbox
    function handleCheckBox(e) {
        console.log('value, allCheck, check', e.target.value, allCheck, check);

        const value = e.target.value;
        let newItem = [];
        if (check.includes(value)) {
            newItem = check.filter((v) => {
                return v !== value;
            });
            setCheck(newItem);
        } else {
            newItem = [...check, value];
            setCheck(newItem);
        }
        if (newItem.length === myBucketB.length) {
            setAllCheck(true);
        }
        if (newItem.length !== myBucketB.length) {
            setAllCheck(false);
        }
        console.log('newItem', newItem);
    }

    //取得product_id
    let itemId = myBucketB.map((v) => v.product_id);
    // console.log('itemId', itemId);
    //商品全選
    function handleAllCheckBox() {
        // console.log('click allCheckBox');
        allCheck ? setAllCheck(false) : setAllCheck(true);
        if (!allCheck) {
            setCheck(itemId);
        } else {
            setCheck([]);
        }
    }

    //依賴checkbox移除
    // function handleRemoveItem() {
    //     console.log('移除品項', check);

    //     if (member !== null && member.id !== '') {
    //         //重組陣列 加入member.id
    //         let newCheck = check.map((product_id) => {
    //             return [member.id, product_id];
    //         });
    //         // console.log('newCheck', newCheck);
    //         let setItemDataDelete = async () => {
    //             let response = await axios.delete(`${API_URL}/member/mycart`, {
    //                 data: newCheck,
    //             });
    //             // console.log('刪除response.data', response.data);
    //             alert(response.data.message);

    //             // //copy myCart
    //             let newMyBucketB = myBucketB.map((item) => {
    //                 return { ...item };
    //             });
    //             //前端刪除狀態 (全部)
    //             let newMyBucketAfterDelete = newMyBucketB.filter((item) => {
    //                 return check.indexOf(item.product_id) === -1;
    //             });

    //             // console.log('newMyCartAfterDelete', newMyCartAfterDelete);
    //             const myCart_cateA = newMyBucketAfterDelete.filter((v) => {
    //                 return v.category_id === 'A';
    //             });
    //             const myCart_cateB = newMyBucketAfterDelete.filter((v) => {
    //                 return v.category_id === 'B';
    //             });
    //             // //set狀態回去
    //             // setMyBucketA(myCart_cateA);
    //             // setMyBucketB(myCart_cateB);
    //             // setMyBucket(newMyBucketAfterDelete);
    //         };
    //         setItemDataDelete();
    //     }
    // }

    // 取消收藏
    async function handleRemoveFavorite(product_id) {
        // console.log('handleRemoveFavorite', product_id);
        try {
            let response = await axios.delete(
                `${API_URL}/member/mybucketlist/${product_id}`,
                {
                    withCredentials: true,
                }
            );
            console.log(response.data.message);
            setMyBucketB(response.data.class);
        } catch (err) {
            console.log(err.response.data.message);
        }
    }

    return (
        <>
            <div className="row p-2">
                <div className="row col-lg-5 align-items-center ">
                    <div className="col-3 d-inline-flex justify-content-evenly form-check">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            checked={allCheck}
                            onChange={handleAllCheckBox}
                        />
                        <label
                            className="form-check-label"
                            htmlFor="flexCheckDefault"
                        >
                            全選
                        </label>
                    </div>
                    <button className="btn btn-primary col mx-2 p-0 text-nowrap">
                        取消收藏
                    </button>
                    <button className="btn btn-primary col mx-2 p-0 text-nowrap">
                        加入購物車
                    </button>
                </div>
            </div>
            {myBucketB.map((item) => {
                return (
                    <div className="py-2" key={item.id}>
                        <div className="myBucketClass-Item d-lg-flex">
                            <img
                                className="myBucketClass-Img "
                                src={require(`../../../../../album/class/${item.image_1}`)}
                                alt=""
                            />
                            <div className="flex-grow-1 p-2 row">
                                <div className="col-12 d-flex justify-content-between">
                                    <h6>
                                        <b>{item.name}</b>
                                    </h6>
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        value={item.product_id}
                                        checked={check.includes(
                                            item.product_id
                                        )}
                                        onChange={(e) => {
                                            handleCheckBox(e);
                                        }}
                                    />
                                </div>
                                <div className="col-12 row">
                                    <span className="d-inline-block col-md-6 order-1 order-md-0">
                                        報名期限：{item.deadline}
                                    </span>
                                    <span className="d-inline-block col-md-6 order-3 order-md-0">
                                        師資：{item.teacher}
                                    </span>

                                    <span className="d-inline-block col-md-6 order-2 order-md-0">
                                        上課時間：{item.start_date} -{' '}
                                        {item.end_date}
                                    </span>
                                    <span className="d-inline-block col-md-6 order-4 order-md-0">
                                        名額：{item.stock}人
                                    </span>
                                </div>
                                <div className="col-12 d-flex justify-content-between align-items-center">
                                    <p className="d-inline-flex m-0">
                                        <span className="accent-color">
                                            <b>NT: {item.price}</b>
                                        </span>
                                        /期
                                    </p>
                                    <div>
                                        <button className="btn border-0 p-0 mx-3">
                                            <AddCart className="myBucketItemIcon" />
                                        </button>
                                        <button className="btn border-0 p-0">
                                            <AshBin
                                                className="myBucketItemIcon"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    handleRemoveFavorite(
                                                        item.product_id
                                                    );
                                                }}
                                            />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </>
    );
}

export default BucketClass;
