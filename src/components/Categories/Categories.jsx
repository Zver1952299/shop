import React from 'react';
// import PropTypes from 'prop-types';

import styles from './Categories.module.css';

function Categories({сhoosingСategory}) {
    const categories = [
        {
            key: "all",
            name: 'Все'
        },
        {
            key: "men's clothing",
            name: 'Мужская одежда'
        },
        {
            key: "women's clothing",
            name: 'Женская одежда'
        },
        {
            key: "jewelery",
            name: 'Украшения'
        },
        {
            key: "electronics",
            name: 'Электроника'
        }
    ];

    return (
        <div className={styles.categoriesItems}>
            {categories.map(el => (
                <div 
                    key={el.key}
                    className={styles.categoriesItem}
                    onClick={() => сhoosingСategory(el.key)}
                >
                    {el.name}
                </div>
            ))}
        </div>
    )
}

// Categories.propTypes = {};

export default Categories;
