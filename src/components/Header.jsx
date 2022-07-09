export default function Header(props) {
    console.log(props.title)
    return (
        <header>
            <h1>{props.title}</h1>
        </header>
    )
}