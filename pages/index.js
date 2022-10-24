import styles from "../styles/Home.module.css";
import { useEffect, useState } from "react";

let url = "https://servicodados.ibge.gov.br/api/v1/paises";

export default function Home() {
  let [countryfact, setCountryfact] = useState([null]);
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((result) => setCountryfact(result));

      console.log('CountryFact aqui:'+ countryfact);
console.log('Country aqui:' + country)
      
  }, []);


  return (
    <div style={{ color: "blue" }}>
      <ul>
        
        {countryfact.map((country) => (
          
          <li key={country.nome.abreviado}>
            <span>name:{country.nome.abreviado}</span>
            {" "}
            <span>area:{country.area.total}</span>
          </li>
        ))}
        
      </ul>
    </div>
  );
}
