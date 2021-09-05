import './App.css';
import HeaderComponent from './components/header/header';
import InterestsComponent from './components/interests/interests';
import ExperienceComponent from './components/experience/experience';
import HomeComponent from './components/home/home';
import ContractProjectsComponent from './components/projects/contractprojects';
import SideProjectsComponent from './components/projects/sideprojects';
import SchoolProjectsComponent from './components/projects/schoolprojects';
import { Container } from 'react-bootstrap';
import {
  HashRouter as Router,
  Redirect,
  Switch,
  Route
} from "react-router-dom";


function App() {

  return (
    <div className="h-100">
      <Router className="h-100" basename="/">
        <HeaderComponent></HeaderComponent>
        <Container className="h-100 my-5">
          <Switch>
            <Route path="/" exact component={HomeComponent} />
            <Route path="/interests" component={InterestsComponent} />
            <Route path="/experience" component={ExperienceComponent} />
            <Route path="/projects/side" component={SideProjectsComponent} />
            <Route path="/projects/school" component={SchoolProjectsComponent} />
            <Route path="/projects/contracts" component={ContractProjectsComponent} />
            <Route path="*">
              <Redirect to="/" />
            </Route>
          </Switch>
        </Container>
	    </Router>
      <footer className="copyright-footer"><small>&copy; Copyright {(new Date()).getFullYear()}, Personal Page</small></footer> 
    </div>
  );
}

export default App;
