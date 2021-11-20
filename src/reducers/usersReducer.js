import { ADD_ANSWER, RECEIVE_USERS,ADD_QUESTION } from "../actions/users";
export default function usersReducer (state ={}, action) {
    switch(action.type) {
        case RECEIVE_USERS : 
            return {
                ...state,
                 ...action.users
        }

        case ADD_QUESTION:
            return {
                ...state,
                 [action.question.author]: {
                     ...state[action.question.author],
                           questions: state[action.question.author].questions.concat([action.question.id])
        }
            }

        case ADD_ANSWER:
            const {authedUser, questionID, answer} = action.answerFull
            return {
				...state,
                        [authedUser]: {
					...state[authedUser],
                            answers: {
						...state[authedUser].answers,
						[questionID]: answer
					}
				}
			};
        default :
        return state     
    }
}