import React, { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    document.title = "react-css-variable"
  })
  const SelectElement = document.querySelector('.root');
  const temp: Element;
  switch SelectElement {
    case null:
      
  }
  const SelectStyle = getComputedStyle(SelectElement);
  const StyleValue = String(SelectStyle.getPropertyValue('--my-hue')).trim();
  return (
    <div className="App">
      <h1>タイトル</h1>
      <p>こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。</p>
      <div className="btn">OK</div>
    </div>
  );
}

export default App;
