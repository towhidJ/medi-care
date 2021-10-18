import logo from './logo.svg';
import './App.css';
import AuthProvider from "./contexts/AuthProvider";
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import Login from "./Pages/Login/Login/Login";
import Header from "./Pages/Shared/Header/Header";
import Register from "./Pages/Register/Register";

function App() {
  return (
    <div className="">
        <AuthProvider>
            <Router>
                <Header></Header>
                <Switch>
                    <Route exact path="/">
                        <Login></Login>
                    </Route>
                    <Route path="/login">
                        <Login></Login>
                    </Route>
                    <Route path="/register">
                        <Register></Register>
                    </Route>
                    <Route path="*">
                        <p>Not found</p>
                    </Route>
                </Switch>
            </Router>
        </AuthProvider>
    </div>
  );
}

export default App;
