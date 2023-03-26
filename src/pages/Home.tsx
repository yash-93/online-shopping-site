import { useState, useEffect, useContext } from 'react';
import { useQuery } from 'react-query';

import Navbar from '../components/Navbar';
import Container from '../components/Container';
import Product from '../components/Product';
import { ProductsContext } from '../context/ProductsContext';

export default function Home() {
  const productsContext = useContext(ProductsContext);
  const [products, setProducts] = useState([]);

  const { isLoading, data, error } = useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      let data = await fetch('https://fakestoreapi.com/products');
      //@ts-ignore
      data = data.json();
      return data;
    }
  });

  useEffect(() => {
    //@ts-ignore
    setProducts(data);
    //@ts-ignore
    productsContext.products = data;
  }, [data, productsContext]);

  if (isLoading) {
    return (<div>
      <Navbar />
      Loading products
    </div>)
  }

  if (error) {
    return (<div>
      <Navbar />
      Error loading products
    </div>)
  }

  return (
    <div>
      <Navbar products={products} setProducts={setProducts} />
      <Container>
        {
          //@ts-ignore
          products?.length > 0 ?
            //@ts-ignore
            products.map((product: any) => {
              return <Product product={product} key={product.id} />
            }) :
            <label>No products to available.</label>
        }
      </Container>
    </div>
  )
}
