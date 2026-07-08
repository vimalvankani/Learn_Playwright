# Learn Playwright

This repository contains JavaScript, TypeScript, and Playwright learning examples organized by chapter.

## Current Playwright Chapter

The active Playwright project is in:

```text
chapter_32_Playwright_Fundamentals
```

It contains a basic Playwright test that opens the Playwright website and verifies the page title.

## Run Chapter 32 Tests

From the repository root:

```powershell
cd chapter_32_Playwright_Fundamentals
npm install
npm.cmd test
```

The Chapter 32 Playwright config runs Chromium in headed mode, so the browser window opens when the test runs.

## Useful Commands

```powershell
npm.cmd test
npm.cmd run test:headed
npm.cmd run test:debug
npx.cmd playwright test --list
```

Use `npm.cmd` or `npx.cmd` on Windows PowerShell if `npm` or `npx` is blocked by script execution policy.

## VS Code

For the Run button above Playwright tests, install the **Playwright Test for VS Code** extension.

Do not use the Code Runner extension for Playwright test files. Code Runner starts files with `ts-node`, but Playwright tests must run through the Playwright test runner.
