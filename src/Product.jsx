function Product(props) {
    let { name, price, specs } = props;
    
    return (
        <div className="product">
            <h3>{name}</h3>
            <p>{price}</p>
            <p>{specs.ram}</p>
            <p>{specs.size}</p>
        </div>
    )
}

export default Product;