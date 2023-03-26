import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';

import Navbar from '../components/Navbar';
import Container from '../components/Container';
import ProductDetailed from '../components/ProductDetailed';

export default function ProductPage() {
  const { productId } = useParams();

  const { isLoading, data, error } = useQuery({
    queryKey: [`product${productId}`],
    queryFn: async () => {
      let data = await fetch(`https://fakestoreapi.com/products/${productId}`);
      //@ts-ignore
      data = data.json();
      return data;
    }
  });

  if (isLoading) {
    return (<div>
      <Navbar />
      Loading product: {productId}
    </div>)
  }

  if (error) {
    return (<div>
      <Navbar />
      Error loading product: {productId}
    </div>)
  }

  return (
    <div>
      <Navbar />
      <Container>
        <ProductDetailed product={data} />
      </Container>
    </div>
  )
}
