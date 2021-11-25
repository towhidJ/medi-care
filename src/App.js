import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import AuthProvider from "./contexts/AuthProvider";
import ServiceProvider from "./contexts/ServiceProvider";
import About from "./Pages/About/About";
import Appointment from "./Pages/Appointment/Appointment";
import Blog from "./Pages/Blog/Blog";
import Contact from "./Pages/Contact/Contact";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Login/Login/Login";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";
import NotFound from "./Pages/NotFound/NotFound";
import Register from "./Pages/Register/Register";
import ServiceDetails from "./Pages/Service/ServiceDetails/ServiceDetails";
import Services from "./Pages/Service/Services/Services";

function App() {
    return (
        <div className="">
            <AuthProvider>
                <ServiceProvider>
                    <Router>
                        <Switch>
                            <Route exact path="/">
                                <Home></Home>
                            </Route>
                            <Route path="/services">
                                <Services></Services>
                            </Route>

                            <Route path="/service-details/:id">
                                <ServiceDetails></ServiceDetails>
                            </Route>
                            <PrivateRoute path="/blog">
                                <Blog></Blog>
                            </PrivateRoute>
                            <Route path="/login">
                                <Login></Login>
                            </Route>
                            <Route path="/register">
                                <Register></Register>
                            </Route>
                            <Route path="/contact">
                                <Contact></Contact>
                            </Route>
                            <Route path="/about">
                                <About></About>
                            </Route>
                            <PrivateRoute path="/appointment">
                                <Appointment></Appointment>
                            </PrivateRoute>
                            <PrivateRoute path="/dashboard">
                                <Dashboard></Dashboard>
                            </PrivateRoute>
                            <Route path="*">
                                <NotFound></NotFound>
                            </Route>
                        </Switch>
                    </Router>
                </ServiceProvider>
            </AuthProvider>
        </div>
    );
}

export default App;
