import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from 'react-query';

import Home from './pages/Home';
import ProductPage from './pages/ProductPage';
import Cart from './pages/Cart';
import { CartContext } from './context/CartContext';
import { ProductsContext } from './context/ProductsContext';

function App() {
  const queryClient = new QueryClient();

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/product/:productId',
      element: <ProductPage />,
    },
    {
      path: '/cart',
      element: <Cart />
    }
  ]);

  return (
    <ProductsContext.Provider
      value={{
        products: []
      }}
    >
      <CartContext.Provider
        value={{
          cart: []
        }}
      >
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </CartContext.Provider>
    </ProductsContext.Provider>
  );
}

export default App;
