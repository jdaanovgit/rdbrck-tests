# rdbrck-tests
Small QA project for Lead QA Automation Developer Testing position - based on rdbrck.com


# Puppeteer Test for rdbrck.com

This repository contains a Puppeteer test suite written in JavaScript to validate certain functionalities on the rdbrck.com website.

## Prerequisites

1. **Node.js and npm:**
   - Ensure you have Node.js installed on your machine. You can download it from [here](https://nodejs.org/).
   - npm (Node Package Manager) is usually installed with Node.js.

2. **Chrome Browser:**
   - The tests are designed to run on the Chrome browser. Make sure you have it installed on your machine.

3. **Puppeteer:**
   - Install Puppeteer using npm:
     ```bash
     npm install puppeteer
     ```

## Running the Tests

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/jdaanovgit/rdbrck-tests.git
   cd rdbrck-tests/tests

2. **Run the following command:**
   ```bash
   npm test test_navigate.js

## Run multiple tests
1. Install mocha
   ```bash
   npm install mocha --save-dev
   
3. Update "package.json"
   ```bash
   "scripts": {
   "test": "mocha 'tests/*.js'",
   "test-navigation": "mocha 'tests/test_navigate.js'",
   "test-careers": "mocha 'tests/test_careers.js'",
   "test-jobcard": "mocha 'tests/test_job_card.js'"}
   
5. Run
   ```bash
   npm test

## Review Results:

The test suite will run, and the results will be displayed in the terminal. 
If there are any failures, detailed error messages will be provided as well.
