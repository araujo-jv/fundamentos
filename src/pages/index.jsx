import Navigator from '../components/Navigator'

export default function Home() {
    // "<h1>Home</h1>"
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            flexWrap: 'wrap'
        }}>
            <Navigator text ="Style" destination="/style"/>
            <Navigator text ="Example" destination="/example" color="#9400d3"/>
            <Navigator text ="JSX" destination="/jsx" color='crimson'/>
            <Navigator text ="Navigation #01" destination="/navigation/" color='green'/>
            <Navigator text ="Navigation #02" destination="/client/sp-2/123" color='blue'/>
            <Navigator text ="Component with State" destination="/state" color='#45ab71'/>
            <Navigator text ="API Integration" destination="/integration_1" color='#42a9a9'/>
            <Navigator text ="Static Content" destination="/static" color='#fa054a'/>
        </div>
    )
}