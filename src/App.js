import Background from './components/Background';
import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navigation from './components/Navigation';
import AboutMe from './components/AboutMe';
import FAQs from './components/FAQs';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Characters from './components/Characters';

function App() {
    return ( <div className='App'>
      <Router>
      <Navigation />
        <Switch>
          <Route exact path='/'>
            <Background />
          </Route>
          <Route path='/aboutme'>
            <AboutMe />
          </Route>
          <Route path='/faqs'>
            <FAQs />
          </Route>
          <Route path='/characters'>
            <Characters />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/sign-up'>
            <SignUp />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;