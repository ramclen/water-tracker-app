"use strict";
const AWS = require('aws-sdk');
const dynamoDb = new AWS.DynamoDB.DocumentClient();

/**
 * It update the water level value on DynamoDB and return the new object.
 */
module.exports.update = (event, context, callback) => {
  const data = JSON.parse(event.body);

  // validating the received object
  if (typeof data.level !== 'number') {
    console.error('Validation Failed');
    callback(null, {
      statusCode: 400,
      headers: { 'Content-Type': 'text/plain', 'Access-Control-Allow-Origin': '*' },
      body: 'Couldn\'t update the item.',
    });
    return;
  }

  const params = createParams(event.pathParameters.id, data.level);

  dynamoDb.update(params, (error, result) => {
    // handle potential errors
    if (error) {
      console.error(error);
      callback(null, {
        statusCode: error.statusCode || 501,
        headers: { 'Content-Type': 'text/plain', 'Access-Control-Allow-Origin': '*' },
        body: 'Couldn\'t fetch the item.',
      });
      return;
    }

    callback(null, {
      statusCode: 200,
      headers: { 'Access-Control-Allow-Origin': '*' },
      body: JSON.stringify(result.Attributes),
    });
  });

};

/**
 * It returns an params object to update the item in DynamoDB
 * @param  {string} id
 * @param  {number} level
 * @returns {Object} 
 */
function createParams(id, level) {
  const timestamp = new Date().getTime();
  return {
    TableName: process.env.DYNAMODB_TABLE,
    Key: {
      id,
    },
    ExpressionAttributeNames: {
      '#water_level': 'level',
    },
    ExpressionAttributeValues: {
      ':level': level,
      ':updatedAt': timestamp,
    },
    UpdateExpression: 'SET #water_level = :level, updatedAt = :updatedAt',
    ReturnValues: 'ALL_NEW',
  };
}
