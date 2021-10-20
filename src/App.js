import Navbar from "./components/navbar/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/home/homepage/Home";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Switch>
         <Home />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
