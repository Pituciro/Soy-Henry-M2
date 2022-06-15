import React from 'react';
import s from './index.module.css';

export default function Card(props) {
  // acá va tu código
  return (
    <div className={s.contenedor}>
      <button className={s.btn} onClick={props.onClose}>X</button>
      <h4>{props.name}</h4>
      <div className={s.info}>
        <div className={s.infoTemp}> 
        <p className={s.min}>Min:</p>
        <p>{props.min}</p>
        </div>
        <div className={s.infoTemp}> 
        <p className={s.max}>Max:</p>
        <p>{props.max}</p>
        </div>
        <img className={s.icon} src= {`http://openweathermap.org/img/wn/${props.img}@2x.png`} alt={"img"}/>
      </div> 
   </div>
  )
};