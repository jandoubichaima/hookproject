import Navv from "./Components/Navv";
import {Data} from"./Components/Data";
import Listcard from './Components/Listcard';
import { useState } from 'react';
import React from "react";
function App() {
  const[Movies,Setmovie]= useState ({Data})
  const[Search,Setsearch]= useState("")
  return (
    <div >
      <Navv Setsearch={Setsearch} Search="Search"/>
      <Listcard Movies={Movies}  Search={Search}/>
    </div>
  );
}

export default App;
