import {Navigate} from "react-router-dom";

const Admin = () => {

    if(localStorage.getItem("token")){
        return (
        <div className="container">I am admin</div>
        )
    }else{
        return <Navigate to={-1}/>
    }
}

export default Admin
