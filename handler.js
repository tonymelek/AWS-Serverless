'use strict';

const hello = async (event) => {
  let name = 'mate'
  if (event.queryStringParameters) {
    if (event.queryStringParameters.name) {
      name = event.queryStringParameters.name
    }
  }
  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
    },
    body: JSON.stringify(
      {
        message: `Hi ${name}`,
        input: event,
      }, null, 2),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};

module.exports = { hello };