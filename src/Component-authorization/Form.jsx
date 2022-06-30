import React,{useState} from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import NavBar from "./NavBar";
const Form = () => {
    const navigate = useNavigate()
    const [state,setState] = useState({
        email:'',
        password:'',
        token:Math.round(Math.random()*10)
    })


    const changeHandler = (e) => {
        setState({...state,[e.target.name] : e.target.value})
        console.log(state);
    }

    const submitHandler = (e) => {
        // e.preventDefault;
        if(state.email && state.password){
            localStorage.setItem('data',JSON.stringify(state))

        }else{
            alert('fill all inputs')
        }
        // navigate("/Greet");

    }
    
  return (
    <>
    <NavBar/>

        <form onSubmit={submitHandler}>
            <div className="row mb-3">
                <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                <div className="col-sm-10">
                <input type="email" className="form-control" id="inputEmail3" name="email" onChange={changeHandler}/>
                </div>
            </div>
            <div className="row mb-3">
                <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                <div className="col-sm-10">
                <input type="password" className="form-control" id="inputPassword3" name="password" onChange={changeHandler}/>
                </div>
            </div>

            <button type="submit" className="btn btn-primary">Sign in</button>
        </form>
    </>
  );
};

export default Form;
