import React from 'react';

const Osa = (props) => <p>{props.osa} {props.tehtavia}</p>
const Otsikko = (props) => <h1>{props.kurssi.nimi}</h1>
const Sisalto = (props) => {
  return(
    <div>
      <ul>
      {props.kurssi.osat.map(osa =>
         <li key={osa.id}><Osa osa={osa.nimi} tehtavia={osa.tehtavia} /></li>)}
      </ul>
    </div>
  )
}
const Yhteensa = (props) => {
  const reducer = (accumulator, currentValue) => accumulator + currentValue
  const tehtavat = props.kurssi.osat.map(osa=>osa.tehtavia)
  const summa = tehtavat.reduce(reducer)
  
  return(
    <p>yhteensä {summa} tehtävää</p>
  )
}

const Kurssi = (props) => {
  return(
      <div>
        <Otsikko kurssi={props.kurssi} />
        <Sisalto kurssi={props.kurssi} />
        <Yhteensa kurssi={props.kurssi} />
      </div>
  )
}

export default Kurssi;
