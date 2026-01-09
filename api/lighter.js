export const config = {
  runtime: 'edge',
};

export default async function handler(req) {
  try {
    const response = await fetch('https://mainnet.zklighter.elliot.ai/api/v1/markets', {
      headers: {
        'User-Agent': 'Mozilla/5.0',
      },
    });
    
    const data = await response.json();
    
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Cache-Control': 'max-age=5',
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    });
  }
}
