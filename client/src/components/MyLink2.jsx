import React from 'react';
import { Link } from 'react-router-dom';

export const MyLink2 = (props) => {
   return (
      <Link className='link2' to={props.to}>{props.children}</Link>
   );
}
