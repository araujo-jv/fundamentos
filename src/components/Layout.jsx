import Link from 'next/link'
import Styles from '../styles/Layout.module.css'
export default function Layout(props) {

    return (
        <div className={Styles.layout}>
            <div className={Styles.header}>
                <h1>{props.title ?? 'One more example'}</h1>
                <Link href="/">
                    Go Back
                </Link>
            </div>
            <div className={Styles.content}>
                {props.children}
            </div>
        </div>
    )
}