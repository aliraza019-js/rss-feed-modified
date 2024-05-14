// proxy.js

const fetch = require('node-fetch');

exports.handler = async (event, context) => {
  try {
    const url = event.queryStringParameters.url;
    const response = await fetch(url);
    const data = await response.text();
    
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'text/xml', // Adjust content type as needed
        'Access-Control-Allow-Origin': '*', // Allow requests from any origin (CORS)
      },
      body: data,
    };
  } catch (error) {
    console.error('Error fetching RSS feed:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal Server Error' }),
    };
  }
};
