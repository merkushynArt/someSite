import React from 'react';
import { MyLink1 } from '../components/MyLink1';
import { MyLink2 } from '../components/MyLink2';
import { FaRegHandshake, FaFlagUsa, FaLanguage, FaRegIdBadge, FaBriefcase, FaFileAlt, FaPlane, FaMoneyBill } from "react-icons/fa";
import { BiPhoneCall } from "react-icons/bi";
import { Slider } from '../components/Slider';
import { Slider2 } from '../components/Slider2';

export const Main = () => {
   /*https://seastargroup.com.ua/wp-content/uploads/2023/03/front_page_seastargroup-e1680207443415.png
   https://seastargroup.com.ua/wp-content/uploads/2023/03/front_page_welcome_smile_.png
   */
   return (
      <div className='main'>
         <section className="main__promo">
            <div className="main__promo-img"></div>
            <div className="main__promo-mask"></div>
            <div className="main__promo-wrapper">
               <span className='main__promo-text'>
               Профессиональный сервис по трудоустройству на круизные лайнеры, оформление виз и обучение в США.
               </span>
               <h1 className='main__promo-title'>Wide Shipping</h1>
               <div className="main__promo-btns">
                  <MyLink1 to="/about">Подробнее</MyLink1>
                  <MyLink2 to="/contacts">Контакты</MyLink2>
               </div>
            </div>
         </section>

         <div className="container">
            <section className="main-offer">
               <div className="main-offer__item">
                  <h3 className='title'>Мы предлагаем:</h3>
                  <div className="main-offer__item-img1">
                     <img src="https://seastargroup.com.ua/wp-content/uploads/2023/03/front_page_welcome_smile_.png" alt="" />
                  </div>
               </div>

               <div className="main-offer__list">
                  <div className="main-offer__list-item">
                     <div className="main-offer__list-item--img">
                        <FaRegHandshake/>
                     </div>
                     <div className="main-offer__list-item--content">
                        <h5 className='title-small'>Надежную работу</h5>
                        <p className='main-offer__list-item--text'>
                           На всемирно известных американских круизных лайнерах со стабильным доходом.
                        </p>
                     </div>
                  </div>

                  <div className="main-offer__list-item">
                     <div className="main-offer__list-item--img">
                        <FaFlagUsa/>
                     </div>
                     <div className="main-offer__list-item--content">
                        <h5 className='title-small'>Надежную работу</h5>
                        <p className='main-offer__list-item--text'>
                           На всемирно известных американских круизных лайнерах со стабильным доходом.
                        </p>
                     </div>
                  </div>

                  <div className="main-offer__list-item">
                     <div className="main-offer__list-item--img">
                        <FaLanguage/>
                     </div>
                     <div className="main-offer__list-item--content">
                        <h5 className='title-small'>Языковые курсы в США</h5>
                        <p className='main-offer__list-item--text'>
                           В невероятных городах: Нью Йорк, Майами, Лос Анджелес, Чикаго.
                        </p>
                     </div>
                  </div>

                  <div className="main-offer__list-item">
                     <div className="main-offer__list-item--img">
                        <FaRegIdBadge/>
                     </div>
                     <div className="main-offer__list-item--content">
                        <h5 className='title-small'>Морские документы</h5>
                        <p className='main-offer__list-item--text'>
                        Все необходимое от сертификатов STCW, паспорта моряка до крю-листа.
                        </p>
                     </div>
                  </div>
               </div>
            </section>
         </div>

         <section className='benefits bl'>
            <div className="container">
               <h3 className='title text-center'>Почему именно мы?</h3>

               <div className="benefits--wrapper">
                  <div className="benefits__list">
                     <div className="benefits__list-item">
                        <span className='benefits__list-num'>01</span>
                        <h5 className="title-small">Международный опыт</h5>
                        <p className="benefits__list-text">
                           Это позволит вам быстро и эффективно получить трудоустройство на круизных лайнерах посредством нашего опыта и связей в индустрии.
                        </p>
                     </div>

                     <div className="benefits__list-item">
                        <span className='benefits__list-num'>02</span>
                        <h5 className="title-small">Комфорт</h5>
                        <p className="benefits__list-text">
                           Сотрудничество с нами даст вам доступ к нашей команде профессионалов, которые помогут вам подготовить все необходимые документы и проконсультируют по всем вопросам.
                        </p>
                     </div>

                     <div className="benefits__list-item">
                        <span className='benefits__list-num'>03</span>
                        <h5 className="title-small">Высококачественный сервис</h5>
                        <p className="benefits__list-text">
                           Опытный и квалифицированный персонал, всегда готовый предоставить необходимую актуальную информацию и помощь. Профессиональное оформление виз в США с минимальными рисками отказа.
                        </p>
                     </div>

                     <div className="benefits__list-item">
                        <span className='benefits__list-num'>04</span>
                        <h5 className="title-small">Конфиденциальность</h5>
                        <p className="benefits__list-text">
                           Вы можете быть уверены в конфиденциальности всех своих данных и индивидуальном подходе к каждому клиенту.
                        </p>
                     </div>
                  </div>

                  <div className="benefits__img">
                     <img src="https://seastargroup.com.ua/wp-content/uploads/2023/03/front_page_seastargroup-e1680207443415.png" alt="" />
                  </div>
               </div>
            </div>
         </section>

         <div className="container">
            <section className='services'>
               <h3 className='title text-center'>Как мы работаем?</h3>

               <div className="services__items">
                  <div className="services__item">
                     <span className='services__item-num'>01</span>
                     <div className="services__item-img">
                        <BiPhoneCall/>
                     </div>
                     <h5 className="title-small">Связаться с нами</h5>
                     <p className='services__item-text'>
                        И таким образом от нас получить подробную консультацию.
                     </p>
                  </div>

                  <div className="services__item">
                     <span className='services__item-num'>02</span>
                     <div className="services__item-img">
                        <FaRegIdBadge/>
                     </div>
                     <h5 className="title-small">Регистрация</h5>
                     <p className='services__item-text'>
                        Заполнить анкету на сайте или отправить резюме, наш менеджер с вами свяжется, протестирует знание английского языка и предложит дать интервью.
                     </p>
                  </div>

                  <div className="services__item">
                     <span className='services__item-num'>03</span>
                     <div className="services__item-img">
                        <FaBriefcase/>
                     </div>
                     <h5 className="title-small">Финальное собеседование</h5>
                     <p className='services__item-text'>
                        Общение с представителем компании окончательно утвердить вашу кандидатуру для дальнейшего трудоустройства.
                     </p>
                  </div>

                  <div className="services__item">
                     <span className='services__item-num'>04</span>
                     <div className="services__item-img">
                        <FaFileAlt/>
                     </div>
                     <h5 className="title-small">Оформление всех документов</h5>
                     <p className='services__item-text'>
                     Наши специалисты профессионально и ответственно подготовят пакет документов, необходимый для подачи на визу, полное сопровождение на всех этапах трудоустройства.
                     </p>
                  </div>

                  <div className="services__item">
                     <span className='services__item-num'>05</span>
                     <div className="services__item-img">
                        <FaPlane/>
                     </div>
                     <h5 className="title-small">Вылет на работу</h5>
                     <p className='services__item-text'>
                        Мы рады предоставить Вам возможность осуществить комфортабельный вылет и насладиться вашей поездкой.
                     </p>
                  </div>

                  <div className="services__item">
                     <span className='services__item-num'>06</span>
                     <div className="services__item-img">
                        <FaMoneyBill/>
                     </div>
                     <h5 className="title-small">Реализация желаний!</h5>
                     <p className='services__item-text'>
                        За период контракта (9 месяцев) на борту круизного лайнера вы можете заработать от 540 000 грн (от 13500$), а вернувшись домой воплотить самые заветные мечты в жизнь!
                     </p>
                  </div>
               </div>
            </section>
         </div>

         <section className='main-vacancies bl'>
            <div className="container">
               <div className="main-vacancies-wrapper">
                  <div className="main-vacancies__item">
                     <h3 className='title'>Наши вакансии</h3>
                     <div className="main-vacancies__item-text">
                        Наша миссия – развеять мифы о работе за границей и открыть всем желающим возможности для стабильного и высокого заработка.
                     </div>
                     <MyLink1 to="/vacancies">Подробнее</MyLink1>
                  </div>

                  <div className="main-vacancies__item">
                     <Slider/>
                  </div>
               </div>
            </div>
         </section>

         <section className='main-info'>
            <div className="container">
               <div className="main-info__wrapper">
                  <div className="main-info__img">
                     <img src="https://seastargroup.com.ua/wp-content/uploads/2023/01/%D0%9C%D0%B5%D0%BD%D0%B5%D0%B4%D0%B6%D0%B5%D1%80-%D0%93%D0%B0%D0%BB%D0%B8%D0%BD%D0%B0.jpg" alt="" />
                  </div>

                  <div className="main-info__text">
                     <p>
                        Работа на круизных лайнерах – это возможность воплотить в реальность заветные мечты: путешествия и интересные знакомства, разговорный английский и, конечно, финансовая стабильность. Работая вd комфортных условиях и интересном обществе, вы сможете накопить собственное жилье, автомобиль или открытие бизнеса.
                     </p>
                  </div>
               </div>
            </div>

            <div className="main-info__title">Wide Shipping</div>
         </section>

         <div className="container">
            <section className='main-reviews'>
               <h3 className='title text-center'>Отзывы наших клиентов</h3>

               <div className="main-reviews-wrapper">
                  <Slider2/>
               </div>

               <div className="main-reviews__link">
                  <MyLink1 to="/reviews">Подробнее</MyLink1>
               </div>
            </section>
         </div>

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
