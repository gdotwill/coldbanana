import Nav from './components/Header/Nav';
import Landing from './components/Header/Landing';
import About from './components/About';
import Locations from './components/Locations';
import Map from './components/Map';
import Footer from './components/Footer';

import './App.css';

function App() {
  return (
    <div className='wrapper'>
      <Nav/> 
      <Landing /> 
      <About /> 
      <Map /> 
      <Locations />
      <Footer />
    </div>
  );
}

export default App;
