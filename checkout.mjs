function getCartTotal(cart) { return "Items: " + cart.items.length; }
setTimeout(() => console.log(getCartTotal({ id: 7 })), 400);
