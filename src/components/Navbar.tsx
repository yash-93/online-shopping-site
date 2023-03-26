import { useContext } from 'react';
import { BiCart } from 'react-icons/bi';
import { Link } from 'react-router-dom';

import { ProductsContext } from '../context/ProductsContext';

const styles = {
  navbarContainer: `
    w-screen
    flex
    items-center
    justify-between
    shadow-md
    py-3
    px-8
    bg-white
    sticky
  `,
  logo: `
    text-2xl
    font-montserrat
    cursor-pointer
  `,
  navItems: `
    flex
    items-center
    justify-between
  `,
  navItem: `
    cursor-pointer
  `,
  searchBox: `
    border-2
    mr-4
    p-1
  `
};

export default function Navbar({ products, setProducts }: any) {
  const productsContext = useContext(ProductsContext);

  const searchProducts = (e: any) => {
    console.log(e.target.value);
    if (e.target.value && e.target.value.length === 0) {
      setProducts(productsContext.products);
      return;
    }
    const searchedProducts = productsContext.products.filter((product: any) => {
      const stringToSearch: string = e.target.value.toLocaleLowerCase();
      const stringToBeSearchedIn: string = product.title.toLocaleLowerCase();
      return stringToBeSearchedIn.includes(stringToSearch);
    });
    setProducts(searchedProducts);
  }

  return (
    <nav className={styles.navbarContainer}>
      <Link to='/'>
        <label className={styles.logo}>LOGO</label>
      </Link>
      <div
        className={styles.navItems}
      >
        <input
          type='text'
          onChange={searchProducts}
          className={styles.searchBox}
          placeholder='Search'
        />
        <Link to='/cart'>
          <BiCart size={20} className={styles.navItem} />
        </Link>
      </div>
    </nav>
  )
}
