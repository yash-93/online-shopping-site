import { useContext, useState } from 'react';

import Navbar from '../components/Navbar';
import Container from '../components/Container';
import CartItem from '../components/CartItem';
import { CartContext } from '../context/CartContext';

export default function Cart() {
  const cartContext = useContext(CartContext);

  const [cart, setCart] = useState(cartContext.cart);

  return (
    <div>
      <Navbar />
      <Container>
        {
          cart.map((cartItem) => {
            //@ts-ignore
            return <CartItem product={cartItem} key={cartItem.id} setCart={setCart} />
          })
        }
      </Container>
    </div>
  )
}
