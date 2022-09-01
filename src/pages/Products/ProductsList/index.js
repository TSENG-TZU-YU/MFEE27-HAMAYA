import React from 'react';
import './styles/index.scss';
import CategoryNav from './CategoryNav';
import ProductsItem from './ProductsItem';
import FilterNav from './FilterNav';
import banner from '../../../assets/ProductsImg/banner.png';
import { Container } from 'react-bootstrap';

function index() {
  return (
    <>
      <div className="banner-img">
        <img src={banner} alt="banner" />
      </div>
      <Container>
        <FilterNav />
        <div className="row">
          <div className="col-2">
            <CategoryNav />
          </div>
          <div className="col-10 row row-cols-sm-2 row-cols-md-4">
            <ProductsItem />
          </div>
        </div>
      </Container>
    </>
  );
}

export default index;
