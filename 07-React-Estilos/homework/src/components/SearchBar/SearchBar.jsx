import React from 'react';
import s from './index.module.css';

export default function SearchBar(props) {
  // acá va tu código
  return (
    <div className={s.contenedor}>
      <input className={s.contenedorInput} type="text" placeholder={"Ciudad..."}/>
    <button className={s.btn} onClick={()=>props.onSearch('Buscando Ciudad')}>Agregar</button>
    </div>
  )
};