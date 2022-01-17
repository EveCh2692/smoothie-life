
import './App.css';
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { SmoothieForm } from './smoothies/SmoothieForm';
import { SmoothieCard } from './smoothies/SmoothieCard';
import { SmoothiesContainer } from '../containers/SmoothiesContainer';
import { Navbar } from './navigation/Navbar';
import { Header} from './navigation/Header';
import {Footer} from './navigation/Footer';
import { Home } from './Home';
import { About } from './About';




function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Header slogan ="Stay Healthy" 
                storeName="Smoothie Life"/>
        <Switch>

          <Route path="/smoothies/new">
            <SmoothieForm/>
            </Route>

            <Route path="/smoothies/:id">
            <SmoothieCard/>
            </Route>

            <Route path="/smoothies">
            <SmoothiesContainer/>
            </Route>

            
            <Route path="/about">
            <About/>
            </Route>

            <Route path="/">
            <Home/>
            </Route>

        </Switch>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
