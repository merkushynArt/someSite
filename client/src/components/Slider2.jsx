import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// import required modules
import SwiperCore, { Autoplay } from 'swiper/core';
SwiperCore.use([ Autoplay]);

export const Slider2 = () => {
   return (
      <>
         <Swiper
            slidesPerView={3}
            spaceBetween={30}
            loop={true}
            autoplay={{ delay: 2000 }}
            className="mySwiper"
         >
            <SwiperSlide>
               <div className="mySwiper__item">
                  <div className="mySwiper__item-top">
                     <div className="mySwiper__item-avatar">
                        <img src="https://seastargroup.com.ua/wp-content/uploads/2021/11/%D0%95%D0%BB%D0%B5%D0%BD%D0%B0-150x150.jpeg" alt="" />
                     </div>

                     <div className="mySwiper__item-name">
                        <h6 className="mySwiper__item-name--title">Елена</h6>
                        <div className="mySwiper__item-name--prof">Мастер маникюра</div>
                     </div>
                  </div>

                  <div className="mySwiper__item-review">
                     Уже шесть лет работаю в море и все благодаря старту с Sea Star Group в лице Jonathan Cepeda. Я несколько лет мечтала начать работать в спа на круизном лайнере и все вокруг меня отговаривали…даже не так… уговаривали что я никогда не смогу попасть работать на лайнер. Но благодаря Sea Star Group моя мечта работать и путешествовать одновременно сбылась. Они не просто поверили в меня, а вдохновляли, направляли и всячески поддерживали даже после моего старта. Я чувствовала поддержку с их стороны и знала что всегда могу обратится за советом и помощью даже спустя какое то время. Когда ко мне обращаются с вопросом как же попасть на работу на круизный лайнер я всегда советую Sea Star Group и дальше буду их советовать!
                  </div>
               </div>
            </SwiperSlide>

            <SwiperSlide>
               <div className="mySwiper__item">
                  <div className="mySwiper__item-top">
                     <div className="mySwiper__item-avatar">
                        <img src="https://seastargroup.com.ua/wp-content/uploads/2021/11/%D0%A2%D0%B0%D1%82%D1%8C%D1%8F%D0%BD%D0%B0-150x150.jpeg" alt="" />
                     </div>

                     <div className="mySwiper__item-name">
                        <h6 className="mySwiper__item-name--title">Вика</h6>
                        <div className="mySwiper__item-name--prof">Парикмахер</div>
                     </div>
                  </div>

                  <div className="mySwiper__item-review">
                     Sea Star Group, это же лучшее, что может случиться в вашей жизни! В моей точно так! Благодарность от души Галине и Джонатану! Спасибо за помощь в подготовке к собеседованию, спасибо за поддержу! Спасибо за помощь в подготовке документов! Благодаря Sea Star Group я училась в Лондоне с прекрасными ребятами, которые стали друзьями по жизни! Получила контракт на одном из luxury cruise ship SEABOURN.
                  </div>
               </div>
            </SwiperSlide>

            <SwiperSlide>
               <div className="mySwiper__item">
                  <div className="mySwiper__item-top">
                     <div className="mySwiper__item-avatar">
                        <img src="https://seastargroup.com.ua/wp-content/uploads/2021/11/%D0%A4%D0%B8%D1%82%D0%BD%D0%B5%D1%81-%D1%82%D1%80%D0%B5%D0%BD%D0%B5%D1%80-150x150.jpeg" alt="" />
                     </div>

                     <div className="mySwiper__item-name">
                        <h6 className="mySwiper__item-name--title">Євгеній</h6>
                        <div className="mySwiper__item-name--prof">Фитнес-тренер</div>
                     </div>
                  </div>

                  <div className="mySwiper__item-review">
                     Sea Star — це дійсно надійний помічник у втіленні твоєї мрії. Не скажу, що в підготовці для роботи на круїзному лайнері все так солодко як може здатися на перший погляд. Та з допомогою компанії це дається в рази простіше. Сам процес (від першої співбесіди в офісі SeaStar до поїздки в Лондон) в моєму випадку зайняв 9 міс. Але тут все залежить від Вас. Наскільки ви готові відмовитися від минулого та з головою окунутися в підготовку: співбесіди, навчання, медогляди , оформлення документів і т.д . Джонатан в свою чергу виявився люб’язним в плані порад/підтримки. Галина взагалі, наче мама водила в посольство за руку. В цілому їх роботою я задоволений. Та що там казати не було б SeaStar протирав би штани і далі в своєму фітнес клубі... 
                  </div>
               </div>
            </SwiperSlide>

            <SwiperSlide>
               <div className="mySwiper__item">
                  <div className="mySwiper__item-top">
                     <div className="mySwiper__item-avatar">
                        <img src="https://seastargroup.com.ua/wp-content/uploads/2023/01/%D0%9B%D0%B8%D0%B0%D0%BD%D0%B0-150x150.jpeg" alt="" />
                     </div>

                     <div className="mySwiper__item-name">
                        <h6 className="mySwiper__item-name--title">Лиана</h6>
                        <div className="mySwiper__item-name--prof">Парикмахер</div>
                     </div>
                  </div>

                  <div className="mySwiper__item-review">
                     Обратилась в компанию Sea Star Group за помощью в организации работы на судне. Джонатан и Галина оказались профессионалы своего дела, да и просто потрясающие люди, которые так же переживают и делают все возможное чтобы осуществить желаемое. С их помощью меня приняли в академию и дальше после 2х недель обучения я получила свой корабль. Это оказалось небольшое 6ти звездное судно на 350 пассажиров, чему я в итоге была очень рада. Мое путешествие началось с Аляски, далее я увидела большую часть Азии, и забрела на самый дальний континент — Австралия и Новая Зеландия. Работа была нелегкой, стрессовой и плюс это очень длительный контракт. И все же, в конце приходит осознание и благодарность за все. За прекрасную возможность увидеть мир, осознать его по другому, почувствовать, обучиться новому языку, начать думать по иному, 
                  </div>
               </div>
            </SwiperSlide>

            <SwiperSlide>
               <div className="mySwiper__item">
                  <div className="mySwiper__item-top">
                     <div className="mySwiper__item-avatar">
                        <img src="https://seastargroup.com.ua/wp-content/uploads/2021/11/%D0%95%D0%BB%D0%B5%D0%BD%D0%B0-150x150.jpeg" alt="" />
                     </div>

                     <div className="mySwiper__item-name">
                        <h6 className="mySwiper__item-name--title">Елена</h6>
                        <div className="mySwiper__item-name--prof">Мастер маникюра</div>
                     </div>
                  </div>

                  <div className="mySwiper__item-review">
                     Sea Star Group, это же лучшее, что может случиться в вашей жизни! В моей точно так! Благодарность от души Галине и Джонатану! Спасибо за помощь в подготовке к собеседованию, спасибо за поддержу! Спасибо за помощь в подготовке документов! Благодаря Sea Star Group я училась в Лондоне с прекрасными ребятами, которые стали друзьями по жизни! Получила контракт на одном из luxury cruise ship SEABOURN. 
                  </div>
               </div>
            </SwiperSlide>

            <SwiperSlide>
               <div className="mySwiper__item">
                  <div className="mySwiper__item-top">
                     <div className="mySwiper__item-avatar">
                        <img src="https://seastargroup.com.ua/wp-content/uploads/2021/11/%D0%A2%D0%B0%D1%82%D1%8C%D1%8F%D0%BD%D0%B0-150x150.jpeg" alt="" />
                     </div>

                     <div className="mySwiper__item-name">
                        <h6 className="mySwiper__item-name--title">Вика</h6>
                        <div className="mySwiper__item-name--prof">Парикмахер</div>
                     </div>
                  </div>

                  <div className="mySwiper__item-review">
                     Sea Star Group, это же лучшее, что может случиться в вашей жизни! В моей точно так! Благодарность от души Галине и Джонатану! Спасибо за помощь в подготовке к собеседованию, спасибо за поддержу! Спасибо за помощь в подготовке документов! Благодаря Sea Star Group я училась в Лондоне с прекрасными ребятами, которые стали друзьями по жизни! Получила контракт на одном из luxury cruise ship SEABOURN.
                  </div>
               </div>
            </SwiperSlide>
         </Swiper>
      </>
   );
}
