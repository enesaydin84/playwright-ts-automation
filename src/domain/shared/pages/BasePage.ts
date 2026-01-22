import { type Page } from '@playwright/test';

export abstract class BasePage {
    readonly page: Page;
    readonly url: string; 

    // 👇 Update the constructor to accept 'url'
    constructor(page: Page, url: string) {
        this.page = page;
        this.url = url; // 👈 You must assign the value here!
    }

    async goto() {
        await this.page.goto(this.url);
    }
}