import { test, expect } from '@playwright/test';

const BASE_URL = 'http://localhost:3000';

test('blog page loads', async ({ page }) => {
  const response = await page.goto(`${BASE_URL}/blog`);
  expect(response?.status()).toBe(200);
  await expect(page.locator('h1')).toContainText('Image Optimization Blog');
});

test('individual blog post loads', async ({ page }) => {
  const response = await page.goto(`${BASE_URL}/blog/importance-of-image-compression-for-seo`);
  expect(response?.status()).toBe(200);
  await expect(page.locator('h1')).toBeVisible();
});

test('new pillar page loads', async ({ page }) => {
  const response = await page.goto(`${BASE_URL}/blog/ultimate-guide-to-file-compression-2026`);
  expect(response?.status()).toBe(200);
  await expect(page.locator('h1')).toContainText('The Ultimate Guide to File Compression in 2026');
});

test('faq page loads', async ({ page }) => {
  const response = await page.goto(`${BASE_URL}/faq`);
  expect(response?.status()).toBe(200);
  await expect(page.locator('h1')).toContainText('Frequently Asked Questions');
});
