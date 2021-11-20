export const RECEIVE_USERS = 'RECEIVE_USERS';
export const ADD_QUESTION = 'ADD_QUESTION'
export const ADD_ANSWER = 'ADD_ANSWER'

export function receiveUsers (users) {
    return { type: RECEIVE_USERS, users }
}

export function addUserQ (question) {
    return { type: ADD_QUESTION, question }
}

export function addUserA ({authedUser, questionID, answer}) {
    return { type: ADD_ANSWER, answerFull: {
        questionID,
        answer,
        authedUser
    } }
}

