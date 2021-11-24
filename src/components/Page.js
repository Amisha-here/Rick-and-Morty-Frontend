import React, { useState, useEffect } from 'react'
import CardGrid from './Cards/CardGrid';

function Page() {

  const [items,setItems]=useState([]);

  useEffect(()=>{
    const fetchItems = async () => {
      let res1 = await fetch('https://rickandmortyapi.com/api/character')
      let data1 = await res1.json()

      let res2 = await fetch('https://rickandmortyapi.com/api/character?page=2')
      let data2 = await res2.json()

      let res3 = await fetch('https://rickandmortyapi.com/api/character?page=3')
      let data3 = await res3.json()

      const data=data1.results.concat(data2.results,data3.results.splice(10,20));
      setItems(data)
    }

    fetchItems()
  },[])

  return (
    <div className="container">
      <CardGrid items={items} />
    </div>
  )
}

export default Page