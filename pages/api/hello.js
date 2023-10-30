export default function handler(req, res) {
    console.log('this is the request' + req);
    res.status(200).json({ text: 'Hello' });
}