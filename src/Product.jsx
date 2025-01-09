import { useEffect, useState } from "react"

function Product() {

    let [name, setName] = useState("Samsung Galaxy A21s");
    let [price, setPrice] = useState(28000);

    useEffect(()=>{
        console.log("Component Mounted");
        return () => {
            console.log("Component Unmounted");
            
        }
    })

    return (
        <div className="product">
            <h1>{name}</h1>
            <p>price : {price}</p>
            <button onClick={()=>{
                setName("Iphone XR"),
                setPrice("71000")
            }}>Change</button>
        </div>
    )
}

export default Product