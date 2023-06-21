import "./pages.css"
import { useParams } from "react-router-dom"


const Contact = () => {
  const {name} = useParams();
  return (
    <div className="container">
      {name}
    </div>
  )
}

export default Contact