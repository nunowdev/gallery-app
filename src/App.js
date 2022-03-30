import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";

function App() {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/Search" exact component={Search} />
    </Router>
  );
}

export default App;
