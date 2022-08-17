import {useEffect} from "react"
require('dotenv').config


function App() {
useEffect(()=>{
console.log("render")
},[])
  
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
