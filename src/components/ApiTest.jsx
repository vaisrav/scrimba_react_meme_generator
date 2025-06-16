import { useState, useEffect } from "react"

export default function ApiTest(props) {
    const [starWarsData, setstarWarsData] = useState(null)
    const [count, setCount] = useState(0)
    
    console.log("ApiTest component rendered")

    useEffect(() => {
        console.log("useEffect called")
        fetch("https://swapi.tech/api/people/1/")
        .then(res => res.json())
        .then(data => setstarWarsData(data))
    }, [count]) 
    
    return (
        <div>
            <h1>
                The count is {count}
            </h1>
            <button onClick={() => setCount(prev => prev + 1)}>Add</button>
            <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
        </div>
    )
}