import { createQuestion } from "./createQuestion";
import { _saveQuestion } from "../_DATA";
import { addUserQ } from "./users";

export default function handleCreateQuestion (question) {
    return (dispatch, getState) => {

        return _saveQuestion(question)
            .then((formattedQuestion)=> {
                dispatch(createQuestion(formattedQuestion));
                dispatch(addUserQ(formattedQuestion))
            })
    }
}