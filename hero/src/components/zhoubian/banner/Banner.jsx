import React from 'react';
import { NavLink } from 'react-router-dom';
import { Carousel } from 'antd';

const Banner = () => (
  <div className="banner" style={{ width: '100%', }}>
  <Carousel
      autoplay={ true }
      infinite
      dots = { true }
    >
      <NavLink to = "/zhoubian" style={{ display: 'block', width: '100%'}}><img src="https://game.gtimg.cn/images/daojushop/zb/ad/201902/20190215012009_692319.jpg" style={{ width: '100%' }} alt=""/></NavLink >
      <NavLink to = "/zhoubian" style={{ display: 'block', width: '100%'}}><img src="https://game.gtimg.cn/images/daojushop/zb/ad/201903/20190306213622_361947.jpg" style={{ width: '100%' }} alt=""/></NavLink >
      <NavLink to = "/zhoubian" style={{ display: 'block', width: '100%'}}><img src="https://game.gtimg.cn/images/daojushop/zb/ad/201903/20190306213936_580676.jpg" style={{ width: '100%' }} alt=""/></NavLink >
      <NavLink to = "/zhoubian" style={{ display: 'block', width: '100%'}}><img src="https://game.gtimg.cn/images/daojushop/zb/ad/201902/20190220134349_709647.jpg" style={{ width: '100%' }} alt=""/></NavLink >
      <NavLink to = "/zhoubian" style={{ display: 'block', width: '100%'}}><img src="https://game.gtimg.cn/images/daojushop/zb/ad/201903/20190306213834_774080.jpg" style={{ width: '100%' }} alt=""/></NavLink >
    </Carousel>
  </div>
)

export default Banner
