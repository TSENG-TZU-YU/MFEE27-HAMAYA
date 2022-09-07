import React from 'react';

// 樣式
import './index.scss';

// 套件
import { Container } from 'react-bootstrap';

// 圖檔
import product from '../../../assets/ProductsImg/product.png';
import Close from '../../../assets/svg/close.svg';
import Delete from '../../../assets/ProductsImg/icon/delete.svg';
import cartCheck from '../../../assets/ProductsImg/icon/shopping_cart_check_gary_dark.svg';

function ProductCompare({ setProductCompare }) {
    return (
        <div className="productCompare-popup-bg">
            <Container>
                <div className="productCompare-box bg-accent-light-color main-color m-3 fw-bold p-3 m-4">
                    <div className="d-flex justify-content-between">
                        <h4 className="main-color">比較結果</h4>
                        <button
                            className="closeBtn"
                            onClick={() => {
                                setProductCompare(false);
                            }}
                        >
                            <img src={Close} alt="close" />
                        </button>
                    </div>
                    <table className="table">
                        <thead>
                            <tr className="productCompare-tr">
                                <th></th>
                                <th>
                                    <img src={product} alt="product" />
                                </th>
                                <th>
                                    <img src={product} alt="product" />
                                </th>
                                <th>
                                    <img src={product} alt="product" />
                                </th>
                                <th>
                                    <img src={product} alt="product" />
                                </th>
                                <th>
                                    <img src={product} alt="product" />
                                </th>
                                <th>
                                    <img src={product} alt="product" />
                                </th>
                            </tr>
                            <tr className="productCompare-tr">
                                <th nowrap="nowrap">品名/型號</th>
                                <th>YAMAHA U系列 U1</th>
                                <th>YAMAHA U系列 U1</th>
                                <th>YAMAHA U系列 U1</th>
                                <th>YAMAHA U系列 U1</th>
                                <th>YAMAHA U系列 U1</th>
                                <th>YAMAHA U系列 U1</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="productCompare-tr">
                                <td>售價</td>
                                <td className="accent-color fs-5 fw-bold productCompare-letter-spacing">
                                    NT $5,000
                                </td>
                                <td className="accent-color fs-5 fw-bold productCompare-letter-spacing">
                                    NT $5,000
                                </td>
                                <td className="accent-color fs-5 fw-bold productCompare-letter-spacing">
                                    NT $5,000
                                </td>
                                <td className="accent-color fs-5 fw-bold productCompare-letter-spacing">
                                    NT $5,000
                                </td>
                                <td className="accent-color fs-5 fw-bold productCompare-letter-spacing">
                                    NT $5,000
                                </td>
                                <td className="accent-color fs-5 fw-bold productCompare-letter-spacing">
                                    NT $5,000
                                </td>
                            </tr>
                            <tr className="productCompare-tr">
                                <td>品牌</td>
                                <td>YAMAHA</td>
                                <td>YAMAHA</td>
                                <td>YAMAHA</td>
                                <td>YAMAHA</td>
                                <td>YAMAHA</td>
                                <td>YAMAHA</td>
                            </tr>
                            <tr className="productCompare-tr">
                                <td>規格</td>
                                <td>
                                    長度 151公分 / 寬度 146 公分 / 高度 99 公分
                                </td>
                                <td>
                                    長度 151公分 / 寬度 146 公分 / 高度 99 公分
                                </td>
                                <td>
                                    長度 151公分 / 寬度 146 公分 / 高度 99 公分
                                </td>
                                <td>
                                    長度 151公分 / 寬度 146 公分 / 高度 99 公分
                                </td>
                                <td>
                                    長度 151公分 / 寬度 146 公分 / 高度 99 公分
                                </td>
                                <td>
                                    長度 151公分 / 寬度 146 公分 / 高度 99 公分
                                </td>
                            </tr>
                            <tr className="productCompare-tr">
                                <td>顏色</td>
                                <td>
                                    <div className="d-flex p-0">
                                        <div className="products-filter-color-box color"></div>
                                    </div>
                                </td>
                                <td>
                                    <div className="d-flex p-0">
                                        <div className="products-filter-color-box color"></div>
                                    </div>
                                </td>
                                <td>
                                    <div className="d-flex p-0">
                                        <div className="products-filter-color-box color"></div>
                                    </div>
                                </td>
                                <td>
                                    <div className="d-flex p-0">
                                        <div className="products-filter-color-box color"></div>
                                    </div>
                                </td>
                                <td>
                                    <div className="d-flex p-0">
                                        <div className="products-filter-color-box color"></div>
                                    </div>
                                </td>
                                <td>
                                    <div className="d-flex p-0">
                                        <div className="products-filter-color-box color"></div>
                                    </div>
                                </td>
                            </tr>
                            <tr className="productCompare-tr">
                                <td></td>
                                <td>
                                    <img
                                        style={{
                                            width: '25px',
                                            height: '25px',
                                        }}
                                        src={cartCheck}
                                        alt="cartCheck"
                                        className="me-4 cursor-pointer"
                                    />
                                    <img
                                        style={{
                                            width: '30px',
                                            height: '30px',
                                        }}
                                        src={Delete}
                                        alt="delete"
                                        className="cursor-pointer"
                                    />
                                </td>
                                <td>
                                    <img
                                        style={{
                                            width: '25px',
                                            height: '25px',
                                        }}
                                        src={cartCheck}
                                        alt="cartCheck"
                                        className="me-4 cursor-pointer"
                                    />
                                    <img
                                        style={{
                                            width: '30px',
                                            height: '30px',
                                        }}
                                        src={Delete}
                                        alt="delete"
                                        className="cursor-pointer"
                                    />
                                </td>
                                <td>
                                    <img
                                        style={{
                                            width: '25px',
                                            height: '25px',
                                        }}
                                        src={cartCheck}
                                        alt="cartCheck"
                                        className="me-4 cursor-pointer"
                                    />
                                    <img
                                        style={{
                                            width: '30px',
                                            height: '30px',
                                        }}
                                        src={Delete}
                                        alt="delete"
                                        className="cursor-pointer"
                                    />
                                </td>
                                <td>
                                    <img
                                        style={{
                                            width: '25px',
                                            height: '25px',
                                        }}
                                        src={cartCheck}
                                        alt="cartCheck"
                                        className="me-4 cursor-pointer"
                                    />
                                    <img
                                        style={{
                                            width: '30px',
                                            height: '30px',
                                        }}
                                        src={Delete}
                                        alt="delete"
                                        className="cursor-pointer"
                                    />
                                </td>
                                <td>
                                    <img
                                        style={{
                                            width: '25px',
                                            height: '25px',
                                        }}
                                        src={cartCheck}
                                        alt="cartCheck"
                                        className="me-4 cursor-pointer"
                                    />
                                    <img
                                        style={{
                                            width: '30px',
                                            height: '30px',
                                        }}
                                        src={Delete}
                                        alt="delete"
                                        className="cursor-pointer"
                                    />
                                </td>
                                <td>
                                    <img
                                        style={{
                                            width: '25px',
                                            height: '25px',
                                        }}
                                        src={cartCheck}
                                        alt="cartCheck"
                                        className="me-4 cursor-pointer"
                                    />
                                    <img
                                        style={{
                                            width: '30px',
                                            height: '30px',
                                        }}
                                        src={Delete}
                                        alt="delete"
                                        className="cursor-pointer"
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </Container>
        </div>
    );
}

export default ProductCompare;
