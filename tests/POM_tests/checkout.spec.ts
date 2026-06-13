import { test , expect } from '@playwright/test';
import { LoginPage } from '../POM_pages/login_page';
import { CartPage } from '../POM_pages/cart_page';
import { CheckOutPage } from '../POM_pages/checkout_page';

test('Checkout Test', async ({ page }) => {
	
	const LP = new LoginPage(page);
	const CP = new CartPage(page);
	const COP = new CheckOutPage(page);
	
	
	await LP.open();
	await LP.login('standard_user','secret_sauce');
	
	await CP.addProduct();
	await CP.openCart();
	await CP.verifyProduct();
	
	await COP.checkout();
	await COP.filldetails();
	await COP.verifycheckout();
	
	await LP.openMenu();
	await LP.logout();
	
	const button = await page.locator('#login-button').textContent();
	console.log('Login Page found:', button);
	
	await expect(page).toHaveURL('https://www.saucedemo.com/');
	
});
	

