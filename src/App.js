import './App.css';
import HeaderComponent from './components/header/header';
import InterestsComponent from './components/interests/interests';
import ProjectsComponent from './components/projects/projects';
import ExperienceComponent from './components/experience/experience';
import { Container } from 'react-bootstrap';
import {
  // BrowserRouter as Router,
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const Home = () => <div>home</div>
const NoMatch = () => <div>404</div>

function App() {

  return (
    <div className="App">
      <HeaderComponent></HeaderComponent>
      <Container>
        <Router basename="/personalpage/">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/interests" component={InterestsComponent} />
            <Route path="/experience" component={ExperienceComponent} />
            <Route path="/projects/side" component={ProjectsComponent} />
            <Route path="/projects/school" component={ProjectsComponent} />
            <Route path="/projects/contracts" component={ProjectsComponent} />
            <Route path="*" component={NoMatch} />
          </Switch>
  	    </Router>
      </Container>
    </div>
  );
}

export default App;
