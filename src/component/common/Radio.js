import  { useState } from 'react';
import './Radio.css'

const Radio =({items, disable, anime, foods, games})=>{

  const [value, setValue] = useState(null);
  const [disabled, setDisabled] = useState(true)
  const [animes, setAnimes] = useState("Your Name");
  const [food, setFood] = useState("Briyani");
  const [game, setGame] = useState("Free Fire MAX");

  const toggleDisabled=()=>{
    setDisabled(!disabled)
  }

  return (
    <>
    <fieldset>
    <legend>Radio</legend>
    <div id='container'>
      <div>
      <p>Select One:  {value}</p>
        {items.map((item) => (
          <div key={item.value} style={{ marginBottom: '8px' }}>
            <input
              type="radio"
              name="options"
              value={item.value}
              id={item.value}
              checked={value===item.value}
              onChange={(e) => setValue(e.target.value)}
            />
            <label htmlFor={item.value} style={{marginLeft: '4px'}}> {item.label} </label>
          </div>
        ))} 
      </div>

{/* Disabled, when click the toggleDisabled you can able to chose */}
    <div>
      <p>There are {disabled} members in BTS</p>
      {disable.map((items)=>{ return(
        <div key={(items.value)}>
          <input
          type="radio"
          name='disabledRadio'
          value={items.value}
          disabled={disabled}
          defaultChecked={false}
          checked={disabled===items.value}
          onChange={(e)=>setDisabled(e.target.value)}
          />
          <label htmlFor={items.value} style={{ marginLeft: '4px' }}>{items.label}</label>
        </div>
      )})}
      <button type='primary' onClick={toggleDisabled}>Toggle Disabled</button>
    </div>
    
{/* default value selected */}
    <div>
      <p>What is your favorite Anime? <b>{animes}</b></p>
      <div className="radio-group button-style solid">
        {anime.map((option) => (
          <label
            key={option.value}
            className={`radio-button ${
              animes === option.value ? "selected" : ""
            }`}
          >
            <input
              type="radio"
              name="group2"
              value={option.value}
              checked={animes === option.value}
              onChange={() => setAnimes(option.value)}
            />
            {option.label}
          </label>
        ))}
        </div>
      </div>

{/* Button Styled Radio Buttons (Default Style) */}
      <div>
        <p>My favorite food is <b>{food}</b> </p>
        <div className="radio-group button-style">
          {foods.map((option) => (
            <label
            key={option.value}
            className={`radio-button ${
              food === option.value ? "selected" : ""
            }`}
            >
              <input
              type="radio"
              name="group3"
              value={option.value}
              checked={food === option.value}
              onChange={() => setFood(option.value)}
              />
            {option.label}
          </label>
        ))}
        </div>
      </div>


 {/* Disabled Last Option */}
  <div>
    <p>In my free time I like to play <b>{game}</b></p>
    <div className="radio-group button-style solid">
      {games.map((option, index) => (
        <label key={option.value} className={`radio-button ${
          game === option.value ? "selected" : ""
        }`}>
            <input
            type="radio"
            name="group2"
            value={option.value}
            disabled={index === games.length - 1} // Disable only the last option
            checked={game === option.value}
            onChange={() => setGame(option.value)}
            />
          {option.label}
        </label>
      ))}
      </div>
    </div>
    
    </div>
    </fieldset>
    </>
    )
}
export default Radio;