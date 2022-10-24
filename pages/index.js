import styles from '../styles/Home.module.css'
import { useEffect, useState } from 'react'

let url = 'https://servicodados.ibge.gov.br/api/v1/paises'

export default function Home() {
  // let [countryfact, setCountryfact] = useState([null])
  // aqui o Typescript ia ajudar :) como o countryfact é um array, tu vai setar o estado inicial dele como um array vazio
  let [countryfact, setCountryfact] = useState([])
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((result) => setCountryfact(result))

    console.log('CountryFact aqui:' + countryfact)
    // esse "country" aqui embaixo não existe ainda. então não tem como loggar
    // console.log('Country aqui:' + country)
  }, [])

  return (
    <div style={{ color: 'blue' }}>
      <ul>
        {countryfact.map((country) => {
          return (
            <li key={country.nome.abreviado}>
              <span>name:{country.nome.abreviado}</span>{' '}
              <span>area:{country.area.total}</span>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
