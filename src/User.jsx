import { useState } from "react";

function User(props) {

    let [name, setName] = useState("Binura");

    function changeName() {
        setName("John");
    }

    function doSomething(planet) {
        console.log("Hello"+planet);
    }

    return (
        <div className="user">
            <h1>{name}</h1>
            <button onClick={changeName}>Click</button>
            <button onClick={()=>{
                doSomething("Mars");
            }}>New</button>
        </div>
    )
}

export default User;