import { RECEIVE_QUESTIONS } from "../actions/questions"
import { CREATE_QUESTION } from "../actions/createQuestion"
import { ANSWER_QUESTION } from "../actions/answerQuestion"

export default function questionsReducer (state ={}, action) {
    switch(action.type) {
        case RECEIVE_QUESTIONS : 
            return {
                ...state,
                ...action.questions
        };
        case CREATE_QUESTION :
            return {
                ...state,
                [action.question.id] : action.question,
            };
        case ANSWER_QUESTION :
            const { authedUser, questionID, answer } = action.answerFull;
            return {
                ...state,
                        [questionID]: {
                                    ...state[questionID],
                                    [answer]: {
                                        ...state[questionID][answer],
                                        votes: state[questionID][answer].votes.concat([authedUser])
                            }}
           
    }
    default : return state
}}