export const ANSWER_QUESTION = 'ANSWER_QUESTION'

export function addAnswer ({authedUser, questionID, answer}) {
    return {
        type: ANSWER_QUESTION,
        answerFull: {
            questionID,
            answer,
            authedUser
        }
    }
}