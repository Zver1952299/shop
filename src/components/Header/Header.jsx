import React, { useState } from 'react';
import { FaShoppingBasket } from "react-icons/fa";
import cn from 'classnames';

import BasketOrders from '../BasketOrders/BasketOrders';
// import PropTypes from 'prop-types';

import styles from './Header.module.css';

const showOrders = (basket, deleteFormBasket) => {
  let sum = 0;
  basket.forEach(item => sum += +item.price);
  return (
    <div>
      {basket.map(item => 
        <BasketOrders
          key={item.id}
          item={item}
          deleteFormBasket={deleteFormBasket}
        />
      )}
      <p className={styles.sum}>total: {sum.toFixed(2)}$</p>
    </div>
  )
}

const showNothing = () => {
  return (
    <div className={styles.nothing}>
      <h2>The basket is empty</h2>
    </div>
  )
}

const basketWithoutAmount = (setOpenCart, openCart) => {
  return (
    <FaShoppingBasket
      className={cn(styles.shopBasketBtn, openCart && styles.active)}
      onClick={() => setOpenCart(openCart = !openCart)}
    />
  )
}

const basketWithAmount = (basket, setOpenCart, openCart) => {
  return (
    <>
      <FaShoppingBasket
        className={cn(styles.shopBasketBtn, openCart && styles.active)}
        onClick={() => setOpenCart(openCart = !openCart)}
      />
      <span className={styles.basketAmount}>{basket.length}</span>
    </>
  )
}

function Header({basket, deleteFormBasket}) {
  let [openCart, setOpenCart] = useState(false);

  return (
    <header>
      <div className={styles.wrapper}>
        <span className={styles.logo}>Rock Shop</span>
        <nav className={styles.nav}>
          <a className={styles.link} href='a'>About us</a>
          <a className={styles.link} href='a'>Contacts</a>
          <a className={styles.link} href='a'>Account</a>
          {basket.length === 0 
            ? basketWithoutAmount(setOpenCart, openCart)
            : basketWithAmount(basket, setOpenCart, openCart)
          }
          

          {openCart && (
            <div className={styles.shopBasket}>
              {basket.length > 0 
                ? showOrders(basket, deleteFormBasket)
                : showNothing()
              }
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
