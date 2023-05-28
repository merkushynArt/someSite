import React from 'react';
import { useParams } from 'react-router-dom';

export const JobDetails = ({ jobs }) => {
   const { id } = useParams(); // Получаем параметр id из URL

   // Находим выбранную вакансию по id
   const selectedJob = jobs.find(job => job.id === id);

   // Проверяем, что вакансия найдена
   if (!selectedJob) {
      return <div>Вакансия не найдена</div>;
   }

   // Отображаем информацию о выбранной вакансии
   return (
      <div className='job'>
         <div className="job__top">
            <img src={selectedJob.img} alt="" />
            <div className="job__top-wrapper">
               <h3>{selectedJob.title}</h3>
               <div className="job__markers">
                  <div className='job__markers-item'>Заработная плата: <span dangerouslySetInnerHTML={{__html: selectedJob.salary }}></span></div>
                  <div className='job__markers-item'>Условия работы: <span dangerouslySetInnerHTML={{__html: selectedJob.conditions }}></span></div>
                  <div className='job__markers-item'>График работы: <span dangerouslySetInnerHTML={{__html: selectedJob.schedule }}></span></div>
                  <div className='job__markers-item'>Затраты при трудоустройстве: <span dangerouslySetInnerHTML={{__html: selectedJob.expenses }}></span></div>
               </div>
            </div>
         </div>
         <h5>Обязанности</h5>
         <div dangerouslySetInnerHTML={{__html: selectedJob.responsibilities }}></div>
         <h5>Минимальные требования</h5>
         <div dangerouslySetInnerHTML={{ __html: selectedJob.requirements }}></div>

         <p>{selectedJob.description}</p>
      </div>
   );
};
