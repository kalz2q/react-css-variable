import React, { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    document.title = "react-css-variable"
  })
  // const SelectElement : Element | null = document.querySelector('.root');
  const SelectElement = document.querySelector(':root');
  if (SelectElement != null) {
    const SelectStyle = getComputedStyle(SelectElement);
    const StyleValue = String(SelectStyle.getPropertyValue('--foreground')).trim();
    console.log(StyleValue)
  }

  return (
    <div className="App">
      ぢぢｄ白地に黒文字
      <h1>タイトル</h1>
      <p>こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。</p>
      <div className="btn">OK</div>
    </div>
  );
}

export default App;
