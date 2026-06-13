import { Page } from '@playwright/test';

export class LoginPage  {

constructor(private page : Page) {}

async open() {
	await this.page.goto('https://www.saucedemo.com/');
}

async openMenu() {
	await this.page.click('#react-burger-menu-btn');
	await this.page.waitForTimeout(1000);
}

async logout() {
	await this.page.click('#logout_sidebar_link');
}

async login(username : string , password : string) {
	await this.page.fill('#user-name', username);
	await this.page.fill('#password', password);
	await this.page.click('#login-button');
}
}


