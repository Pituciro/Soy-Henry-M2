import React from 'react';
import Card from '../card/Card.jsx';
import s from './index.module.css'

export default function Cards(props) {
  // acá va tu código
  // tip, podés usar un map
  return <div className={s.contenedor}>
      {
       props.cities.map(function(city){
        return <Card
          key={city.id}
          max={city.main.temp_max}
          min={city.main.temp_min}
          name={city.name}
          img={city.weather[0].icon}
          onClose={() => alert(city.name)}
          />
       })
      }
    </div>
  
};