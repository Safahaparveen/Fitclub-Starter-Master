import './App.css';
import Testimonials from './assets/Testimonials/Testimonials';
import Footer from "./components/Footer/Footer";
import Hero from './components/Hero/Hero';
import Join from './components/Join/Join';
import Programs from './components/Programs/Programs';
import Reasons from './components/Reasons/Reasons';
import Plans from './components/Plans/Plans';
function App() {
  return (
    <div className="App">
          <Hero/>
          <Programs/>
          <Reasons/>
          <Plans/>
          <Testimonials/>
          <Join/>
          <Footer/>
    </div>
  );
}

export default App;
