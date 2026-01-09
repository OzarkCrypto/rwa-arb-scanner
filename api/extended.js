export default async function handler(req, res) {
  try {
    const response = await fetch('https://api.starknet.extended.exchange/api/v1/info/markets', {
      headers: {
        'User-Agent': 'Mozilla/5.0',
      },
    });
    
    const data = await response.json();
    
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Cache-Control', 'max-age=5');
    res.status(200).json(data);
  } catch (error) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(500).json({ error: error.message });
  }
}
