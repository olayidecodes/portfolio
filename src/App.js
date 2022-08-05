import './App.scss';
import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className="App">
      
      <Navbar />
      <Banner />
      <About />
      <Projects />
      <Contact />

    </div>
  );
}

export default App;
