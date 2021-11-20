import react, {useState} from "react";
import List from "./list";
import './home.css';
import Header from "./header";
import NavBar from "./navBar";
import { useSelector } from "react-redux";


export default function Home () {
    const authedUser = useSelector((state)=> state.authedUserReducer.authedUser)
    const users = useSelector(state=> state.usersReducer)
    const questions = useSelector((state)=> state.questionsReducer)
    const questionsArray = Object.keys(questions)
    const answeredArray = Object.keys(users[authedUser].answers)
    const unAnsweredArray = questionsArray.filter(function(i) {
        return this.indexOf(i) < 0;
    },
    answeredArray)

    const SortedAnswered = answeredArray.sort((a,b)=> (questions[b].timestamp) - questions[a].timestamp)
    const SortedUnAnswered = unAnsweredArray.sort((a,b)=> (questions[b].timestamp) - questions[a].timestamp)
    const [listArray, setListArray] = useState(SortedUnAnswered);

    return (
        <div>
            <Header/>
            <NavBar/>
            <div className='homeContainer'>
                
                <div className='homeTitle'>
                    <button onClick={()=> setListArray(SortedUnAnswered)}>UnAnswered</button>
                    <button onClick={()=> setListArray(SortedAnswered)}>Answered</button>
                </div>
                <List qArray ={listArray}/>
            </div>
        </div>
    )
}