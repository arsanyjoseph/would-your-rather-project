import { receiveUsers } from "./users";
import {_getUsers} from "../_DATA";

export function handleInitialData() {
	return (dispatch) => {
        return (_getUsers().then((i)=> {
            dispatch(receiveUsers(i));
        })) 
    }}