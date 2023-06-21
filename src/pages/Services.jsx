import { useNavigate, useLocation } from "react-router-dom"
import "./pages.css"

const Services = () => {
  const nav = useNavigate();
  const location = useLocation();
  const handleClick = () => {
    nav("/")
  }

  return (
    <div className="container">
    <h1>Services</h1>
    <p>{location.state?.text}</p>
    <button onClick={handleClick}>Back</button>
    </div>
  )
}

export default Services