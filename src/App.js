import Button from "./component/common/button";

function App() {
  const handleClick = () => {
    console.log("gets called");
  };
  return (
    <div className="App">
      <Button title={"Click"} handleClick={() => handleClick()} type={"primary"}/>
    </div>
  );
}

export default App;
