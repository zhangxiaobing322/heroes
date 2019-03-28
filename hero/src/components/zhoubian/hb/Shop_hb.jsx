import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '@/components/zhoubian/style.scss';

const Hb = ({ list }) => (
  <ul className="list">
    {
      list.map((item, index) => {
        return (
          <Link to = { 'shopDetail/' + item.posterId } key={item.posterId}>
            <div className="goods_img">
            <img src={item.posterImg} alt=""/>
            </div>
            <div className="goods_name">{item.posterName}</div>
            <div className="goods_price">￥
            {item.posterPrice/100}</div>
          </Link>
        )
      })
    }       
  </ul>
)

Hb.propTypes = {
  list: PropTypes.array
}

export default Hb
