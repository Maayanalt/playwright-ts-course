import { test } from '@playwright/test';
import LoginPage from '../pages/LoginPage';

test('sanity test', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.loginToApplication();

    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
    await page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
    await page.locator('[data-test="shopping-cart-link"]').click();
    await page.locator('[data-test="checkout"]').click();
    await page.locator('[data-test="firstName"]').click();
    await page.locator('[data-test="firstName"]').fill('maayan');
    await page.locator('[data-test="lastName"]').click();
    await page.locator('[data-test="lastName"]').fill('rid');
    await page.locator('[data-test="postalCode"]').click();
    await page.locator('[data-test="postalCode"]').fill('741528');
    await page.locator('[data-test="continue"]').click();
    await page.locator('[data-test="finish"]').click();
    await page.locator('[data-test="back-to-products"]').click();
    await page.getByRole('button', { name: 'Open Menu' }).click();
    await page.locator('[data-test="reset-sidebar-link"]').click();
    await page.locator('[data-test="logout-sidebar-link"]').click();
});

test('demo test_2', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.loginToApplication();
});