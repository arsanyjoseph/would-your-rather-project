import react , {useState, useEffect} from "react";
import NavBar from "./navBar";
import './pollToAnswer.css'
import Header from "./header";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import handleAnswerQuestion from "../actions/handleAnswerQuestion";

export default function PollToAnswer () {
    const [answer, setAnswer] = useState('')
    const {qId} = useParams()
    const dispatch = useDispatch()

    const questions = useSelector((state)=> state.questionsReducer)
    const users = useSelector((state)=> state.usersReducer)
    const authedUser = useSelector((state)=> state.authedUserReducer.authedUser)

    const findAuthor = (questionId) => questions[questionId].author
    const pollAvatar = (author) => users[author].avatarURL
    const firstOption = (questionId) => questions[questionId].optionOne.text
    const secondOption = (questionId) => questions[questionId].optionTwo.text

    const answers = Object.keys(users[authedUser].answers)

    const optionOneVote = questions[qId].optionOne.votes.length
    const optionTwoVote = questions[qId].optionTwo.votes.length 
    const totalVotes =  optionOneVote + optionTwoVote
    
    const handleSubmitAnswer = (e)=> {
        dispatch(handleAnswerQuestion(authedUser, qId, answer))
        e.preventDefault();
    }
    const selectedOption = users[authedUser].answers[qId]
    const [optionOneSelected, setOptionOneSelected] = useState(false)
    const [optionTwoSelected, setOptionTwoSelected] = useState(false)
    useEffect (()=> {
        if(selectedOption == 'optionOne') {
            setOptionOneSelected(true)
        } else if (selectedOption == 'optionTwo') {
            setOptionTwoSelected(true)
        }
    },[selectedOption])
    if (answers.includes(qId)){
        return (
        <div>
            <Header/>
            <NavBar/>
            <div className='answeredContainer'>
                <div className='authorTitle'>Asked by {findAuthor(qId)}</div> 
                <div className='answerDetails'>
                    <img src={pollAvatar(findAuthor(qId))} alt ='avatarLogo'/>
                    <div className='wouldYouRather'>Would You Rather:</div>
                    <div className='options'>
                        <div className='optionOne' style={ { backgroundColor: optionOneSelected ? 'red' : 'none' } }>
                            {firstOption(qId)}
                            <br/>
                            <p> {optionOneVote} out of {totalVotes} votes</p>
                            <p> {Math.round(optionOneVote/totalVotes * 100)}%    voted for this option</p>
                        </div>
                        <div className='optionTwo' style={ { backgroundColor: optionTwoSelected ? 'red' : 'none' } }>
                            {secondOption(qId)}
                            <br/>
                            <p>{optionTwoVote} out of {totalVotes} votes</p>
                            <p> {Math.round(optionTwoVote/totalVotes * 100)}%    voted for this option</p>
                        </div>  
                    </div>
                </div>
            </div>
        </div>
        )
    }
    return (
        <div>
            <Header/>
            <NavBar/>
            <div className='pollToAnswerContainer'>
            <div className='pollToAnswerTitle'> {findAuthor(qId)} Asks </div>
            <div className='pollToAnswerBody'>
                <img src={pollAvatar(findAuthor(qId))} alt='avatarLogo'/>
                <div className='pollToAnswerDetails'>
                    <div className='wouldYouRather'>Would You Rather:</div>
                    <form>
                        <input 
                            type='radio' 
                            id='optionOne'
                            name='Poll'
                            value={firstOption(qId)}
                            onChange={(e)=> setAnswer('optionOne')}/> 
                        <label htmlFor='optionOne'>{firstOption(qId)}</label><br/>
                        <input 
                            type='radio' 
                            id='optionTwo' 
                            name='Poll'
                            value={secondOption(qId)}
                            onChange={(e)=> setAnswer('optionTwo')}/> 
                        <label htmlFor='optionTwo'>{secondOption(qId)}</label><br/>
                        <button onClick={(e)=> handleSubmitAnswer(e)}>Submit</button>
                    </form>
                </div>
            </div>
            </div>
        </div>
    )
}