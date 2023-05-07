import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import SwiperCore, { Pagination, Autoplay } from 'swiper/core';
SwiperCore.use([Pagination, Autoplay]);

export const Slider = () => {
   return (
      <>
         <Swiper
            slidesPerView={2}
            spaceBetween={30}
            loop={true}
            autoplay={{ delay: 2000 }}
            pagination={{clickable: true,}}
            modules={[Pagination]}
            className="mySwiper"
         >
            <SwiperSlide>
               <div className="mySwiper__item">
                  <div className="mySwiper__item-img">
                     <img src="https://seastargroup.com.ua/wp-content/uploads/2022/12/fitness_girl_seastargroup-1024x672.webp" alt="" />
                  </div>
                  <h5 className="mySwiper__item-title title-small">
                     Фитнес-тренер на круизном лайнере
                  </h5>
                  <p className="mySwiper__item-text">
                  Фитнес-тренер – это ведущий специалист в сфере спорта и правильного питания. Такой специалист должен уметь проводить как практические, так и…
                  </p>
               </div>
            </SwiperSlide>

            <SwiperSlide>
               <div className="mySwiper__item">
                  <div className="mySwiper__item-img">
                     <img src="https://seastargroup.com.ua/wp-content/uploads/2023/01/massage_therapist_.png" alt="" />
                  </div>
                  <h5 className="mySwiper__item-title title-small">
                     Массажист на круизном лайнере
                  </h5>
                  <p className="mySwiper__item-text">
                     Массажист – это специалист, который бережно и профессионально влияет на мышцы тела, не касаясь костей и суставов. Помогает клиентам…
                  </p>
               </div>
            </SwiperSlide>

            <SwiperSlide>
               <div className="mySwiper__item">
                  <div className="mySwiper__item-img">
                     <img src="https://seastargroup.com.ua/wp-content/uploads/2023/01/hairdresser_seastargroup-1024x717.webp" alt="" />
                  </div>
                  <h5 className="mySwiper__item-title title-small">
                     Парикмахер на круизном лайнере
                  </h5>
                  <p className="mySwiper__item-text">
                     Парикмахер-стилист – это специалист в сфере красоты по созданию образа клиента с помощью прически, укладки, окрашивания волос или стрижки. В…
                  </p>
               </div>
            </SwiperSlide>

            <SwiperSlide>
               <div className="mySwiper__item">
                  <div className="mySwiper__item-img">
                     <img src="https://seastargroup.com.ua/wp-content/uploads/2022/12/cosmetologist_seastargroup.png" alt="" />
                  </div>
                  <h5 className="mySwiper__item-title title-small">
                     Косметолог на круизном лайнере
                  </h5>
                  <p className="mySwiper__item-text">
                  Косметолог – это специалист, занимающийся уходом, лечением лица и тела клиентов с целью устранения различных несовершенств его…
                  </p>
               </div>
            </SwiperSlide>
         </Swiper>
      </>
   );
}