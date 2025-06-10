import { useState, useEffect } from "react"

export default function ApiTest(props) {
    const {starWarsData, setstarWarsData} = useState(null)
    
    useEffect(function() {
        fetch("https://swapi.tech/api/people/1/")
        .then(res => res.json())
        .then(data => setstarWarsData(data))
    })
    
    return (
        <div>
            <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
        </div>
    )
}