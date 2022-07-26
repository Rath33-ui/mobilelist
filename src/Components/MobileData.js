import React from 'react'
import MobileList from './MobileList'
import { useEffect,useState } from 'react';

function MobileData() {

    const [products,setProducts]=useState([])

    const updateData= async()=>{
        let url="https://s3.amazonaws.com/open-to-cors/assignment.json";
        let data= await fetch(url);
        let parsedData= await data.json();
        let arr = Object.values(parsedData.products)
        arr.sort((a,b) => Number(a.popularity) < Number(b.popularity) ? 1 : -1)
        setProducts(arr);

    }

    useEffect(()=>{
        updateData();
    },[])

  return (
    <>
    <div className="container ">
     {products.map((item,index)=>{
       return <div key={index} >{<MobileList title={item.title} price={item.price}/>}</div>
     })}
    </div>
    </>
  )
}

export default MobileData
