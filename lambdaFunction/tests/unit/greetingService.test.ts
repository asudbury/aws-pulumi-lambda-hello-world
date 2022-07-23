/* eslint-disable jest/no-export */

export {};
declare const require: any;

const greeting = require('../../build/greetingService');

test('getGreeting', async () => {
  const string = await greeting.getGreeting();

  expect(string).toEqual('Hello World');
});
