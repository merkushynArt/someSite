import React from 'react';
import { NavLink } from 'react-router-dom';
import { GiShipWheel } from "react-icons/gi";

export const Header = () => {
   return (
      <header className='header'>
         <NavLink className={'header__logo'} to="/">
            <GiShipWheel/>
         </NavLink>

         <ul className='header__list'>
            <li className='header__list-item'>
               <NavLink to="/about">
                  О нас
               </NavLink>
            </li>
            <li className='header__list-item'>
               <NavLink to="/services">
                  Услуги
               </NavLink>
            </li>
            <li className='header__list-item'>
               <NavLink to="/jobs">
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
