import React from 'react';

// import PropTypes from 'prop-types';

import styles from './Item.module.css';

function Item({item, onAdd}) {
    const {title, image, description, price} = item;
    return (
        <div className={styles.item}>
            <img 
                className={styles.img} 
                src={image} 
                alt={title}
            ></img>
            <h2>{title.length > 20 ? `${title.slice(0, 20)}...` : title}</h2>
            <p>{description.length > 100 ? `${description.slice(0, 100)}...` : description}</p>
            <b>{price}$</b>
            <div 
                className={styles.addToCart}
                onClick={() => onAdd(item)}    
            >+</div>
        </div>
    )
}

// Item.propTypes = {
//     item: PropTypes.object
// }

export default Item
