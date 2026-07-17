# Learn Playwright

A hands-on learning repository covering JavaScript, TypeScript, object-oriented programming, and Playwright test automation.

## What is included

- JavaScript fundamentals, from basic syntax through promises and async/await
- Object-oriented programming: classes, encapsulation, inheritance, and polymorphism
- TypeScript topics including interfaces, enums, generics, access modifiers, decorators, and type overrides
- Playwright basics and a dedicated Playwright fundamentals project
- Practice tasks, including calculator and student-details exercises

The folders are arranged in learning order (`chapter_01_Basics` through `chapter_32_Playwright_Fundamentals`).

## Run the Playwright fundamentals tests

The current Playwright project lives in `chapter_32_Playwright_Fundamentals` and contains a Chromium test that checks the Playwright website title.

```powershell
cd chapter_32_Playwright_Fundamentals
npm install
npm.cmd test
```

The project is configured to run Chromium in headed mode, so a browser window opens during the test.

### Additional commands

```powershell
npm.cmd run test:headed
npm.cmd run test:all
npm.cmd run test:debug
npx.cmd playwright test --list
```

On Windows PowerShell, use `npm.cmd` or `npx.cmd` if script-execution policy prevents `npm` or `npx` from running directly.

## VS Code

Install the **Playwright Test for VS Code** extension to use the Run button shown above Playwright tests. Do not use the Code Runner extension for Playwright test files; run them through the Playwright test runner instead.

## Continuous integration

GitHub Actions runs the root Playwright test configuration on pushes and pull requests to `main` or `master`.
