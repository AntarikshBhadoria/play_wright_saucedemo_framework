import { test } from '@playwright/test';
import { LoginPage } from '../POM_pages/login_page';
import { CartPage } from '../POM_pages/cart_page';

test ('add to cart(POM)' , async ({page}) => {
	
	const LP = new LoginPage(page);
	const CP = new CartPage(page);
	
	await LP.open();
	await LP.login('standard_user','secret_sauce');
	
	await CP.addProduct();
	await CP.openCart();
	await CP.verifyProduct();
	
	
	
});

