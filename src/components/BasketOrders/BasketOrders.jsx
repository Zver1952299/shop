import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';

import styles from './BasketOrders.module.css';

function BasketOrders({item, deleteFormBasket}) {

  const {title, image, price, id} = item;

  return (
    <div className={styles.item}>
        <img 
            className={styles.img} 
            src={image} 
            alt={title}
        />
        <div className={styles.info}>
            <h2 className={styles.text}>{title.length > 30 ? `${title.slice(0, 30)}...` : title}</h2>
            <b>{price}$</b>
        </div>
        <FaTrashAlt 
          className={styles.trash}
          onClick={() => deleteFormBasket(id)}
        />
    </div>
  )
}

export default BasketOrders