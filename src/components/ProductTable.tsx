import React, { useState } from 'react';

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
}

interface ProductTableProps {
  products: Product[];
}

const ProductTable: React.FC<ProductTableProps> = ({ products }) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage] = useState<number>(10);

  // Get current products based on pagination
  const indexOfLastItem: number = currentPage * itemsPerPage;
  const indexOfFirstItem: number = indexOfLastItem - itemsPerPage;
  const currentProducts: Product[] = products.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="container mx-auto mt-4">
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
              Title
            </th>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
              Description
            </th>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
              Price
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {currentProducts.map((product: Product) => (
            <tr key={product.id}>
              <td className="px-6 py-4 whitespace-no-wrap">
                <div className="text-sm leading-5 font-medium text-gray-900">{product.title}</div>
              </td>
              <td className="px-6 py-4 whitespace-no-wrap">
                <div className="text-sm leading-5 text-gray-900">{product.description}</div>
              </td>
              <td className="px-6 py-4 whitespace-no-wrap">
                <div className="text-sm leading-5 text-gray-900">${product.price}</div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Pagination */}
      <div className="mt-4">
        <nav className="block">
          <ul className="flex pl-0 rounded list-none flex-wrap">
            {Array.from({ length: Math.ceil(products.length / itemsPerPage) }).map((_, index) => (
              <li key={index}>
                <button
                  className={`text-sm font-medium leading-5 mr-2 text-gray-700 hover:text-gray-900 focus:outline-none focus:text-gray-900 
                  ${currentPage === index + 1 ? 'font-bold' : ''} px-3 py-1 rounded-lg border border-gray-300 
                  hover:bg-gray-100`}
                  onClick={() => paginate(index + 1)}
                >
                  {index + 1}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default ProductTable;
