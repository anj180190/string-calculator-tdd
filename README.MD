# String Calculator TDD Kata

This project is a solution to the String Calculator Kata implemented using Test-Driven Development (TDD) in JavaScript with Jest.

---

## Features Implemented

- Returns `0` for an empty string.
- Returns the number for a single numeric string.
- Handles an unknown amount of comma-separated numbers.
- Ignores non-numeric values in the string.
- Supports new lines (`\n`) between numbers.
- Supports custom delimiters using syntax like `//;\n1;2`.
- Throws an exception if negative numbers are passed, listing all of them.
- Ignores numbers greater than 1000.

---

## How to Run

### 1. Install dependencies:

```bash
npm install
```

### 2. Run tests:

```bash
npm test
```
---

## Folder Structure

```
.
├── src/
│   └── stringCalculator.js
├── tests/
│   └── stringCalculator.test.js
├── package.json
└── README.md
```

---
---

## Approach

The solution strictly follows **Test-Driven Development (TDD)** methodology.

---

## Feedback

Feel free to raise an issue or suggest improvements if you find anything to enhance.
