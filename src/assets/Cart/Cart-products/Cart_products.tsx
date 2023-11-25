export let Cart_products: { product: any; quantity: number }[] = [];

export function pushToCart(product: any, quantity: number = 1) {
    
    const existingProductIndex = Cart_products.findIndex(
        (item) => item.product === product
      );
    
      if (existingProductIndex !== -1) {
        
        Cart_products[existingProductIndex].quantity += quantity;
      } else {
      
        Cart_products.push({ product: product, quantity: quantity });
      }
    
  }

export function removeItem(product:any) {
    const Test = Cart_products.filter(item => item.product !== product)
    Cart_products = Test
}
