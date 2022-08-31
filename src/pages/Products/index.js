// import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import './index.scss';
import banner from '../../assets/ProductsImg/banner.png';
import product from '../../assets/ProductsImg/product.png';
import filterIcon from '../../assets/ProductsImg/icon/filter_alt.svg';
import sort from '../../assets/ProductsImg/icon/sort.svg';
import cartCheck from '../../assets/ProductsImg/icon/shopping_cart_check.svg';
import compare from '../../assets/ProductsImg/icon/compare.svg';
import favoriteCheck from '../../assets/ProductsImg/icon/favorite_check.svg';

function Products(props) {
  return (
    <>
      <img src={banner} alt="banner" />
      {/* <h1>Products</h1> */}
      <Container>
        <div className="d-flex flex-row-reverse">
          <div className="col-10 d-flex justify-content-between align-items-center">
            <ul className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="/">首頁</a>
              </li>
              <li className="breadcrumb-item">
                <a href="/">樂器商城 </a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                琴鍵樂器
              </li>
            </ul>
            <div>
              {/* TODO:按鈕按下會有光暈要移除 */}
              <button className="btn btn-link">
                進階篩選
                <img
                  className="icon-img ms-1 mb-1"
                  src={filterIcon}
                  alt="filterIcon"
                ></img>
              </button>
              <button className="btn btn-link">
                商品排序
                <img className="icon-img ms-1 mb-1" src={sort} alt="Sort"></img>
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-2">
            <ul className="category-navbar">
              <li className="product-main-category">最新商品</li>
              <li className="product-main-category product-main-category-active">
                琴鍵樂器
              </li>
              <ul className="product-sub-category">
                <li>直立/平台鋼琴</li>
                <li>電子鋼琴</li>
                <li>數位鋼琴</li>
              </ul>
              <li className="product-main-category">管樂器</li>
              <ul className="product-sub-category">
                <li>長笛</li>
                <li>短笛</li>
                <li>薩克斯風</li>
              </ul>
              <li className="product-main-category">弓弦樂器</li>
              <ul className="product-sub-category">
                <li>小提琴</li>
                <li>中提琴</li>
                <li>大提琴</li>
              </ul>
              <li className="product-main-category">吉他/烏克麗麗</li>
              <ul className="product-sub-category">
                <li>木吉他</li>
                <li>電吉他</li>
                <li>貝斯</li>
                <li>烏克麗麗</li>
              </ul>
              <li className="product-main-category">打擊樂器</li>
              <ul className="product-sub-category">
                <li>爵士鼓</li>
                <li>電子鼓</li>
                <li>木箱鼓</li>
              </ul>
              <li className="product-main-category">配件</li>
              <ul className="product-sub-category">
                <li>琴鍵樂器</li>
                <li>管樂器</li>
                <li>弓弦樂器</li>
                <li>吉他</li>
                <li>打擊樂器</li>
              </ul>
            </ul>
          </div>
          <div className="col-10 row row-cols-sm-2 row-cols-md-4">
            <div className="col product p-3">
              <div className="position-relative">
                <div className="like position-absolute top-0 end-0">
                  <img
                    src={favoriteCheck}
                    alt="favoriteCheck"
                    className="product-icon me-1 icon-img"
                  ></img>
                </div>
                <div className="compare small d-flex justify-content-center align-items-center position-absolute top-0 start-0 m-1">
                  <img
                    src={compare}
                    alt="compare"
                    className="product-icon me-1"
                  ></img>
                  比較
                </div>
                <button className="btn btn-primary w-100 text-canter cart-check-btn position-absolute bottom-0 end-0">
                  <img
                    src={cartCheck}
                    alt="cartCheck"
                    className="product-icon me-1"
                  ></img>
                  加入購物車
                </button>
                {/* 商品照片 */}
                <div className="product-img">
                  <img src={product} className="card-img-top" alt="product" />
                </div>
              </div>
              <div className="product-body">
                {/* 品名 */}
                <h5 className="product-name mt-2">YAMAHA U系列 U1</h5>
                {/* 價格 */}
                <p className="price accent-color">NT $5,000</p>
              </div>
            </div>
            <div className="col product">Column</div>
            <div className="col product">Column</div>
            <div className="col product">Column</div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Products;
