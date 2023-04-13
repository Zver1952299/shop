import React from 'react';

import styles from './ShowItem.module.css';

function ShowItem({item, onAdd, onShowItem}) {
    const {title, image, description, price} = item;

    console.log(image);

    return (
        <div className={styles.fullItem}>
            <div>
                <img 
                    className={styles.img} 
                    src={image} 
                    alt={title}
                    onClick={() => onShowItem(item)}
                ></img>
                <h2>{title}</h2>
                <p>{description}</p>
                <b>{price}$</b>
                <div 
                    className={styles.addToCart}
                    onClick={() => onAdd(item)}    
                >+</div>
            </div>
        </div>
    )
}

export default ShowItem;