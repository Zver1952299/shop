import React, { useEffect, useState } from 'react';

import { getApiResourse } from '../../services/network';
import Item from '../Item/Item';

import PropTypes from 'prop-types';
import styles from './Items.module.css';

function Items({onAdd}) {
    const [items, setItems] = useState([]);
    const [errorApi, setErrorApi] = useState([]);

    const getResourse = async (url) => {
        const res = await getApiResourse(url);

        if (res) {
            const itemList = res.map(({id, title, description, price, image}) => {
                return {
                    id,
                    title,
                    description,
                    price,
                    image
                }
            })
        
            setItems(itemList);
            setErrorApi(false);
        } else {
            setErrorApi(true);
        }
    }

    useEffect(() => {
        getResourse('https://fakestoreapi.com/products/')
    }, [])

    return (
        <main className={styles.main}>
            {items.map(item => (
                <Item 
                    key={item.id} 
                    item={item}
                    onAdd={onAdd}
                />
            ))}
        </main>
    )
}

Items.propTypes = {
    onAdd: PropTypes.func
}

export default Items
