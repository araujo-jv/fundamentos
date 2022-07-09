import { useState } from 'react'
import Layout from '../components/Layout'
export default function Integration() {

    const [code, setCode] = useState({})
    const [client, setClient] = useState({})

    async function getClient() {
        const resp = await fetch(`http://localhost:3000/api/client/${code}`)
        const data = await resp.json()
        setClient(data)
        
        // fetch(`http://localhost:3000/api/client/${code}`)
        //     .then(resp => resp.json())
        //     .then(data => setClient(data))
    }


    return (
        <Layout>
            <div>
                <input type="number" value={code}
                    onChange={e => setCode(e.target.value)} />
                <button onClick={getClient}>Get Client</button>
            </div>
            <ul>
                <li>Code: {client.id}</li>
                <li>Name: {client.name}</li>
                <li>Email: {client.email}</li>
            </ul>
        </Layout>
    )
}