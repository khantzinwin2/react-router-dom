import "./pages.css"
import { useRef } from "react";
import {  useNavigate } from "react-router-dom"


const Home = () => {
  const nav = useNavigate();
  const inputRef = useRef();

  const handleClick = () => {
    nav("/Services",{state:{text:inputRef.current.value}})
  }
  return (
    <div className="container">
      <h1>Home</h1>
      <input type="text" ref={inputRef}/>
      <button onClick={handleClick}>click</button>
    </div>
  )
}

export default Home