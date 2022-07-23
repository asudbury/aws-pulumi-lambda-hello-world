/* eslint-disable import/prefer-default-export */
import { APIGatewayProxyResult } from 'aws-lambda';

const greeting = require('./greetingService');

/**
 * @returns {Promise<APIGatewayProxyResult>}
 */
export const lambdaHandler = async (): Promise<APIGatewayProxyResult> => ({
  statusCode: 200,
  body: await greeting.getGreeting()
});
