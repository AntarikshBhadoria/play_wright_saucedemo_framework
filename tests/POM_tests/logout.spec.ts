import { test , expect } from '@playwright/test'
import { LoginPage } from '../POM_pages/login_page';

test ('Logout test', async ({page}) => {
	
	const LP = new LoginPage(page)
	
	await LP.open();
	await LP.login('standard_user','secret_sauce');
	
	await LP.openMenu();
	
	await LP.logout();
	
	const visible = await page.locator('#login-button').isVisible();
	console.log('Login Button Visible:', visible);
	
	await expect(page).toHaveURL('https://www.saucedemo.com/');
});
