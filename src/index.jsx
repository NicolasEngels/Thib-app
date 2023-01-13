import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./home.jsx";
import Lobby from "./lobby.jsx";


const App = () => {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/lobby" element={<Lobby />}></Route>
          <Route path="*" element={<Home />}></Route>
        </Routes>
      </Router>
    );
};



ReactDOM.render(<App />, document.getElementById("root"));




