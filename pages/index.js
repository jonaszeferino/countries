import Styles from "../styles/Home.module.css";
import { useEffect, useState } from "react";
import Image from "next/image";

let url = "https://servicodados.ibge.gov.br/api/v1/paises";

export default function Home() {
  // let [countryfact, setCountryfact] = useState([null])
  // aqui o Typescript ia ajudar :) como o countryfact é um array, tu vai setar o estado inicial dele como um array vazio
  let [countryfact, setCountryfact] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((result) => setCountryfact(result));
  }, []);
  console.log(countryfact);
  let flags = 'https://countryflagsapi.com/png/'
  return (
    <div>
      <h3 className={Styles.h3}> All Countries In The World</h3>
      <ul>
        {countryfact.map((country) => {
          return (
            <li className={Styles.list} key={country.nome['abreviado-EN']}>
              <span className={Styles.listName}>
                {country.nome['abreviado-EN']}
              </span>{" "}
              <span className={Styles.listName}>
                {" "}
                <br />
                {/* Abreviatura: {country.id["ISO-3166-1-ALPHA-2"]} */}
              </span>{" "}
              <></>
              <br />
              <span Style="Color: white">Size: {country.area.total}</span>{" "}
              <span Style="Color: white">{country.area.unidade.símbolo}</span>
              <br />
              <span Style="Color: white">
                  Language: {country.linguas[0].nome}
              </span>
              <br/>
              <span className={Styles.moldura}>
              <Image
                src={flags+(country.id["ISO-3166-1-ALPHA-2"])}
                alt="dog"
                layout="fixed"
                width="170px"
                height="100px"
                />
                </span>


            </li>
          );
        })}
      </ul>
    </div>
  );
}

