import * as pulumi from '@pulumi/pulumi';
import * as aws from '@pulumi/aws';
import * as awsx from '@pulumi/awsx';


const functionName = 'hello-world' + '-' + pulumi.getStack();
const description = 'Hello World';

/// Create Role

const role = new aws.iam.Role(functionName + '-role', {
  assumeRolePolicy: {
    Version: '2012-10-17',
    Statement: [
      {
        Action: 'sts:AssumeRole',
        Principal: {
          Service: 'lambda.amazonaws.com',
        },
        Effect: 'Allow',
        Sid: '',
      },
    ],
  },
});

/// Create Role Policies

new aws.iam.RolePolicyAttachment(functionName + '-role-policy', {
  role: role,
  policyArn: aws.iam.ManagedPolicies.AWSLambdaExecute,
});


/// Create Lambda Function
/// creates a zip of the lambda function directory to send to AWS

const lambdaFunc = new aws.lambda.Function(functionName, {
  name: functionName,
  description: description,
  code: new pulumi.asset.AssetArchive({
    '.': new pulumi.asset.FileArchive('./../lambdaFunction/build'),
  }),
  runtime: 'nodejs14.x',
  role: role.arn,
  handler: 'app.lambdaHandler',
  timeout: 30,
});

/// Create API Gateway

const api = new awsx.apigateway.API(functionName, {
  routes: [
       {
      path: '/greeting',
      method: 'GET',
      eventHandler: lambdaFunc
    },
  ],
  stageName: pulumi.getStack()
});

export const lambdaVersion = description;
export const url = api.url;
