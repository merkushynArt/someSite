import React from 'react';
import { MyLink2 } from '../components/MyLink2';

export const About = () => {
   return (
      <div className='about'>
         <div className="about-info">
            <h3 className="title">Wide Shipping</h3>
            <p className='about-info__text'>
               Лидер крюинговых агенств в странах снг. Более 10 лет успешной работы в индустрии мореплавания. мы уже готовы подобрать вам подходящую вакансию работы на лайнере.
            </p>
            <img className='about__img' src="/images/capitan.jpg" alt="" />
         </div>
         
            <div className="about__target">
            <div className="container">
               <h3 className="title text-center">Наша цель </h3>
               <p className='about__target-text'>
                  Компания Wide Shipping предлагает услуги по консультированию, а также курсы подготовки и полное сопровождение для устройства на высокооплачиваемую работу на круизные лайнеры. Целью нашей фирмы является подготовка квалифицированного экипажа для круизных компаний, а также для того, что бы упростить процедуру принятия на работу. Самым необходимым  аспектом при устройстве на работу в морской  индустрии является знание что, где, когда и как нужно подготовить, а также пройти все этапы  подготовки, для того, чтобы быть серьезно воспринятым работодателем.  В связи с тем что круизные компании требуют квалифицированный персонал, тренинг и подготовка к собеседованию с работодателем  (которое проводится представителем компании), являются неотъемлемой частью для получения положительного результата: принятия на работу. Хотя многие должности не предусматривают предыдущего опыта работы, профессиональность и общая подготовка могут быть решающими факторами для работодателей в принятии решения, так как обслуживающий персонал является лицом фирмы.
               </p>
            </div>
         </div>

         <section className="about__benefits bl">
            <div className="container">
               <h3 className="title text-center">Наши преимущества</h3>
               <div className="about__benefits__wrapper">
                  <p className='about__benefits__text'>
                     Наше главное преимущество – полное сопровождение при трудоустройстве. Мы помогаем с оформлением необходимых документов и будем на связи в течение всего периода работы, а для тех, кто ищет возможность изучения английского языка на уровне носителя, подберем самый лучший город и школу по программе F1. Во многом мы стали первопроходцами и смогли помочь своим клиентам достичь поставленных целей. Нам доверяют граждане СНГ. В подтверждение тому – многочисленные отзывы ребят, осуществивших свои мечты вместе с нами!!
                  </p>
                  <div className="about__benefits-img">
                     <img src="/images/ship3.jpg" alt="" />
                  </div>
               </div>
            </div>
         </section>

         <section className='main-contacts'>
            <div className="container">
               <div className="main-contacts-wrapper">
                  <h3 className='title text-center'>Остались вопросы?</h3>
                  <MyLink2 to="/contacts">Связаться с нами</MyLink2>
               </div>
            </div>
         </section>
      </div>
   );
}
