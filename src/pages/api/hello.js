// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({ 
    name: 'Test API', 
    method: req.method,
    noame: req.query.name,
    age: +req.query.age,
  })
}
