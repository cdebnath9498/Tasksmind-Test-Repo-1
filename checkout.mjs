

function getCartTotal(cart) { const b = (typeof document !== "undefined") && document.getElementById("checkoutBtn"); if (b) b.addEventListener ? b.addEventListener("click", () => fetch("/checkout", { method: "POST" }).then(r => r.json()).then(d => { if (typeof window !== "undefined" && window.location) window.location.href = (d && d.redirectUrl) || "/payment"; })) : (b.onclick = () => fetch("/checkout", { method: "POST" }).then(r => r.json()).then(d => { if (typeof window !== "undefined" && window.location) window.location.href = (d && d.redirectUrl) || "/payment"; })); return "Items: " + (cart.items ? cart.items.length : 0); }
setTimeout(() => console.log(getCartTotal({ id: 7 })), 400);
