import { useState } from "react";
import Layout from "../components/Layout";

export default function State() {

    const [number, setNumber] = useState(0) // React Hooks

    function increment() {
        setNumber(number + 1)
    }
    return (
        <Layout title="Component with State">
            <div>{number}</div>
            <button onClick={increment}>Increment</button>
        </Layout>
    )
}