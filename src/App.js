import {Switch, Route, Redirect} from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Header from './components/Header'
import StateSpecificDetails from './components/StateSpecificDetails'
import About from './components/About'
import NotFound from './components/NotFound'

// reload = () => {
//     this.getAllStatesData()
//   }

const App = () => (
  <>
    <Header activeTab="Home" />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/state/:stateCode" component={StateSpecificDetails} />
      <Route
        exact
        path="/about"
        component={About}
        // state={(activeTab = 'about')}
      />
      <Route path="/not-found" component={NotFound} />
      <Redirect to="/not-found" />
    </Switch>
  </>
)

export default App
