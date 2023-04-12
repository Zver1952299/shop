import React, { useState } from 'react';
import { FaShoppingBasket } from "react-icons/fa";
import cn from 'classnames';

import BasketOrders from '../BasketOrders/BasketOrders';
// import PropTypes from 'prop-types';

import styles from './Header.module.css';

function Header({basket}) {
  let [openCart, setOpenCart] = useState(false);

  return (
    <header>
      <div className={styles.wrapper}>
        <span className={styles.logo}>Rock Shop</span>
        <nav className={styles.nav}>
          <a className={styles.link} href='a'>About us</a>
          <a className={styles.link} href='a'>Contacts</a>
          <a className={styles.link} href='a'>Account</a>
          <FaShoppingBasket
            className={cn(styles.shopBasketBtn, openCart && styles.active)}
            onClick={() => setOpenCart(openCart = !openCart)}
          />

          {openCart && (
            <div className={styles.shopBasket}>
              {basket.map(item => 
                <BasketOrders
                  key={item.id}
                  item={item}
                />
              )}
            </div>
          )}
        </nav>
      </div>
      <div className={styles.intro}></div>
    </header>
  )
}

// Header.propTypes = {}

export default Header;
