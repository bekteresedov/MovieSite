import { useState } from "react";
import "./App.css";
import SearchMovie from "./searchMovie";

function App() {
  const[typing,setTyping]=useState('');
  return (
    <div>
      <SearchMovie />
    </div>
  );
}

export default App;
