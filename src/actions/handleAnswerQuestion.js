import { _saveQuestionAnswer } from "../_DATA";
import { addAnswer } from "./answerQuestion";
import { addUserA } from "./users";

export default function handleAnswerQuestion (user, QID, ans) {

    return (dispatch) => {
        const answered = {
            authedUser: user,
            questionID: QID,
            answer: ans
        }
        return _saveQuestionAnswer(answered)
            .then(()=> {
                dispatch(addUserA(answered))

                dispatch(addAnswer(answered))
        })
    }
}