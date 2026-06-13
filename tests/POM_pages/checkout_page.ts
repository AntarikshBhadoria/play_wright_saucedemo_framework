import { Page } from '@playwright/test';

export class CheckOutPage  {
	
constructor(private page : Page) {}
	
async checkout() {
	await this.page.click('#checkout');
}

async filldetails() {
	await this.page.fill('#first-name','Ajeet');
	await this.page.fill('#last-name','Verma');
	await this.page.fill('#postal-code','323232');
	
	await this.page.click('#continue');
}

async verifycheckout() {
	
	const verify = await this.page.locator('.title').textContent();
	console.log('Checkout Done', verify);
}
}