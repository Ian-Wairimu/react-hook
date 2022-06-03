import React, {useState} from "react";
import "./styles/app.module.css"

const Time = () => {
    let [count, setCount] = useState(0)

    const getTime = () => {
        count = new Date().toLocaleTimeString()
        setCount(count)
    }
    setInterval(getTime, 1000);
    return (
        <div className="container">
            <h1>{count}</h1>
            <button className="btn btn-primary" onClick={getTime}>Get Time</button>
        </div>
    );
}

export default Time;