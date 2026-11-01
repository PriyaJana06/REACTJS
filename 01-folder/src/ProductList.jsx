import Product from "./Product.jsx";

// Structuring Component
function ProductList(){
    return (
      <>
        <Product title="phone" price={30000} brand="Apple"/>
        <Product title="laptop" price={100000} brand="MacBook"/>
        <Product title="earbuds" brand="OnePlus"/>
      </>
    );
}

export default ProductList;