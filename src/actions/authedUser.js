export const AUTHED_USER = 'AUTHED_USER';

export const REMOVE_AUTHED_USER = 'REMOVE_AUTHED_USER';


export function setAuthedUser (userID) {
    return {
        type: AUTHED_USER,
        userID
    };
}

export function removeAuthedUser () {
    return {
        type: REMOVE_AUTHED_USER,
    }
}