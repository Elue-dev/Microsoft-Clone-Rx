import Navbar from "./components/navbar/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/home/homepage/Home";
import Footer from "./components/footer/Footer";
import Microsoft365 from "./components/added pages/microsoft 365/Microsoft365";
import MicrosoftEdge from "./components/added pages/microsoft edge/MicrosoftEdge";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Switch>
         <Route exact path='/' component={Home} />
         <Route path='/microsoft365' component={Microsoft365} />
         <Route path='/microsoft-edge' component={MicrosoftEdge} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
