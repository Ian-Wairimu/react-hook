import React, {useState} from "react";
import "./styles/app.module.css"

const App = () => {
    const [count, setCount] = useState(0)
    const increase = () => {
        setCount(count + 1)
    }
    const decrease = () => {
        setCount(count - 1)
    }
    return (
        <div className="container justify-content-center">
            <h1>{count}</h1>
            <div className="flex justify-content-center">
            <button className="btn btn-primary" onClick={decrease}>-</button>
            <button className="btn btn-primary" onClick={increase}>+</button>
            </div>
        </div>
    );
}
export default App;