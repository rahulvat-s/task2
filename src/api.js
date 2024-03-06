export async function fetchProducts() {
  try {
    const response = await fetch('https://dummyjson.com/products');
    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Failed to fetch products: ' + error.message);
  }
}
export async function addProduct(productData) {
  try {
    const response = await fetch('https://dummyjson.com/products/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(productData)
    });

    if (!response.ok) {
      throw new Error('Failed to add product');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Failed to add product: ' + error.message);
  }
}

  // export async function addProduct(productData) {
  //   const response = await fetch('https://dummyjson.com/products/add', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify(productData)
  //   });
  // console.log(response.js);
  //   if (!response.ok) {
  //     throw new Error('Failed to add product');
  //   }
  // }
  

//   fetch('https://dummyjson.com/products/add', {
//   method: 'POST',
//   headers: { 'Content-Type': 'application/json' },
//   body: JSON.stringify({
//     title: 'BMW Pencil',
//     /* other product data */
//   })
// })
// .then(res => res.json())
// .then(console.log);
            