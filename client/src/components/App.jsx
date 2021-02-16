import { Container } from "@material-ui/core";
import NavBar from './Navbar/Navbar'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './Home/Home'
import Auth from './Auth/Auth'

function App() {

  return (
    <BrowserRouter>
      <Container maxWidth="lg">
        <NavBar/>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/auth' exact component={Auth}/>
        </Switch>
      </Container>
    </BrowserRouter>
  );
}

export default App;
