import React from "react";
import './sign-in.css';
import {setAuthedUser} from "../actions/authedUser";
import { useSelector, useDispatch } from "react-redux";
import Header from "./header";
import { Link } from "react-router-dom";


export default function SignIn () {
    const dispatch = useDispatch();

    const users = useSelector(state=> state.usersReducer)
    
    const handleSelect = (e) => {
        const authedId = e.target.value
        dispatch(setAuthedUser(authedId))
    }

    return (
        <div className='supportHeader'>
            <Header/>
        <div className= "signInContainer">
            <div className="signInTitle">
                <h4 className="welcomeSignIn">Welcome to Would You Rather WebApp</h4>
                <h4 className= "signIn">Please Sign In</h4>
            </div>
            <img src='https://cdn.pixabay.com/photo/2015/10/31/12/00/question-1015308_960_720.jpg' alt='appLogo'/>
            <form>
                <label className="formLabel">Select Your Name:</label>
                <select className='selectBox' defaultValue={-1} onChange={handleSelect}>
                <option value="-1" disabled>Select user...</option>
                    {Object.keys(users).map((i)=> <option value ={i.id} key={i}>{i}</option>)}
                </select>
                <Link to="/home"><button className='signInBtn'>Sign In</button></Link>
            </form>
        </div>
        </div>
    );
    }

