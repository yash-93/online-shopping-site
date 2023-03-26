import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { BiDollar } from 'react-icons/bi';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

import { CartContext } from '../context/CartContext';

const styles = {
  productContainer: `
    w-full
    flex
    flex-col
    items-center
    border-b-2
    py-4
    md:flex-row
    md:px-2
  `,
  productImageContainer: `
    w-32
    h-auto
    cursor-pointer
  `,
  productImage: `
    max-w-full
    max-h-full
  `,
  productDetailsContainer: `
    w-full
    p-4
    flex
    justify-between
    items-center
  `,
  productTitle: `
    font-semibold
  `,
  price: `
    font-bold
    text-lg
  `,
  incDecQuantityBtn: `
    rounded-full
    border-2
    h-fit
    w-fit
    p-1
    cursor-pointer
  `,
  cartItemQuantityInput: `
    w-8
    mx-2
    text-center
  `,
  remove: `
    font-medium
    ml-2
    cursor-pointer
  `
};

export default function CartItem({ product, setCart }: any) {
  const cartContext = useContext(CartContext);

  const [cartItemQuantity, setCartItemQuantity] = useState(product.cartQuantity);

  const incCartItemQuantity = () => {
    setCartItemQuantity(cartItemQuantity + 1);
    product.cartQuantity += 1;
    const updatedCart: any = cartContext.cart.map((cartItem: any) => {
      if (cartItem.id === product.id)
        return product;
      else return cartItem;
    })
    cartContext.cart = updatedCart;
  }

  const decCartItemQuantity = () => {
    if (product.cartQuantity > 0) {
      setCartItemQuantity(cartItemQuantity - 1);
      product.cartQuantity -= 1;
      const updatedCart: any = cartContext.cart.map((cartItem: any) => {
        if (cartItem.id === product.id)
          return product;
        else return cartItem;
      })
      cartContext.cart = updatedCart;
    }
  }

  const removeItemFromCart = () => {
    const updatedCart = cartContext.cart.filter((item: any) => item.id !== product.id);
    setCart(updatedCart);
    cartContext.cart = updatedCart;
  }

  return (
    <div className={styles.productContainer}>
      <Link to={`/product/${product.id}`}>
        <div className={styles.productImageContainer}>
          <img
            src={product.image}
            alt='product'
            className={styles.productImage}
          />
        </div>
      </Link>
      <div className={styles.productDetailsContainer}>
        <div>
          <label className={styles.productTitle}>{product.title}</label>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <BiDollar size={20} />
            <label className={styles.price}>{product.price}</label>
          </div>
        </div>
        <div style={{ display: 'flex' }}>
          <div
            className={styles.incDecQuantityBtn}
            onClick={decCartItemQuantity}
          >
            <AiOutlineMinus />
          </div>
          <input
            className={styles.cartItemQuantityInput}
            value={cartItemQuantity}
            type='number'
            disabled
          />
          <div
            className={styles.incDecQuantityBtn}
            onClick={incCartItemQuantity}
          >
            <AiOutlinePlus />
          </div>
          <label
            className={styles.remove}
            onClick={removeItemFromCart}
          >
            REMOVE
          </label>
        </div>
      </div>
    </div>
  )
}
