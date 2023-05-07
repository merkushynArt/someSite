import React from 'react';
import { NavLink } from 'react-router-dom';

export const Header = () => {
   return (
      <header className='header'>
         <NavLink className={'header__logo'} to="/">
            <img src="https://seastargroup.com.ua/wp-content/uploads/2022/12/Sea_Star_Group_Logo.png" alt="logo" />
         </NavLink>

         <ul className='header__list'>
            <li className='header__list-item'>
               <NavLink to="/about">
                  Про нас
               </NavLink>
            </li>
            <li className='header__list-item'>
               <NavLink to="/services">
                  Услуги
               </NavLink>
            </li>
            <li className='header__list-item'>
               <NavLink to="/vacancies">
                  Вакансии
               </NavLink>
            </li>
            <li className='header__list-item'>
               <NavLink to="/contacts">
                  Контакты
               </NavLink>
            </li>
         </ul>
      </header>
   );
}
