import {AUTHED_USER} from "../actions/authedUser"
import { REMOVE_AUTHED_USER } from "../actions/authedUser"

export default function authedUserReducer (state = null, action) {
    switch(action.type) {
        case AUTHED_USER : 
            return {
                authedUser : action.userID
        }

        case REMOVE_AUTHED_USER:
            return null

        default :
        return state     
    }
}