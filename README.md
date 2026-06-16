# Playwright SauceDemo POM Framework

## Project Overview
This is a Playwright automation framework built using:

- TypeScript
- Playwright
- Page Object Model (POM)

## Test Cases

### Login Test
- Login with valid credentials
- Verify successful login

### Cart Test
- Add product to cart
- Verify product in cart

### Checkout Test
- Complete checkout process
- Verify checkout overview page

### Logout Test
- Logout successfully
- Verify login page is displayed

## Project Structure

tests
├── POM_pages
│   ├── login_page.ts
│   ├── cart_page.ts
│   └── checkout_page.ts
│
└── POM_tests
    ├── login.spec.ts
    ├── cart.spec.ts
    ├── checkout.spec.ts
    └── logout.spec.ts

## Author

Antariksh Bhadoria

Framework created by Antariksh Bhadoria for learning Playwright POM.