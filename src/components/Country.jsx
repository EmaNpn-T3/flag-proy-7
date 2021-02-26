import React from 'react';
import styled from "styled-components";

const CountryStyled = styled.div`
    width: 275px;
    border: 1px solid red;
    text-align: left;
    img{
        max-width: 100%,
        heigth: 160px;
        object-fit: cover;
    } 

`

function Country({
    flag,
    name,
    population,
    region,
    capital,

})
     {
    return(
        <CountryStyled>
            <img src={flag} alt="" />
            <h2>{name}</h2>
          <div className="details">
            <p><strong>Population:</strong>{population}</p>
            <p><strong>Region:</strong>{region}</p>
            <p><strong>Capital:</strong>{capital}</p>
          </div>
            
        </CountryStyled>
    )
}

export default Country;
