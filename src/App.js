import './App.css';
import Airlogo from './images/Airlogo.png'
import airpics from './images/airpics.png'


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
     <h1>Online Experiences</h1>
     <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
    </section>
  )
}


function App() {
  return (
   <div>
<Navbar/>
<Firstcontent />
    </div>
  );
}

export default App;
