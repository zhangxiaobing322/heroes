import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '@/components/zhoubian/style.scss';

const Yifu = ({ list }) => (
  <ul className="list">
    {
      list.map((item, index) => {
        return (
          <Link to = { 'shopDetail/' + item.goodId } key={item.goodId}>
            <div className="goods_img">
            <img src={item.goodImg} alt=""/>
            </div>
            <div className="goods_name">{item.goodName}</div>
            <div className="goods_price">￥
            {item.goodPrice/100}</div>
          </Link>
        )
      })
    }       
  </ul>
)

Yifu.propTypes = {
  list: PropTypes.array
}

export default Yifu
