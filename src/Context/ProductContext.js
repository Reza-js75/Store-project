import { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://localhost:3001/Products');
                setProducts(response.data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);

    console.log("products", products);

    return (
        <ProductContext.Provider value={products}>
            {children}
        </ProductContext.Provider>
    );
};

const useProducts = () => {
    const products = useContext(ProductContext);

    if (!products) {
        throw new Error('useProducts must be used within a ProductProvider');
    }

    return products;
};

const useProductDetailsPage = (id) => {
    const products = useContext(ProductContext);
    const productDetails = products.find((product) => product.id === id);
    return productDetails;
};

export { 
    ProductProvider,
    useProducts,
    useProductDetailsPage,
};