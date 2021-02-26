import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Country from "./Country" 



const  CountryListStyled = styled.div`
  display: grid;
  grid-row-gap: 2.3em;
  /*grid-template-columns:*/ 
  background: var(--background);
  border: 1px solid red;
  justify-content:center;
  padding: 4em 2em;
`;

function CountryList() {

    const [CountryList, setCountryList]= useState([])

    useEffect(()=>{
        fetch("https://restcountries.eu/rest/v2/all")
        .then((response)=>{
           return response.json()
        })
        .then((data)=>{
            console.log(data)
        })
        .catch(() => {
            console.log("hubo un error")
        })
    }, [])

    return (
        <CountryListStyled>
            <Country
             name="Peru"
             flag="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAADFBMVEXZECP////YABTlfIGUWM3jAAABZElEQVR4nO3QOQ0AMBDAsD78ORdA5hsq2QiirDXm3D3nnrnwQZ6UJ+VJeVKelCflSXlSnpQn5Ul5Up6UJ+VJeVKelCflSXlSnpQn5Ul5Up6UJ+VJeVKelCflSXlSnpQn5Ul5Up6UJ+VJeVKelCflSXlSnpQn5Ul5Up6UJ+VJeVKelCflSXlSnpQn5Ul5Up6UJ+VJeVKelCflSXlSnpQn5Ul5Up6UJ+VJeVKelCflSXlSnpQn5Ul5Up6UJ+VJeVKelCflSXlSnpQn5Ul5Up6UJ+VJeVKelCflSXlSnpQn5Ul5Up6UJ+VJeVKelCflSXlSnpQn5Ul5Up6UJ+VJeVKelCflSXlSnpQn5Ul5Up6UJ+VJeVKelCflSXlSnpQn5Ul5Up6UJ+VJeVKelCflSXlSnpQn5Ul5Up6UJ+VJeVKelCflSXlSnpQn5Ul5Up6UJ+VJeVKelCflSXlSnpQn5Ul5Up7Ut08evcpINOSdwxIAAAAASUVORK5CYII="
             population={1232123123}
             region="America"
             capital="lima"
            />
        </CountryListStyled>
    );
}

export default CountryList;