import { Navbar } from '@/components/componentsIndex';
import React from 'react'

export default function page({params}) {

    const {city} = params;
  return (

    <div>
      <div>
        <Navbar/>
      </div>
      
      <h1>{city}</h1>
      
      </div>
  )
}

