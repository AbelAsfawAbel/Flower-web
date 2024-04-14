import "./App.css";
// import { Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Services from "./Components/Services";
import Footer from "./Components/Footer";
function App() {
  return (
    <>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" Component={Home}></Route>
          <Route path="/about" Component={About}></Route>
          <Route path="/contact" Component={Contact}></Route>
          <Route path="/sevices" Component={Services}></Route>
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
