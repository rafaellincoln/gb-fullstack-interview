
<div align="center">
  <img src="https://e6wlgalwjo-flywheel.netdna-ssl.com/wp-content/uploads/2019/06/logox1-opt.png" align="center" width="60">
  <h1 align="center">Groundbreaker Engineering Test</h1>
</div>

Please read these instructions in full before commencing the challenge.

## Summary

This project has one test case you need to make pass.

1. Provide a full functionality that possibilities an ACH transaction between two customers using React + Node API integrated with Dwolla.

We don't expect it'll take you more than three hours to do. If you do submit it without doing everything you'd like to do, then add a TODO file in root with the changes you'd like to make and document any assumptions made during the implementation.

## What we're looking for

This is a quick test put together by the eng team at Grounudbreaker to test your skills in writing clear code and understand the business rule. 
We've setup a base project using Node with [Serverless](https://https://www.serverless.com/) and [React](https://https://reactjs.org/).

What we provide:
1. A basic structure of the API using the Serverless framework with the customer list working.
- You may use any frameworks in the API (CloudFront, Terraform, etc..) that you wish, but please ensure you've documented clearly how to install anything that's required to run your solution.
2. A basic React structure showing customers already integrated with the API
3. A Dwolla Account with the basic requirements already filled, you don't need to care about creating customers and funding sources.

What we expect:

1. A UI functionality to create a new transaction.
2. A new service on the API responsible to process transactions.
3. Elegance/simplicity of your solution.
4. Tests are desirable.

If you need any of the requirements to be clarified, please just ask!

## Background
To make transactions we use ACH payments which are electronic payments that go through the Automated Clearing House (ACH) Network. Funds move from one bank account to another with the help of a centralized system that directs funds to their final destination. To help these transactions we use a service called [Dwolla](https://docs.dwolla.com/#introduction). All requirements to make these transactions were filled and you will need to care about the implementation - if you didn't receive the credentials to access Dwolla, send as a message but fell free to start your own sandbox account.[Sandbox](https://accounts-sandbox.dwolla.com). Have in mind if you create your own account, you will need to include customers and bank accounts before starting working in Dwolla.

## Submitting your solution

Submitting your solution
Fork this repository, make your fork private, create your solution in your fork, then add @matheustex and @stedmen to your fork, and let us know that you've completed the challenge.

Good luck, we hope to hear from you soon!
