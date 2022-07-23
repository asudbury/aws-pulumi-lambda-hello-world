<h1>
  aws-lambda-hello-world
</h1>

This repository supports the AWS Lambda function, API Gateway and Pulumi install scripts for the AWS Lambda hello world

<br>

## ![](/assets/img/folder.svg) infrastructure

The infrastructure folder contains the pulumi script and supporting files to install the Lambda function

| Stack                                       | Configuration file                                         |
| ------------------------------------------- | ---------------------------------------------------------- |
| ![](/assets/img/stack-line.svg) development | [Pulumi.dev.yaml](/infrastructure/Pulumi.dev.yaml)         |
| ![](/assets/img/stack-line.svg) test        | [Pulumi.test.yaml](/infrastructure/Pulumi.test.yaml)       |
| ![](/assets/img/stack-line.svg) live        | [Pulumi.live.yaml](/infrastructure/Pulumi.live.yaml)       |

[index.ts](/infrastructure/index.ts) contains the code to install the assets into AWS

<br>

## ![](/assets/img/folder.svg) lambdaFunction

<br>

### Built With

| Component                                                   | Purpose                       |
| ----------------------------------------------------------- | ----------------------------- |
| [TypeScript](https://www.typescriptlang.org/)               | for language and type safety  |
| [ESLint](https://eslint.org/)                               | for statically analyzing code |
| [Prettier](https://prettier.io/)                            | for code formatting           |
| [Airbnb style guide](https://github.com/airbnb/javascript/) | for code styling              |
| [Jest](https://jestjs.io/)                                  | for unit testing              |
| [TypeDoc](https://typedoc.org/)                             | for source code documentation |


## Change Log

| Version | Comments        |
| ------- | --------------- |
| 0.0.0   | Initial Version |
