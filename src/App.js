import React from "react";
import { BrowserRouter as Router,Switch,Route,} from "react-router-dom";
import './App.css';
import Contextprovider from "./ContextApi/Contextprovider";
import DeshbordHome from "./pages/Dashbord/Dashbordhome/DeshbordHome";
import Home from "./pages/Home/Home";
import Login from "./pages/LoginPage/Login/Login";
import Register from "./pages/LoginPage/Register/Register";
import Footer from "./pages/Shiers/Footer/Footer";
import Navigation from "./pages/Shiers/Navigation/Navigation";
import PrivetRoute from "./PrivetRoute/PrivetRoute";
import Explore from "./pages/ExplorePage/Explore";
import Singleproduct from "./pages/ExplorePage/SingleProduct/Singleproduct";
import Topnav from "./pages/Shiers/Navigation/Topnav";
import NotFound from "./pages/NotFound/NotFound";

function App() {
  
  return (
      <Contextprovider>
        <Router>
          <Topnav/>
        <Navigation/>
        <Switch>
          <Route exact path="/explore">
            <Explore/>
          </Route>
          <PrivetRoute exact path="/explore/:singleId">
            <Singleproduct></Singleproduct>
          </PrivetRoute>
          <PrivetRoute exact path="/dashbord">
            <DeshbordHome></DeshbordHome>
          </PrivetRoute>
            <Route exact path="/home">
             <Home/>
            </Route>
            <Route exact path="/login">
             <Login/>
            </Route>
            <Route exact path="/register">
             <Register/>
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Route  path="*">
              <NotFound/>
            </Route>
          </Switch>
          <Footer/>
        </Router>
      </Contextprovider>
  );
}

export default App;
