import { expect, test } from '@playwright/test';

test.describe('Tests for sobre page', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto('https://kevincamussi.github.io/academialocal_svelte/sobre');
	});

	test('should render correctly', async ({ page }) => {
		await expect(page.locator('h1')).toHaveText('Conheça a academia que mais cresce na cidade!');
	});

	test('should go to modalidades page', async ({ page }) => {
		await page.waitForSelector('.intro__wrapper a:text("Modalidades")');
		await page.click('.intro__wrapper a:text("Modalidades")');
		await expect(page.locator('h1')).toHaveText('Temos a modalidade certa para você');
	});

	test('should open and close first faq question', async ({ page }) => {
		await page.waitForSelector('text="Quanto custa a mensalidade?"');
		await page.click('text="Quanto custa a mensalidade?"');
		await expect(page.locator('.answer')).toBeVisible();
		await page.click('text="Quanto custa a mensalidade?"');
		await expect(page.locator('.answer')).toBeHidden();
	});

	test('should open and close second faq question', async ({ page }) => {
		await page.waitForSelector('text="Posso utilizar quantos dias no mês?"');
		await page.click('text="Quanto custa a mensalidade?"');
		await expect(page.locator('.answer')).toBeVisible();
		await page.click('text="Quanto custa a mensalidade?"');
		await expect(page.locator('.answer')).toBeHidden();
	});

	test('should open and close third faq question', async ({ page }) => {
		await page.waitForSelector('text="Quantas modalidades estão disponíveis?"');
		await page.click('text="Quanto custa a mensalidade?"');
		await expect(page.locator('.answer')).toBeVisible();
		await page.click('text="Quanto custa a mensalidade?"');
		await expect(page.locator('.answer')).toBeHidden();
	});
});
