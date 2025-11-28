import React from 'react';
import { useRef, useEffect, useState} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {Navigation} from 'swiper/modules';
import AlbumCard from '../Card/Card';
import styles from './Carousal.module.css';
import { ReactComponent as SwiperNext } from "../assets/SwiperNext.svg";
import { ReactComponent as SwiperPrev } from "../assets/SwiperPrev.svg";
import 'swiper/css';
import 'swiper/css/navigation';
import { Link } from 'react-router-dom';

export default function Carousel({data, fromSongsSection = false}) {
  const swiperPrevSVG = useRef(null);
  const swiperNextSVG = useRef(null);
  const [swiper, setSwiper] = useState(null);

  useEffect(()=>{
    if (swiper && swiper.navigation){
    swiper.navigation.prevEl = swiperPrevSVG.current;
    swiper.navigation.nextEl = swiperNextSVG.current;
    swiper.navigation.init();
    swiper.navigation.update();
    }
  },[swiper])

  return (
    <div className={styles.carouselDiv}>
    <Swiper className={styles.swiperContainer}
      spaceBetween={10}
      slidesPerView={2}
      onSwiper={setSwiper}
      modules={[Navigation]}
      navigation = {{
        prevEl: swiperPrevSVG.current,
        nextEl: swiperNextSVG.current
      }}
      onBeforeInit={(swiper)=>{
        swiper.navigation.prevEl = swiperPrevSVG.current;
        swiper.navigation.nextEl = swiperNextSVG.current;
      }}
      breakpoints={{
            450: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            // when window width is >= 640px
            640: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
            // when window width is >= 768px
            768: {
              slidesPerView: 7,
              spaceBetween: 10,
            },
          }}
    >
    {data.map((eachObj)=>{
                        return <SwiperSlide key={eachObj.id}>
                            {fromSongsSection ? <AlbumCard id = {eachObj.id} image = {eachObj.image} title = {eachObj.title} Likes = {eachObj.likes}/> 
                            : <Link style={{textDecoration: "none"}} to={`/AlbumDetail/:${eachObj.id}`}><AlbumCard id = {eachObj.id} image = {eachObj.image} title = {eachObj.title} Follows = {eachObj.follows}/></Link>}
                            </SwiperSlide>
                    })}
               
    </Swiper>
    <div>
          <button className={styles.prevButton} ref={swiperPrevSVG}><SwiperPrev/></button>
          <button className={styles.nextButton} ref={swiperNextSVG}><SwiperNext/></button>
    </div>
  </div>
  );
};