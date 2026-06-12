function getCartTotal(cart) { return "Items: " + (cart.items ? cart.items.length : 0); }
setTimeout(() => console.log(getCartTotal({ id: 7 })), 400);
