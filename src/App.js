import React from "react";
import Button from "./component/common/button";
import Radio from "./component/common/Radio";

function App() {
  const handleClick = () => {
    console.log("gets called");
  };

  const labels= [
    {label: 'Naruto',  value: 'Naruto'},
    {label: 'Your Name',   value: 'Your Name'},
    {label: 'Jujutsu Kaisen', value: 'Jujutsu Kaisen'}
  ]

  return (
    <div className="App">
      <Button title={"Click"} handleClick={() => handleClick()} type={"primary"}/>
      <Radio type={"primary"} labels={labels} />
    </div>
  );
}

export default App;