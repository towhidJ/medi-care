import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import AuthProvider from "./contexts/AuthProvider";
import ServiceProvider from "./contexts/ServiceProvider";
import About from "./Pages/About/About";
import Appointment from "./Pages/Appointment/Appointment";
import Blog from "./Pages/Blog/Blog";
import Contact from "./Pages/Contact/Contact";
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Login/Login/Login";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";
import Register from "./Pages/Register/Register";
import ServiceDetails from "./Pages/Service/ServiceDetails/ServiceDetails";
import Services from "./Pages/Service/Services/Services";
import Footer from "./Pages/Shared/Footer/Footer";
import Header from "./Pages/Shared/Header/Header";

function App() {
    return (
        <div className="">
            <AuthProvider>
                <ServiceProvider>
                    <Router>
                        <Header></Header>
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
                            <Route path="/blog">
                                <Blog></Blog>
                            </Route>
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
                            <Route path="*">
                                <p>Not found</p>
                            </Route>
                        </Switch>
                        <Footer></Footer>
                    </Router>
                </ServiceProvider>
            </AuthProvider>
        </div>
    );
}

export default App;
