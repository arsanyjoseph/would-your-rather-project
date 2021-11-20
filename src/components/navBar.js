import react from "react";
import './navBar.css';
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { removeAuthedUser } from "../actions/authedUser";

export default function NavBar () {
    const authedUser = useSelector((state)=> state.authedUserReducer.authedUser)
    const users = useSelector((state)=> state.usersReducer)
    const avatarLink = users[authedUser].avatarURL
    const dispatch = useDispatch()
    const removeAuth = ()=> dispatch(removeAuthedUser())
        return (
            <div className='navBarContainer'>
                <Link to= '/home'><button className='NavBarBtn'>Home</button></Link>
                <Link to= '/add'><button className='NavBarBtn'>Create </button></Link>
                <Link to= '/leaderboard'><button className='NavBarBtn'>Leader Board</button></Link>
                <div className='welcome'>Welcome, {authedUser}</div>
                <img src={avatarLink} alt='appLogo'/>
                <Link to= '/'><button className='NavBarBtn' onClick={()=> removeAuth()}>Log Out</button></Link>
            </div>
        )
 }
