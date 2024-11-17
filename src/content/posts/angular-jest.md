---
author: "Al Mounayar Mouhamad"
date: 2024-11-17
category: "dev"
title: "Setting up an Angular Project with Jest"
image: "dark-blue-c"
---

# Setting up an Angular Project with Jest

Since I started using Angular as a student, the testing part has always been frustrating. Especially since `Karma`, the library Angular relies on for unit testing, has been deprecated for a while now. Thus, I am writing this comprehensive guide to help others (including future me) easily set up an Angular project with `Jest`.

## Why Jest?

Jest is a delightful JavaScript testing framework with a focus on simplicity. It works out of the box for most JavaScript projects and provides a great developer experience with features like zero configuration, snapshot testing, and a powerful mocking library.

## Prerequisites

Before we start, ensure you have the following installed on your machine:
- Node.js (v14 or higher)
- npm (v6 or higher)
- Angular CLI (v12 or higher)

## Step 1: Installing Dependencies

Once you have an Angular project set up, start by installing the Jest dependencies as development dependencies:

```sh
npm install jest @types/jest jest-preset-angular -D
```

## Step 2: Configuring Jest
Now create a jest.config.js file in the root of your project. This file will contain your basic Jest configurations:
```js
module.exports = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(ts|js|html)$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'html', 'js', 'json'],
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.spec.json',
      stringifyContentPathRegex: '\\.html$',
    },
  },
  coverageReporters: ['html'],
  collectCoverageFrom: [
    'src/**/*.ts',
    '!src/main.ts',
    '!src/polyfills.ts',
    '!src/**/*.module.ts',
    '!src/**/*.array.ts',
  ],
};
```
Next create your `setup-jest.ts` in the same directory: 
```ts
import "jest-preset-angular/setup-jest"
```

## Step 3: Typescript Configuration
Update your `tsconfig.spec.json` file to include Jest types:
```json
{
  "compilerOptions": {
    "types": ["jest"]
  }
}
```

## Step 4: Adding Jest Scripts
Update your `package.json` file to include Jest scripts:
```json
{
  "scripts": {
    "test": "jest",
    "test:watch": "jest --watch",
    "test:coverage": "jest --coverage"
  }
}
```

## Step 5: Running Tests
You can now run your tests using the following command:
```sh
npm test
```

And that's it! You now have Jest set up in your Angular project. Happy testing!
