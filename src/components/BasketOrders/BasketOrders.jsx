import React from 'react';

import styles from './BasketOrders.module.css';

function BasketOrders({item}) {
  const {title, image, price} = item;

  return (
    <div className={styles.item}>
        <img 
            className={styles.img} 
            src={image} 
            alt={title}
        ></img>
        <h2 className={styles.text}>{title.length > 20 ? `${title.slice(0, 20)}...` : title}</h2>
        <b>{price}$</b>
    </div>
  )
}

export default BasketOrders