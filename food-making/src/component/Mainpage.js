import React, { useState } from 'react'
import Mealcard from './Mealcard'

const Mainpage = () => {
    const [data,setData] = useState()
    const [search,setSearch] = useState()
    const [message,setMessage] = useState()

    const handleInput = (event)=>{
        setSearch(event.target.value)
    }

    const myFun = async()=>{
        if(search === ""){
            setMessage("Please Enter Something")
        }else{
        const get = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
        const jsonData = await get.json()
        // console.log(jsonData)
        setData(jsonData.meals)
        }
    }
    // console.log(data)
  return (
    <>
    <h1 className='head'>Food Recipe App</h1>
    <div className='container'>
        <div className='searchBar'>
            <input type='text' placeholder='Enter Dishe' onChange={handleInput} />
            <button onClick={myFun}>Search</button>
        </div>
        <h4>{message}</h4>
        <div>
            <Mealcard detail={data}/>
        </div>
    </div>
</>
  )
}

export default Mainpage;
