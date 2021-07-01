import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './pages/about/about';
import Contact from './pages/contact/contact';
import Main from "./pages/main";
import Portafolio from './pages/portafolio/portaflio';
import Resume from './pages/resume/resume';

function App() {
  return (
    <Fragment>
   
        <Router>
          <Switch>
            <Route exact path='/' component={Main} />
            <Route exact path='/resume' component={Resume} />
            <Route exact path='/portafolio' component={Portafolio} />
            <Route exact path='/contact' component={Contact} />
            <Route exact path='/about' component={About} />
          </Switch>
        </Router>
   
    </Fragment>
  );
}

export default App;
