import { RECEIVE_QUESTIONS } from "./questions";
import { receiveQuestions } from "./questions";
import { _getQuestions} from "../_DATA";

export function handleInitialQuestions() {
	return (dispatch) => {
        return (_getQuestions().then((i)=> {
            dispatch(receiveQuestions(i));
        })) 
    }}