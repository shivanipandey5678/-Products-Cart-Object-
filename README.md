


# Products Cart Object 🛒

Managing your shopping cart has never been easier! This JavaScript code creates a dynamic Products Cart Object, allowing you to keep track of your items effortlessly. Simply input the names, quantities, and prices of your products, and let the magic happen.

## Features:
- 📋 **Dynamic Data Structure:** Utilizes an array of objects to store product details (name, quantity, price).
- 🔄 **Total Calculation:** Includes a `total` method within each product object for easy calculation of individual item totals.
- 📊 **Overall Cart Total:** Computes the total value of all items in the cart using the powerful `reduce` function.

## Sample Usage:

```javascript
let Name = ["Rice", "Dal", "Salt"];
let Quantity = [2, 3, 1];
let Price = [60, 50, 20];
let data = [];

// Populate the cart with product details
// ...

// Calculate the total value of the entire cart
let totalValue = data.reduce((acc, item) => acc + item.total(), 0);
console.log("Cart Total:", totalValue);
```

Keep your shopping organized, efficiently calculate totals, and enjoy a seamless coding experience with this Products Cart Object. Happy coding! 🚀
```

