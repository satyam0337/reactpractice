import logo from "./logo.svg";
import "./App.css";
import Post from "./crud/Post";
import Get from "./crud/Get";
import Allroutes from "./crud/Allroutes";
import Counter from "./smallApp/Counter";
import Navbar from "./crud/Navbar";
import ReactGA from "react-ga4";
function App() {
  const TRACTING_ID = 'G-GNKR5KPJHR'
  ReactGA.initialize(TRACTING_ID);
  ReactGA.pageview(document.location.pathname)
  return (
    <div className="App">
      <Navbar />
      <Allroutes />
    </div>
  );
}

export default App;
