import react from "react";
import AnsweredPoll from "./answeredPoll";
import NavBar from "./navBar";
import Header from "./header";
import { useSelector } from "react-redux";

export default function LeaderDashboard () {
    const users = useSelector((state)=> state.usersReducer)
    const usersArray = Object.keys(users)
    const sortedUsers = usersArray.sort((a,b)=> (Object.keys(users[b].answers).length + users[b].questions.length) - (Object.keys(users[a].answers).length + users[a].questions.length))
    return (
            <div>
                <Header/>
                <NavBar/>
                {sortedUsers.map((user)=> <AnsweredPoll key={user} selectedUser={user}/>)}
            </div>
        )
    }