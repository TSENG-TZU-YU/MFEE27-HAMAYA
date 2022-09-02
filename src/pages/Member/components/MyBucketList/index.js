import { useState ,useEffect} from 'react';
import search from '../../../../assets/svg/search.svg';
import './MyBucketList.scss';
import BucketClass from './components/BucketClass';
import BucketProduct from './components/BucketProduct';
import { useOutletContext } from 'react-router-dom'; //抓取Outlet的props

function MyBucketList(props) {
  const [setbread] = useOutletContext(); //此CODE為抓取麵包削setbread
    useEffect(() => {
      setbread('我的收藏'); //載入頁面時 設定麵包削
    }, []);
  const [bucketProduct, setBucketProduct] = useState(true);
  const [bucketClass, setBucketClass] = useState(false);
  return (
    <div className="col-12 col-md-8 col-lg-9">
      <div className="d-flex justify-content-between">
        <h4>
          <b>我的收藏</b>
        </h4>
        <button>
          <img src={search} alt="" />
        </button>
      </div>
      <div className="row p-2">
        <button
          className={`col-md-6 ${
            bucketProduct ? 'myBucketListBtn active' : 'myBucketListBtn'
          }`}
          onClick={() => {
            setBucketProduct(true);
            setBucketClass(false);
          }}
        >
          <h6>
            <b>樂器商城商品</b>
          </h6>
        </button>
        <button
          className={`col-md-6 ${
            bucketClass ? 'myBucketListBtn active' : 'myBucketListBtn'
          }`}
          onClick={() => {
            setBucketProduct(false);
            setBucketClass(true);
          }}
        >
          <h6>
            <b>音樂教育課程</b>
          </h6>
        </button>
      </div>
      {bucketProduct ? <BucketProduct /> : <BucketClass />}
    </div>
  );
}
export default MyBucketList;
