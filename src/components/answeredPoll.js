import react from "react";
import './answeredPoll.css';
import { useSelector } from "react-redux";

export default function AnsweredPoll (props) {
     const users = useSelector((state)=> state.usersReducer)
     const avatarLink = users[props.selectedUser].avatarURL
     const userName = users[props.selectedUser].name
     const answersCount = Object.keys(users[props.selectedUser].answers).length
     const questionCount = users[props.selectedUser].questions.length
     const score = answersCount + questionCount
    return (
        <div className='answeredPollContainer'>
            <div className='userAvatar'>
                <img src={avatarLink} alt='appLogo'/>
            </div>
            <div className='userDetails'>
                <h3 className='userName'>{userName}</h3>
                <div className='answeredQuestions'>Answered Questions: {answersCount}</div>
                <div className='createdQuestions'>Created Questions: {questionCount}</div>
            </div> 
            <div className='scoreContainer'>
                <div className='scoreTitle'>Score</div>
                <div className='scoreNumber'>{score}</div>
            </div>
        </div>
    )
}