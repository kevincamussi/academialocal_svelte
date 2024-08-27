import { expect, test } from '@playwright/test';

test.describe('Tests for homepage', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto('https://kevincamussi.github.io/academialocal_svelte/');
	});

	test('should render correctly', async ({ page }) => {
		await expect(page).toHaveTitle('Academia Local');
	});
});

// test('should have home in home page', async ({ page }) => {
// 	await page.goto('https://kevincamussi.github.io/academialocal_svelte/');
// 	const header = page.locator('.header__wrapper');
// 	await expect(header).toHaveText('Home');
// });
