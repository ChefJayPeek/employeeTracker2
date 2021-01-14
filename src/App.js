import { BrowserRouter as Router, Route } from 'react-router-dom';
import './css/App.css';

// components

import NavBar from "./components/navbar/NavBar";
import Jumbotron from "./components/jumbotron/Jumbotron";
import MainPage from "./containers/MainPage";


// app
function App() {
  return (
    <Router basename={process.env.PUBLIC_URL + "/"}>
      <NavBar />
      <Jumbotron />
      <Route exact path="/" component={MainPage} />
    </Router>
  );
}

// export
export default App;
