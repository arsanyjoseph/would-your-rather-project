import react, { useState } from "react";
import Header from "./header";
import NavBar from "./navBar";
import './newQuestion.css'
import handleCreateQuestion from "../actions/handleCreateQuestion"
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";


export default function NewQuestion () {
    const authedUser = useSelector((state)=> state.authedUserReducer.authedUser)
    const [optionOne, setOptionOne] = useState()
    const [optionTwo, setOptionTwo] = useState()

    const dispatch = useDispatch()

    const questionNew = {
        optionOneText: optionOne,
        optionTwoText: optionTwo,
        author: authedUser
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(handleCreateQuestion(questionNew)).then(()=>{
            setOptionOne('')
            setOptionTwo('')
            window.location = window.origin +'/home'
        })
        
    }

       return (
        <div className="supportNavBar">
            <Header/>
            <NavBar/>
            <div className='questionContainer'>
            <h3 className='title'>Create New Question</h3>
            <div className='questionTitle'>Would You Rather....</div>
            <form className='newQuestionForm'>
                <input type='text' onChange={(e)=> setOptionOne(e.target.value)}></input>
                <div>OR</div>
                <input type='text' onChange={(e)=> setOptionTwo(e.target.value)}></input> <br/>
                <Link to='./home'><button onClick={(e) => handleSubmit(e)}>Create</button></Link>
            </form>
        </div>   
        </div>
    )
}
