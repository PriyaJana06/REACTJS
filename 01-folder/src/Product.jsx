// Importing CSS file in react 
import "./Product.css";

// Structuring Components
function Product({title, price = 100}){
    // console.log(props.title);  // object->props
    return (
        <div className="Product">
            <h3>{title}</h3>
            <h5>Price: {price}</h5>
        </div>
    );
}

export default Product;