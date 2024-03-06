import React from 'react';
import { useQuery, QueryKey } from 'react-query';
import { fetchProducts, addProduct } from '../api';
import ProductTable from './ProductTable';
import AddProductForm from './AddProductForm';

function ProductList() {
  const { isLoading, error, data, refetch } = useQuery('products' as QueryKey, fetchProducts, {
    refetchInterval: 5000, // Refetch every 5 seconds to get the latest data
  });

  const handleAddProduct = async (newProduct: any) => {
    try {
      // Call API to add new product
      await addProduct(newProduct);
      
      // Manually trigger a refetch to update the product list
      refetch();
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  if (isLoading) return <div className="text-center mt-4">Loading...</div>;
  if (error) return <div className="text-center mt-4">Error: {(error as Error).message}</div>;

  return (
    <div className="container mx-auto">
      <AddProductForm onSubmit={handleAddProduct} />
      <ProductTable products={(data as any)?.products} />
    </div>
  );
}

export default ProductList;
