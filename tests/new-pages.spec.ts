import { test, expect } from '@playwright/test';

const baseUrl = 'http://localhost:3000';

test.describe('New Core Pages', () => {
  test('FAQ page is accessible and has content', async ({ page }) => {
    await page.goto(`${baseUrl}/faq`);
    await expect(page.locator('h1')).toContainText('Frequently Asked Questions');
    await expect(page.locator('h2').filter({ hasText: 'Is CompressPro free to use?' })).toBeVisible();
  });

  test('Pricing page is accessible and has content', async ({ page }) => {
    await page.goto(`${baseUrl}/pricing`);
    await expect(page.locator('h1')).toContainText('Simple Pricing');
    await expect(page.locator('h2').filter({ hasText: 'Free Forever' })).toBeVisible();
  });

  test('Security page is accessible and has content', async ({ page }) => {
    await page.goto(`${baseUrl}/security`);
    await expect(page.locator('h1')).toContainText('Security & Privacy');
    await expect(page.locator('h2').filter({ hasText: 'Local Browser Processing' })).toBeVisible();
  });
});

test.describe('New Blog Content', () => {
  test('Comparison page is accessible', async ({ page }) => {
    await page.goto(`${baseUrl}/blog/compresspro-vs-tinypng`);
    await expect(page.locator('h1')).toContainText('CompressPro vs. TinyPNG');
    await expect(page.locator('h2').filter({ hasText: 'Quick Answer' })).toBeVisible();
    await expect(page.locator('table')).toBeVisible();
  });

  test('Micro-answer page is accessible', async ({ page }) => {
    await page.goto(`${baseUrl}/blog/how-to-compress-jpg-micro`);
    await expect(page.locator('h1')).toContainText('How to compress JPG?');
    await expect(page.locator('h2').filter({ hasText: 'Quick Answer' })).toBeVisible();
  });
});
