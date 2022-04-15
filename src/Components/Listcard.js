import React from 'react'
import Cards from './Cards'
function Listcard({Movies,Search}) {
  return (
    <div>
   { Movies.filter((el)=>el.title==Search).map((el)=> <Cards el={el} />)
   }
   </div>
  )
}

export default Listcard;