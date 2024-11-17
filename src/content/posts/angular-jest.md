---
author: Al Mounayar Mouhamad
date: 2024-08-04
category: "dev"
title: "Setting up an angular project with jest"
image: "dark-blue-c.png"
---

# Setting up an angular project with jest

Since I've started using angular as a student, the testing part has always been so frustrating. Especially since `Karma`, the library angular relies on for unit testing has been deprecated for a while now. Thus, I am writing this short tutorial to serve a guide for others (including future me), on how to easily set up an angular project with `Jest`, a famous javascript testing framework powered by facebook. 

## Installing dependencies

Once you have an angular project setup, start by installing the jest dependencies as developement dependencies : 
```
npm install jest @types/jest jest-preset-angular -D
```

## Configuration files

Create a `setup-jest.ts` file : 
```ts
import "jest-preset-angular/setup-jest"
```

Now create a `jest.config.js` that is going to contain your basic configurations : 
```js
module.exports = {
    preset: "jest-preset-angular",
    setupFilesAfterEnv: ["<rootDir>/setup-jest.ts"],
}; 
```

## Scripts

Now you can add a script to run your tests in your `package.json` file : 
```json
  "scripts": {
    "prepare": "husky",
    "build": "ng build",
    "dev": "ng build --watch",
    "test": "jest"
  }
```
