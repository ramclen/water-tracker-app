"use strict";
const uuid = require('uuid');
const AWS = require('aws-sdk');

const dynamoDb = new AWS.DynamoDB.DocumentClient();

/**
 * It returns an water-level object and create one if does not exists
 */
module.exports.get = (event, context, callback) => {
  const params = {
    TableName: process.env.DYNAMODB_TABLE,
  };

  dynamoDb.scan(params, (error, result) => {

    if (error) {
      console.error(error);
      callback(null, {
        statusCode: error.statusCode || 501,
        headers: { 'Content-Type': 'text/plain', 'Access-Control-Allow-Origin': '*' },
        body: 'Couldn\'t fetch the item.',
      });
      return;
    }

    if (result.Items.length === 0) {
      createNewLevel()
        .then(item => callback(null, {
          statusCode: 200,
          body: JSON.stringify(item),
        }))
        .catch(error => callback(null, {
          statusCode: error.statusCode || 501,
          headers: { 'Content-Type': 'text/plain', 'Access-Control-Allow-Origin': '*' },
          body: 'Couldn\'t create the todo item.',
        }))
      return;
    }

    callback(null, {
      statusCode: 200,
      headers: { 'Access-Control-Allow-Origin': '*' },
      body: JSON.stringify(result.Items[0]),
    });
  });

};

/**
 * Function to create a new level item into the DynamoDB. It returns a Promise with the results
 * @param  {Callback} callback
 * @returns Promise
 */
function createNewLevel(callback) {
  const timestamp = new Date().getTime();
  const params = {
    TableName: process.env.DYNAMODB_TABLE,
    Item: {
      id: uuid.v1(),
      level: 0,
      createdAt: timestamp,
      updatedAt: timestamp,
    },
  };

  return new Promise((resolve, reject) =>
    dynamoDb.put(params, (error) => error ? reject(error) : resolve(params.Item))
  )
}