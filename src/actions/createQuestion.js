export const CREATE_QUESTION = 'CREATE_QUESTION'

export function createQuestion (question) {
    return {
        type: CREATE_QUESTION,
        question
    }
}
