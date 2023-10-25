import logo from "./logo.svg";
import "./App.css";
import Post from "./crud/Post";
import Get from "./crud/Get";
import Allroutes from "./crud/Allroutes";
import Counter from "./smallApp/Counter";
import Navbar from "./crud/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Allroutes />
    </div>
  );
}

export default App;
