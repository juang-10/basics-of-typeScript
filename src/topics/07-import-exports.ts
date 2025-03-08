import { Product, taxCalculation } from "./06-function-destructuring";

const shoppingCart: Product[] = [
  {
    description: "Samsung Galaxy S10",
    price: 100,
  },
  {
    description: "iPad Pro",
    price: 200,
  },
];

const [total, tax] = taxCalculation({
  products: shoppingCart,
  tax: 0.15,
})
console.log("🚀 ~ tax:", tax)
console.log("🚀 ~ total:", total)
