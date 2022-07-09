export default function handler(req, res) {
    req.method === 'GET'
        ? handleGET(req, res)
        : res.status(405).send()
}

function handleGET(req, res) {
    res.status(200).json({
        id: 3,
        name: 'Maria',
        email: 'mariamaria@fakeemail.com'
    })
}