import Product from "./Product.jsx";

// Structuring Component
function ProductList(){
  let options = ["High-tech", "durable", "faster"];
  // let options2 = {a:"high-tech", b:"durable", c:"faster"};
    return (
      <>
        <Product 
          title="phone" 
          price={30000} 
          features={["High-tech", "Durable", "Faster"]}
          brand="Apple"
        />
        <Product 
          title="laptop" 
          price={100000} 
          brand="MacBook"
        />
        <Product 
          title="earbuds" 
          price={100} 
          brand="OnePlus"
        />
      </>
    );
}

export default ProductList;