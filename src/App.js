import { useState } from "react";
import Button from "./component/common/button";
import Radio from "./component/common/Radio";

function App() {
  const handleClick = () => {
    console.log("gets called");
  };

  const items = [
    { value: 'Juice', label: 'Juice' },
    { value: 'Cake', label: 'Cake' },
    { value: 'Coffee', label: 'Coffee' },
  ];

  const disable=[
    {value:'3', label: 3},
    {value:'5', label: 5},
    {value:'7', label: 7},
  ]

  const anime= [
    {label: 'Naruto',  value: 'Naruto'},
    {label: 'Your Name',   value: 'Your Name'},
    {label: 'Jujutsu Kaisen', value: 'Jujutsu Kaisen'}
  ];

  const foods= [
    {label: 'Briyani',  value: 'Briyani'},
    {label: 'Chicken Fried Rice',   value: 'Chicken Fried Rice'},
    {label: 'Parotta', value: 'Parotta'}
  ];

  const games= [
    {label: 'Subway Sufer',  value: 'Subway Sufer'},
    {label: 'Free Fire MAX',   value: 'Free Fire MAX'},
    {label: 'Talking Tom', value: 'Talkin Tom', disabled: true}
  ];

  return (
    <div className="App">
      <Button title={"Click"} handleClick={() => handleClick()} type={"primary"}/>
      <Radio items={items} disable={disable} anime={anime} foods={foods} games={games}/>
    </div>
  );
}

export default App;