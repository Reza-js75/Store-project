import React, { createContext, useContext } from 'react';
import { useQuery, gql, ApolloProvider } from '@apollo/client';
import client from '../GraphQL/ApolloClient';

const ProductContext = createContext();

const GET_PRODUCTS = gql`
query get_Products($limit: Int, $skip: Int) {
  get_Products(first: $limit, skip: $skip) {
    id
    title
    categories
    price
    description {
      text
    }
    images {
      url
    }
  }
}
`;

const ProductProvider = ({ children }) => {
  const { loading, error, data } = useQuery(GET_PRODUCTS, {
    variables: {limit: 100, skip: 0},
  });
  console.log(data);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <ProductContext.Provider value={data.get_Products}>
      {children}
    </ProductContext.Provider>
  );
};

const useProducts = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error('useProducts must be used within a ProductProvider');
  }
  return context;
};

const useProductDetailsPage = (id) => {
  const products = useContext(ProductContext);
  const productDetails = products.find((product) => product.id === id);
  return productDetails;
};

const ApolloProductProvider = ({ children }) => (
  <ApolloProvider client={client}>
    <ProductProvider>{children}</ProductProvider>
  </ApolloProvider>
);

export { ApolloProductProvider, useProducts, useProductDetailsPage };