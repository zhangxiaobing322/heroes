import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '@/components/zhoubian/style.scss';

const Qt = ({ list }) => (
  <ul className="list">
    {
      list.map((item, index) => {
        return (
          <Link to = { 'shopDetail/' + item.otherId } key={item.otherId}>
            <div className="goods_img">
            <img src={item.otherImg} alt=""/>
            </div>
            <div className="goods_name">{item.otherName}</div>
            <div className="goods_price">￥
            {item.otherPrice/100}</div>
          </Link>
        )
      })
    }       
  </ul>
)

Qt.propTypes = {
  list: PropTypes.array
}

export default Qt
