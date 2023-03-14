import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Projects from "./Pages/Projects";


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={ <Home/> }  />
        <Route path="/contact"  element={ <Contact/> }/>
        <Route path="/projects"  element={ <Projects/> }/>
      </Routes>
    </div>
  );
}

export default App;
