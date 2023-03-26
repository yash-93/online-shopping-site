import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { BiDollar } from 'react-icons/bi';
import { FaShoppingCart } from 'react-icons/fa';

import RatingBadge from './RatingBadge';
import { CartContext } from '../context/CartContext';

const styles = {
  productContainer: `
    w-full
    flex
    flex-col
    items-center
    py-4
    lg:flex-row
    lg:px-2
    lg:mt-12
  `,
  productImageContainer: `
    w-60
    lg:w-96
    h-auto
  `,
  productImage: `
    max-w-full
    max-h-full
  `,
  productDetailsContainer: `
    w-full
    p-4
  `,
  productTitle: `
    font-semibold
  `,
  rateCount: `
    text-xs
    ml-1
    font-medium
  `,
  description: `
    text-sm
    my-2
  `,
  price: `
    font-bold
    text-lg
  `,
  addToCartBtn: `
    flex
    py-2
    px-6
    mt-4
    items-center
    bg-amber-500
    w-fit
    rounded
    text-white
    cursor-pointer
    font-semibold
  `
};

export default function ProductDetailed({ product }: any) {
  const cartContext = useContext(CartContext);

  const [inCart, setInCart] = useState((cartContext.cart.findIndex((item: any) => item.id === product.id)) > -1);

  const addToCart = () => {
    let cart: any = cartContext.cart;
    product.cartQuantity = 0;
    cart.push(product);
    cartContext.cart = cart;
    setInCart(true);
  }

  return (
    <div className={styles.productContainer}>
      <div className={styles.productImageContainer}>
        <img
          src={product.image}
          alt='product'
          className={styles.productImage}
        />
      </div>
      <div className={styles.productDetailsContainer}>
        <div>
          <label className={styles.productTitle}>{product.title}</label>
          <div style={{ display: 'flex', alignItems: 'center', margin: '0.25rem 0' }}>
            <RatingBadge rating={product.rating.rate} />
            <label className={styles.rateCount}>{product.rating.count} Ratings</label>
          </div>
          <p className={styles.description}>{product.description}</p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <BiDollar size={20} />
          <label className={styles.price}>{product.price}</label>
        </div>
        {
          (!inCart) ?
            <div
              className={styles.addToCartBtn}
              onClick={addToCart}
            >
              <FaShoppingCart size={20} />
              <label style={{ marginLeft: '0.5rem', cursor: 'pointer' }}>ADD TO CART</label>
            </div> :
            <Link to='/cart'>
              <div
                className={styles.addToCartBtn}
              >
                <FaShoppingCart size={20} />
                <label style={{ marginLeft: '0.5rem', cursor: 'pointer' }}>GO TO CART</label>
              </div></Link>
        }
      </div>
    </div>
  )
}
