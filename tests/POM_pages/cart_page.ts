import { Page , expect } from '@playwright/test';

export class CartPage {
	
	constructor(private page : Page) {}


async addProduct() {
	await this.page.click('#add-to-cart-sauce-labs-backpack');
}

async openCart() {
	await this.page.click('.shopping_cart_link');
}

async verifyProduct() {
	const product = await this.page.locator('.inventory_item_name').textContent();
	console.log('Product found:', product);
	await expect(this.page.locator('.inventory_item_name')).toHaveText('Sauce Labs Backpack');
}
}