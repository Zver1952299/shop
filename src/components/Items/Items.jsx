import React from 'react';

import Item from '../Item/Item';

import PropTypes from 'prop-types';
import styles from './Items.module.css';

function Items({items, onAdd, onShowItem}) {

    return (
        <main className={styles.main}>
            {items.map(item => (
                <Item 
                    key={item.id} 
                    item={item}
                    onAdd={onAdd}
                    onShowItem={onShowItem}
                />
            ))}
        </main>
    )
}

Items.propTypes = {
    onAdd: PropTypes.func
}

export default Items
