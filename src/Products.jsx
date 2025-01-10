import { useEffect, useState } from "react";

function Products() {

    let [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then((data) => {
                setProducts(data);
            })
            .catch((error)=>{
                console.log(error)
            })
    }, []);

    return (
        <div className="products">
            {
                products.map((product)=>{
                    return (
                        <div className="product" key={product.id}>
                            <img className="p-image" src={product.image} alt="" />
                            <h2 className="p-title">{product.title}</h2>
                            <p>{product.price}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Products;