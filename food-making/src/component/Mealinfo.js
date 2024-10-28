/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const Mealinfo = () => {
    const {mealid} = useParams();
    const [info,setInfo] = useState()
    console.log(mealid);

    const getInfo = async()=>{
        const get = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`);
        const jsonData = await get.json();
        console.log(jsonData);
        setInfo(jsonData.meals[0])
    }
    if(info!==""){
        getInfo()
    }

  return (
   <>
     {
        !info ? "Data Not Found":
    <div className='mealInfo'>
    <img src={info.strMealThumb} />
    <div className='info'>
        <h1>Recipe Details</h1>
        <button>{info.strMeal}</button>
        <h3>Intruction's</h3>
        <p>{info.strInstructions}</p>
    </div> 
    </div>
    }
   </>
  )
}

export default Mealinfo
