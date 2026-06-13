import { test,expect } from '@playwright/test';

test('Add product to cart test', async ({ page }) => {
	//login
	await page.goto('https://www.saucedemo.com/');
	await page.fill('#user-name','standard_user');
	await page.fill('#password','secret_sauce');
	await page.click('#login-button');
	
	//Add Product
	await page.click('#add-to-cart-sauce-labs-backpack');
	
	//go to Cart
	await page.click('.shopping_cart_link');
	
	await expect(page.locator('.inventory_item_name')).toHaveText('Sauce Labs Backpack');
	
});