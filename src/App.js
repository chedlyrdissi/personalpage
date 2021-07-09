import './App.css';
import HeaderComponent from './components/header/header';
import InterestsComponent from './components/interests/interests';
import ProjectsComponent from './components/projects/projects';
import ExperienceComponent from './components/experience/experience';
import HomeComponent from './components/home/home';
import { Container } from 'react-bootstrap';
import {
  HashRouter as Router,
  Redirect,
  Switch,
  Route
} from "react-router-dom";


function App() {

  return (
    <div className="App">
      <Router basename="/">
        <HeaderComponent></HeaderComponent>
        <Container>
          <Switch>
            <Route path="/" exact component={HomeComponent} />
            <Route path="/interests" component={InterestsComponent} />
            <Route path="/experience" component={ExperienceComponent} />
            <Route path="/projects/side" component={ProjectsComponent} />
            <Route path="/projects/school" component={ProjectsComponent} />
            <Route path="/projects/contracts" component={ProjectsComponent} />
            <Route path="*">
              <Redirect to="/" />
            </Route>
          </Switch>
        </Container>
	    </Router>
    </div>
  );
}

export default App;
