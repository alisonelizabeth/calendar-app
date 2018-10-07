import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'
import PageContainer from './containers/Page'
import moment from 'moment'

library.add(faCaretLeft, faCaretRight)

const store = createStore(rootReducer, applyMiddleware(thunk))

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
              <Route exact path='/calendar/:year/:month' component={PageContainer} />
              <Route render={() => <Redirect to={`/calendar/${moment().year()}/${moment().month()}`} />}/>
          </Switch>
        </Router>
      </Provider>
    )
  }
}

export default App
