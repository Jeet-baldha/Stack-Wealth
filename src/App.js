import './CSS/style.css';
import  Home  from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Calculator from './components/SipCalculator/Calculator';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
