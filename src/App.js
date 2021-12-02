import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import About from './Cpmponents/About';
import Contact from './Cpmponents/Contact';
import Home from './Cpmponents/Home';
import Skills from './Cpmponents/Skills';
import RecentWork from './Cpmponents/Work';


function App() {
  return (
    <div className="App">
     <Home/>
     <About/>
     <RecentWork/>
     <Skills/>
     <Contact/>
    </div>
  );
}

export default App;
