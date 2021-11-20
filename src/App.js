import React from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import LeaderDashboard from "./components/leaderBoard"; 
import NewQuestion from "./components/newQuestion";
import Home from './components/home'
import SignIn from "./components/sign-in";
import { connect } from "react-redux";
import {handleInitialQuestions} from "./actions/handleInitialQuestions"
import PollToAnswer from "./components/pollToAnswer";
import { handleInitialData } from "./actions/handleInitialData";
import NoMatch from "./components/nomatch";
import {Switch} from 'react-router-dom'

class App extends React.Component {
  state = {}
  initiateData = () => {
    this.props.dispatch(handleInitialData())
    this.props.dispatch(handleInitialQuestions())
}
  componentDidMount(){
    this.initiateData()
  }

  render () {
    if(!this.props.authedUser) {
      return <SignIn/>
    }
    return (
      <div className='AppContainer'>
        <Router>
          <Switch>
            <Route exact path = '/'><SignIn/></Route>
            <Route path = '/home'> <Home/></Route>
            <Route path = '/add'><NewQuestion/></Route>
            <Route path = '/leaderboard'><LeaderDashboard/></Route>
            <Route exact path='/questions/undefined' component={NoMatch}/>
            <Route path = "/questions/:qId"><PollToAnswer/></Route>
          </Switch>
        </Router>
      </div> 
    )}
}

const mapStateToProps = (state) => {
  if (state.authedUserReducer == null) {
  return {
      questions: state.questionsReducer,
  }} else {
    return ({
      authedUser: state.authedUserReducer.authedUser,
      questions: state.questionsReducer
    })
  }
}
export default connect (mapStateToProps)(App)



/*      
*/