import Product from "./Product.jsx";

// Structuring Component
function ProductList(){
    return (
      <>
        <Product title="phone" price={30000}/>
        <Product title="laptop" price={100000}/>
        <Product title="earbuds" />
      </>
    );
}

export default ProductList;