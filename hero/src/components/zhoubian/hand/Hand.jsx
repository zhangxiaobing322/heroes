import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '@/components/zhoubian/style.scss';

const Hand = ({ list }) => (
  <ul className="list">
    {
      list.map((item, index) => {
        return (
          <Link to = { 'shopDetail/' + item.handId } key={item.handId}>
            <div className="goods_img">
            <img src={item.handImg} alt=""/>
            </div>
            <div className="goods_name">{item.handName}</div>
            <div className="goods_price">￥
            {item.handPrice/100}</div>
          </Link>
        )
      })
    }       
  </ul>
)

Hand.propTypes = {
  list: PropTypes.array
}

export default Hand
