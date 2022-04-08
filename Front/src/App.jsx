import Login from './components/authentication/login/LogIn';
import Register from './components/authentication/register/Register';
import AddAppointment from './components/appointment/addAppointments/Add';
import ReadAppointment from './components/appointment/readAppointments/Read';
import './components/SASS/Form.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const App = () => {
    return (
        
        <Router>
            <Switch>
                <Route exact path="/">
                    <Login />
                </Route>
                <Route path="/register">
                    <Register />
                </Route>
                <Route path="/add">
                    <AddAppointment />
                </Route>
                <Route path="/read">
                    <ReadAppointment />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;