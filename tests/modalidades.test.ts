import { test, expect } from '@playwright/test';

test.describe('Tests for modalidades page', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto('https://kevincamussi.github.io/academialocal_svelte/modalidades');
	});

	test('should render correctly', async ({ page }) => {
		await page.waitForSelector('h1');
		await expect(page.locator('h1')).toHaveText('Temos a modalidade certa para você');
	});

	test('should open musculação page', async ({ page }) => {
		await page.waitForSelector('.card h2:text("Musculação")');
		await page.click('.card h2:text("Musculação")');
		await expect(page).toHaveURL(
			'https://kevincamussi.github.io/academialocal_svelte/modalidades/musculacao'
		);
	});

	test('should open crossfit page', async ({ page }) => {
		await page.waitForSelector('.card h2:text("Crossfit")');
		await page.click('.card h2:text("Crossfit")');
		await expect(page).toHaveURL(
			'https://kevincamussi.github.io/academialocal_svelte/modalidades/crossfit'
		);
	});

	test('should open alongamento page', async ({ page }) => {
		await page.waitForSelector('.card h2:text("Alongamento")');
		await page.click('.card h2:text("Alongamento")');
		await expect(page).toHaveURL(
			'https://kevincamussi.github.io/academialocal_svelte/modalidades/alongamento'
		);
	});

	test('should open exercícios em grupo page', async ({ page }) => {
		await page.waitForSelector('.card h2:text("Exercícios em grupo")');
		await page.click('.card h2:text("Exercícios em grupo")');
		await expect(page).toHaveURL(
			'https://kevincamussi.github.io/academialocal_svelte/modalidades/exercicios-em-grupo'
		);
	});

	test('should open natação page', async ({ page }) => {
		await page.waitForSelector('.card h2:text("Natação")');
		await page.click('.card h2:text("Natação")');
		await expect(page).toHaveURL(
			'https://kevincamussi.github.io/academialocal_svelte/modalidades/natacao'
		);
	});
});
