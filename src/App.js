import './App.css';
import jsonData from "./emoji.json";
import { useState } from "react";
import copy from "copy-to-clipboard";

function App() {
  const values = Object.values(jsonData);

  const [text, setText] = useState("");
  const [output, setOutput] = useState('');

  const handleItemClick = (item) => {
    setText(text + item);
  };

  const handleTextareaChange = (event) => {
    setText(event.target.value);
  };

  const handleButtonClick = () => {
    const textareaValue = text;
    setOutput(textareaValue);
  };
  const handleCopyToClipboard = () =>{
    copy(text);
    alert(`Copied to clipboard: ${text}`);
  }

  return (
    <>
      <p id="emoji">
        {values.map((item, index) => (
          <span key={index} onClick={() => handleItemClick(item)}>
            {item + " "}
          </span>
        ))}
      </p>
      <div id="output">
      <textarea
        rows="3"
        cols="80"
        placeholder="Enter your Text Here.........."
        value={text}
        onChange={handleTextareaChange}
      ></textarea>
      <button onClick={handleButtonClick} className='btn'>Output</button>
        <h2>Output:</h2>
        <p>{output}</p>
        <button onClick={handleCopyToClipboard} className='btn'>Copy to Clipboard</button>
      </div>
    </>
  );
}

export default App;
