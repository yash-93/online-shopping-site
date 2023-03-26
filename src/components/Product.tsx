import React from 'react';
import { BiDollar } from 'react-icons/bi';
import { Link } from 'react-router-dom';

import RatingBadge from './RatingBadge';

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
    hidden
    md:block
    text-sm
    my-2
  `,
  price: `
    font-bold
    text-lg
  `
};

export default function Product({ product }: any) {
  return (
    <Link to={`/product/${product.id}`}>
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
        </div>
      </div>
    </Link>
  )
}
