# Cypress
This repository contains basic Cypress framework that can be explored and extended.

**» Pre-requisites to this course include:**

- Visual Studio Code: https://code.visualstudio.com/download
- Node.js: https://nodejs.org/en/download/
- Cypress: https://www.cypress.io/

**» Steps to use this project:**

1. Download this repo
2. Install dependencies by running the following command in terminal (from inside your app directory i.e. where package.json is located):
```
   npm install mocha --save-dev  
   npm install cypress-multi-reporters --save-dev
   npm install mochawesome --save-dev 
   npm install mochawesome-merge --save-dev 
   npm install mochawesome-report-generator --save-dev
   npm install mocha-junit-reporters
```
   
**» Features:**

1. Mochawesome .html report
2. Junit report genration in Circel CI
3. Option to take screenshots and videos
4. config.yml to customize Circel CI execution 

**» Steps to run this project:**

1. To execute locally, run the following command in terminal: npm run test
2. To run in Circle CI:
   - Register in Circle CI and link Git repository. Circle CI: https://circleci.com/integrations/github/
   - Schedule a job to run the scripts that refers config.yml
   
