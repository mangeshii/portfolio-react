import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import About from './Cpmponents/About';
import Home from './Cpmponents/Home';
import Skills from './Cpmponents/Skills';


function App() {
  return (
    <div className="App">
     <Home/>
     <About/>
     <Skills/>
    </div>
  );
}

export default App;
