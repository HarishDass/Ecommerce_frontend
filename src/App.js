import { useState } from "react";
import Button from "./component/common/button"
import PasswordInput from './component/common/passwordInput'

function App() {
  const handleClick =()=>{
    console.log("gets called");
    
  }
  
  return (
     <div className="App">
      <Button title={"Click"} handleClick={() => handleClick()} type={"primary"}></Button>
       <h1> Input </h1>
        <PasswordInput  type={'password'}
         />
    </div>
    
     
      
    
  );
}

export default App;