# Pointr

# Automated Testing Challenge

## Prerequisites
- Node.js (v16 or later)
- Cypress installed globally or locally
- Firefox and Chrome browsers

## Installation
1. Clone the repository.
    git clone https://github.com/MesutKurtulanPF/pointr.git
2. Install dependencies:
    `npm install`

## usage
1. Start Cypress test runner for running test cases on headed mode:
    `npx cypress open`
2. Run all tests in both browsers using CLI on headless mode:
    `npx cypress run --browser chrome`
    `npx cypress run --browser firefox`

## Output
- Test results and screenshots are stored in the `/cypress/` directory.