import React from 'react';
import { AiFillStar } from 'react-icons/ai';

const styles = {
  ratingBadgeContainer: `
    w-fit
    flex
    items-center
    bg-green-600
    text-white
    rounded
    px-1
    text-xs
    font-semibold
    my-1
  `
};

export default function RatingBadge({ rating }: any) {
  return (
    <div className={styles.ratingBadgeContainer}>
      <label style={{ marginRight: '1px' }}>{rating}</label>
      <AiFillStar size={10} />
    </div>
  )
}
