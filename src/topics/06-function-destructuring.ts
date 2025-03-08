interface Product {
  description: string;
  price: number;
}

const phone: Product = {
  description: "Samsung Galaxy S10",
  price: 150,
};

const tablet: Product = {
  description: "iPad Pro",
  price: 250,
};

interface TaxtCalculationOptions {
  tax: number;
  products: Product[];
}

// function taxCalculation({ products, tax }: TaxtCalculationOptions): [number, number] {
function taxCalculation(options: TaxtCalculationOptions): [number, number] {
  const { products, tax } = options;

  let total = 0;

  products.forEach(({ price }) => {
    total += price;
  });

  return [total, total * tax];
}

const shoppingCart = [phone, tablet];
const tax = 0.15;

const [total, taxTotal] = taxCalculation({
  products: shoppingCart,
  tax,
});

console.log("🚀 ~ Total", total);
console.log("🚀 ~ Tax", taxTotal);
