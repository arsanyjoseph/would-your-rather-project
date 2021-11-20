import react from "react";
import './poll.css'
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Poll (props) {
    const questions = useSelector((state)=> state.questionsReducer)
    const users = useSelector((state)=> state.usersReducer)
    const findAuthor = (questionId) => questions[questionId].author
    const pollAvatar = (author) => users[author].avatarURL
    const firstOption = (questionId) => questions[questionId].optionOne.text
    const qId = props.qId
    return (
        <div className='pollContainer'>
            <div className='pollTitle'>{findAuthor(qId)} Asks</div>
            <div className='pollBody'>
                <img src={pollAvatar(findAuthor(qId))} alt='avatarLogo'/>
                <span className='pollDetails'>
                    <span>Would You Rather:</span>
                    <span>{firstOption(qId)}....</span>
                    <Link to= {`/questions/${qId}`}><button>View</button></Link>
                </span>
            </div>
        </div>
    )
}

