import { useEffect, useState } from 'react';

import { getApiResourse } from './services/network';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Items from './components/Items/Items';
import Categories from './components/Categories/Categories';
import ShowItem from './components/ShowItem/ShowItem';

function App() {
  const [basket, setBasket] = useState([]);
  const [items, setItems] = useState([]);
  const [currentItems, setCurrentItems] = useState([]);
  const [errorApi, setErrorApi] = useState([]);
  const [showFullItem, setShowFullItem] = useState(false);
  const [fullItem, setFullItem] = useState({});

  const getResourse = async (url) => {
    const res = await getApiResourse(url);

    if (res) {
        const itemList = res.map(({id, title, description, price, image, category}) => {
            return {
                id,
                title,
                description,
                price,
                image,
                category
            }
        })
    
        setItems(itemList);
        setErrorApi(false);
    } else {
        setErrorApi(true);
    }
  };

  useEffect(() => {setCurrentItems(items)}, [items])

  useEffect(() => {
      getResourse('https://fakestoreapi.com/products/')
  }, []);

  const addToBasket = (item) => {
    let isInArr = false;

    basket.forEach(el => {
      if (el.id === item.id) {
        isInArr = true;
      }
    });

    if (!isInArr) {
      if (basket.length !== 0) {
        setBasket([...basket, item]);
      } else {
        setBasket([item]);
      }
    } 
  }

  const deleteFormBasket = (id) => {
    setBasket(basket.filter(el => id !== el.id));
  }

  const сhoosingСategory = (categ) => {
    if (categ === 'all') {
      setCurrentItems(items);
      return;
    }
    setCurrentItems(items.filter(el => el.category === categ));
  }

  const onShowItem = (item) => {
    setFullItem(item);
    setShowFullItem(!showFullItem);
  }

  return (
    <div className='wrapper'>
      <Header 
        basket={basket}
        deleteFormBasket={deleteFormBasket}
      />
      <Categories сhoosingСategory={сhoosingСategory}/>
      <Items 
        items={currentItems}
        onAdd={addToBasket}
        onShowItem={onShowItem}
      />

      {showFullItem && <ShowItem 
                          item={fullItem}
                          onShowItem={onShowItem}
                          onAdd={addToBasket}/>}
      <Footer />
    </div>
  );
}

export default App;
