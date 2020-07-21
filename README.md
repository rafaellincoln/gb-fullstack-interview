
<div align="center">
  <img src="https://e6wlgalwjo-flywheel.netdna-ssl.com/wp-content/uploads/2019/06/logox1-opt.png" align="center" width="200">
  <h1 align="center">Groundbreaker Engineering Test</h1>
</div>

Please read these instructions entirely before beginning the challenge.

## Summary

This project has one test case that you need to pass:

- Please provide all of the possibilities of the functionality an ACH transaction can have between two customers using React + Node API integrated with Dwolla

We don’t expect you it will take you more than 4 hours to do so. If you do submit it without doing everything you’d like to do, add a `TODO` file in the root with the changes you will want to make and document any assumptions you made during the implementation. 

## What we're looking for

We have put together a coding test to measure the following skills: how well you write clear code and understand/write business rules.
We've setup a base project using Node with [Serverless](https://https://www.serverless.com/) and [React](https://https://reactjs.org/) with [Polaris](https://polaris.shopify.com/).

What we provide:
1. A basic structure of the API using the Serverless framework with the customer list.
  - You may use any framework in the API (CloudFront, Terraform, etc.) that you wish, but please make sure to clearly document how to install anything that is required to run your solution.
  - The serverless-offline plugin is installed, you can run and debug the application locally using `npm run debug`
2. A basic React structure showing the customers and already integrated with the API.
3. A Dwolla Account with the necessary elements already filled, you don’t need to worry about creating customers and funding sources.

What we expect:

1. A UI functionality using the [Polaris](https://polaris.shopify.com/) components to create a new transaction
2. A new service on the API responsible for processing transactions
3. Elegance/simplicity of your solution
4. Tests are desirable

If you have any questions about the requirements, feel free to reach out to the team.

## Background
To make transactions, we use ACH payments, which are electronic payments that go through the Automated Clearing House (ACH) Network. Funds move from one bank account to another with the help of a centralized system that directs funds to their final destination. To help these transactions, we use a service called [Dwolla](https://docs.dwolla.com/#introduction). All requirements to make these transactions are already established. You will only need to consider the implementation; if you haven’t received the credentials to access Dwolla, send as a message to the engineering team, but feel free to start your own sandbox account - [Sandbox](https://accounts-sandbox.dwolla.com). Keep in mind that if you create your own sandbox account, you will need to include customers and bank accounts before starting to work in Dwolla.

## Submitting your solution

To submit your solution, please make sure you fork this repository as a private repo and then move forward to create your solution. Then add @matheustex and @stedmen to your fork, and let us know that you’ve completed the challenge.

Good luck. We hope to hear from you soon!
