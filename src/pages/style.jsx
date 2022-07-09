import styles from '../styles/Style.module.css'
import Layout from '../components/Layout'

export default function Style() {
    return (
        <Layout title="Example of Modular CSS">
            <div className={styles.purple}>
                <h1>Style using CSS Modules</h1>
            </div>
        </Layout>
    )
}