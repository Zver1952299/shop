import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Items from './components/Items/Items';
import { useEffect, useState } from 'react';

function App() {
  const [basket, setBasket] = useState([]);

  const addToBasket = (item) => {
    if (basket.length !== 0) {
      setBasket([...basket, item]);
    } else {
      setBasket([item]);
    } 
  }

  useEffect(() => {console.log(basket)}, [basket]);

  return (
    <div className='wrapper'>
      <Header basket={basket}/>
      <Items onAdd={addToBasket}/>
      <Footer />
    </div>
  );
}

export default App;
