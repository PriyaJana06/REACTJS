// Importing CSS file in react 
import "./Product.css";

// Structuring Components
function Product({title, brand, price, features}){
    // console.log(props.title);  // object->props
    return (
        <div className="Product">
            <h3>{title}</h3>
            <h4>{brand}</h4>
            <h5>Price: {price}</h5>
            <p>{features}</p>
        </div>
    );
}

export default Product;