import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  // useEffect(() => {
  //   document.title = "react-css-variable"
  // })
  // const SelectElement : Element | null = document.querySelector('.root');
  const SelectElement = document.querySelector(':root');
  if (SelectElement != null) {
    const SelectStyle = getComputedStyle(SelectElement);
    const StyleValue = String(SelectStyle.getPropertyValue('--foreground')).trim();
    console.log(StyleValue)
  }

  document.documentElement.style.setProperty('--foreground', 'blue');

  const [inputValue, setInputValue] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // alert("A name was submitted: " + inputValue);
    // document.title = "something";
    document.title = inputValue;
    console.log(inputValue);
    setInputValue("");
    e.preventDefault();
  };

  return (
    <div className="App">
      ぢぢｄ白地に黒文字
      <h1>タイトル</h1>
      <p>こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。</p>
      <div className="btn">OK</div>
      <div className="App">
        <form onSubmit={(e) => handleSubmit(e)}>
          <label>
            Name:
            <input
              type="text"
              value={inputValue}
              onChange={(e) => handleChange(e)}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
}

export default App;
