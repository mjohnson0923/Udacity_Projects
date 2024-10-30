  // Array of products for shopping cart
  const products = [
    {
      name: "Cherry",
      price: 0.99,
      quantity: 0,
      productId: 1738,
      image: "images/cherry.jpg"
    },
    {
      name: "Orange",
      price: 1.79,
      quantity: 0,
      productId: 8675309,
      image: "images/orange.jpg"
    },
    {
      name: "Strawberry",
      price: 2.69,
      quantity: 0,
      productId: 2813308004,
      image: "images/strawberry.jpg"
    }
  ];
  
  // Empty array to hold items for shopping cart
  let cart = [];

  // Helper function to find Product by ID
  function getProductById(productList, productId) {
    return productList.find((product) => product.productId === productId);
  }
  
  // Function for adding products to cart
  function addProductToCart(productId) {
    let product = getProductById(products, productId);
    product.quantity += 1;

  // If product is not in cart, adds product to cart.  
    if (!cart.includes(product)) {
        cart.push(product)
    }
}
  
  // Increases quantity of product in cart
  function increaseQuantity(productId) {
    const product = getProductById(cart, productId);
    if (product) {
      product.quantity++;
    }
  }
  
  // Decreases quantity of product in cart
  function decreaseQuantity(productId) {
    const productIndex = cart.findIndex(p => p.productId === productId);
    if (productIndex > -1) {
      cart[productIndex].quantity--;
      // If product quantity reaches 0, remove the product from the cart
      if (cart[productIndex].quantity === 0) {
        cart.splice(productIndex, 1);  // Directly remove the product from cart
      }
    }
  }
  
  // Removes product from cart completely
  function removeProductFromCart(productId) {
    const index = cart.findIndex(product => product.productId === productId);
  
    if (index !== -1) {
        // Set the quantity to 0 before removing
        cart[index].quantity = 0;
  
        // Remove the product from the cart
        cart.splice(index, 1);
    }
  }
  
  
  
  // Calculate total price
  function cartTotal() {
    return cart.reduce((total, product) => {
        return total + (product.price * product.quantity);
    }, 0);
  }
  
  
  // Empties the cart
  function emptyCart() {
    cart = [];
    cart.quantity = 0
  }
  
// Global variable to track the total paid
  let totalPaid = 0;

  // Payment function
  function pay(amount) {
    totalPaid += amount;
    const total = cartTotal();
    let remaining = totalPaid - total;

    if (remaining >= 0) {
        totalPaid = 0;
        emptyCart();
    }

    return remaining;
  }

module.exports = {
  products,
  cart,
  addProductToCart,
  increaseQuantity,
  decreaseQuantity,
  removeProductFromCart,
  cartTotal,
  pay,
  emptyCart,
};