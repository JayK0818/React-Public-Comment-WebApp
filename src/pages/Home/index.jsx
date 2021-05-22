import React from 'react';
import Header from '@/components/Header';
import {Swiper,SwiperSlide} from 'swiper/react';
import SwiperCore,{Navigation,Pagination} from 'swiper';
import SwiperSlideItem from '@/components/Swiper/SwiperSlideItem';

import 'swiper/swiper.scss';
import './home.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
SwiperCore.use([Navigation,Pagination]);

function Home(){
  let swiper_length = [1,2,3];
  return (
    <div className="home-page">
      <Header cityName="杭州"/>
      <div className="swiper-container">
        <Swiper
          scrollbar={{ draggable: true }}
          pagination={{ clickable: true }}
          navigation
        >
          {
            swiper_length && swiper_length.map((swiper,index) => {
              return <SwiperSlide key={'swiper-'+index}><SwiperSlideItem index={swiper}/></SwiperSlide>
            })
          }
        </Swiper>
      </div>
    </div>
  )
}

export default Home;