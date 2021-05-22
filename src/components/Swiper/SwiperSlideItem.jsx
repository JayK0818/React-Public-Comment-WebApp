import React from 'react';
import './swiper-slide-item.scss';
let swiper_text_array = [
  ['美食','猫眼电影','酒店','休闲娱乐','外卖','火锅','丽人','购物','周边游','找工作'],
  ['婚纱摄影','生活服务','景点','爱车','运动健身','亲子','家装','学习培训','医疗健康','到家'],
  ['小吃快餐','口腔齿科','自助餐','日本料理','美发','美甲美睫','美容SPA','瘦身纤体','亲子摄影','全部分类']
]
function SwiperSlideItem(props){
  let swiper_index = props['index'];
  let icon_length = [];
  for(let i = 0, length = 10; i < length; i++){
    icon_length.push(i);
  }
  return (
    <React.Fragment>
      { icon_length.length && icon_length.map((icon,index) => 
        <div className="icon-item" key={'icon-'+index}>
          <div className="icon-container">
            <img width="44" height="44" src={require(`../../common/icons/${swiper_index}-${index+1}.png`)}/>
          </div>
          <p>{swiper_text_array[swiper_index-1][index]}</p>
        </div>
      )}
    </React.Fragment>
  )
}

export default SwiperSlideItem;