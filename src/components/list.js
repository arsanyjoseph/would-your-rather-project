import react from "react";
import './list.css'
import Poll from "./poll";

export default function List (props) {
    return (
        <div className='listContainer'>
            <ul>
                {props.qArray.map((qKey)=> <li key={qKey}><Poll key= {qKey} qId={qKey}/></li>)}
            </ul>
        </div>
    )
}
