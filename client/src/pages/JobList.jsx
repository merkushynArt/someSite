import React from 'react';
import { Link } from 'react-router-dom';

export const JobList = ({ jobs }) => {
   return (
      <section className='jobs'>
         <h2 className='title'>Вакансии</h2>
         <ul className='jobs__list'>
            {jobs.map(job => (
               <li className='jobs__item' key={job.id}>
                  <Link to={`/jobs/${job.id}`}>
                     <img src={`${job.img}`} alt="" />
                     {job.title}
                  </Link>
               </li>
            ))}
         </ul>
      </section>
   );
}
