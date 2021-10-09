import Add from "pages/add";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Homepage from "./pages/index";
// import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={(props) => <Homepage {...props} />} />
        <Route exact path="/add" component={(props) => <Add {...props} />} />
      </Router>
    </div>
  );
}

export default App;
