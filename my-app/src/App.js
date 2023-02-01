// import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";

const emojiDict = {
  "😊": "Smiling",
  "😢": "Crying",
  "🌅": "Sunrise",
  "👍": "Thumbs-up",
  "🐶": "Dog",
  "🙌" : "Raising hands" 
}

const emojiList = Object.keys(emojiDict);

function App() {
  // const [likeCounter, setLikeCounter] = useState(0);

  // function likeHandler() {
  //   var newlikeCounter = likeCounter + 1;
  //   setLikeCounter(newlikeCounter);
  // }
  const [emojiInput, setEmojiInput] = useState("");
  function onChangeHandler(event) {
    var input = event.target.value;
    

    if(input in emojiDict){
      setEmojiInput(emojiDict[input]);
    }else{
      setEmojiInput("Emoji is not present in our database")
    }

    // console.log("Changed " + event.target.value);
  }

  function emojiDetector(emoji){
    console.log(emoji);
    setEmojiInput(emojiDict[emoji]);
  }

  return (
    <div className="App">
      {/* <h1>{likeCounter}</h1> */}
      {/* <button onClick={likeHandler}>Like</button> */}
      <h1>Emoji Interpreter 😎</h1>
      <input className="input" onChange={onChangeHandler} ></input> 
      {emojiList.map((emoji)=> {
        return (
          <span key={emoji} style={{fontSize:"4rem",cursor:"pointer"}} onClick={()=>emojiDetector(emoji)}>
            {emoji}
          </span>
        )
      })}
      <h3>{emojiInput}</h3>
    </div>
  );
}

export default App;
