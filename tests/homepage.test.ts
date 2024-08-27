import { expect, test } from '@playwright/test';

test.describe('Tests for homepage', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto('https://kevincamussi.github.io/academialocal_svelte/');
	});

	test('should render correctly', async ({ page }) => {
		await expect(page).toHaveTitle('Academia Local');
	});

	test('should go to homepage', async ({ page }) => {
		await page.waitForSelector('text="Home"');
		await page.click('text="Home"');
		await expect(page.locator('h1')).toHaveText('Você está pronto para o desafio?');
	});

	test('should go to Sobre page via nav button', async ({ page }) => {
		await page.waitForSelector('text="Sobre"');
		await page.click('text="Sobre"');
		await expect(page.locator('h1')).toHaveText('Conheça a academia que mais cresce na cidade!');
	});

	test('should go to Sobre page via ul button', async ({ page }) => {
		await page.waitForSelector('.intro__wrapper a');
		await page.click('.intro__wrapper a');
		await expect(page.locator('h1')).toHaveText('Conheça a academia que mais cresce na cidade!');
	});

	test('should go to Modalidades page via ul button', async ({ page }) => {
		await page.waitForSelector('text="Modalidades"');
		await page.click('text="Modalidades"');
		await expect(page.locator('h1')).toHaveText('Temos a modalidade certa para você');
	});

	test('should go to contact section', async ({ page }) => {
		await page.waitForSelector('text="Modalidades"');
		await page.click('a[href="#contato"]');
		await expect(page).toHaveURL('https://kevincamussi.github.io/academialocal_svelte/#contato');
	});

	test('should open whatsapp page', async ({ page }) => {
		await page.waitForSelector('text="WhatsApp"');
		await page.click('text="WhatsApp"');
		await expect(page).toHaveURL('https://whatsa.me/5599999999999');
	});

	test('should open mail page', async ({ page }) => {
		await page.waitForSelector('text="E-mail"');
		await page.click('text="E-mail"');

		const mailtoLink = page.locator('text="E-mail"');
		await expect(mailtoLink).toBeVisible();

		const hrefValue = await mailtoLink.getAttribute('href');
		await mailtoLink.click();

		await expect(hrefValue).toBe('mailto:teste@teste.com.br');
	});
});
