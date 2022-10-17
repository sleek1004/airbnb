import './App.css';
import Airlogo from './images/Airlogo.png'
import airpics from './images/airpics.png'
import katie from './images/katie.png'


function Navbar(){
  return(
    <nav>
    <img src={Airlogo} alt="images/Airlogo.png" className='logo' />
    </nav>
  )
}
function Firstcontent(){
  return(
    <section className='hero'>
     <img src={airpics} alt="images/airpics.png" className='logo2' />
     <h1 className='hero-header'>Online Experiences</h1>
     <p className='hero-text'>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
    </section>
  )
}
 function Card(){
  return(
    <div>
      <img src={katie} alt="images/katie.png" />
    </div>
  )
 }


function App() {
  return (
   <div>
<Navbar/>
<Firstcontent />
<Card />
    </div>
  );
}

export default App;
