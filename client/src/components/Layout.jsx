import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

export const Layout = ({ children }) => {
   return (
      <React.Fragment>
         <div className="header-block">
            <Header/>
         </div>
         { children }
         <Footer/>
      </React.Fragment>
   );
}