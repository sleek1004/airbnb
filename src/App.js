import './App.css';
import Navbar  from './components/Navbar';
import Hero from './components/Hero'
import Card from './components/Card'
import katie from './images/katie.png'
import data from './components/data'



 
function App() {
  const Cards = data.map(item=> {
    return(
      <Card
                key={item.id}
               item={item}
      
      />

    )
  
  })
  return (
   <div>  
<Navbar/>
<Hero />
<section className='cards-list'>
{Cards}

</section>


    </div>
  );
}

export default App;
