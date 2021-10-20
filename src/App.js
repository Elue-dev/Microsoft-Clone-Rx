import Navbar from "./components/navbar/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Showcase from "./components/home/pages/showcase/Showcase";
import Offers from "./components/home/pages/offers/Offers";
import offersData from "./components/home/pages/offers/offersData";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        {/* <Switch> */}
          <Showcase />
          <Offers data= {offersData} />
        {/* </Switch> */}
      </div>
    </Router>
  );
}

export default App;
