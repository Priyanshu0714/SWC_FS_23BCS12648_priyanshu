import { useState } from "react";

export default function App() {
  const [redo, setRedo] = useState();
  const [undo, setUndo] = useState();
  const [txt, setTxt]= useState();
 
  function handleInput() {
    const input=document.getElementById("inputelement").value
    setUndo(txt);
    setTxt(input);
  }

  function handleUndo() {
    setRedo(txt);
    setTxt(undo);
  }

  function handleRedo() {
    setUndo(txt);
    setTxt(redo);
  }

  return (
    <div>
      <div>
        <input id="inputelement" type="text" />
        <button id="inputSubmit" onClick={handleInput}>submit</button>
      </div>
      <h1 id="header">{txt}</h1>
      <div>
        <button onClick={handleUndo}>
          Undo
        </button>
        <button onClick={handleRedo}>
          Redo
        </button>
      </div>
    </div>
  );
}