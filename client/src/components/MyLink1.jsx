import React from 'react';
import { Link } from 'react-router-dom';

export const MyLink1 = (props) => {
   return (
      <Link className='link1' to={props.to}>{props.children}</Link>
   );
}

