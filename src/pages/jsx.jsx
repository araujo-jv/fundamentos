import Layout from "../components/Layout"
export default function Jsx() {
    const a = 4
    const b = 3
    console.log(a * b)

    const obj = { name: 'Joao', age: 30 }

    const title = <h1>JSX is a Central concept</h1>

    function subtitle() {
        return <h2>{"very cool".toUpperCase()}</h2>
    }

    return (
        <Layout title="Understanding JSX">
            <div>
                {title}
                {subtitle()}
                {a * b}
                {Math.random()}
                <p>
                    {JSON.stringify(obj)}
                </p>
            </div>
        </Layout>
    )
}