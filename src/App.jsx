import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import ProductList from './components/ProductList';


const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="bg-gray-100 min-h-screen p-16">
        <div className="container mx-auto py-8">
          <ProductList />
        </div>
      </div>
    </QueryClientProvider>
  );
}

export default App;