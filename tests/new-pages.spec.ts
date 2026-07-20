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

test.describe('Week 2 Monday New Content Pages', () => {
  test('Modern Image Codecs guide is accessible', async ({ page }) => {
    await page.goto(`${baseUrl}/blog/ultimate-guide-to-modern-image-codecs`);
    await expect(page.locator('h1')).toContainText('Modern Image Codecs: Complete Guide');
    await expect(page.locator('h2').filter({ hasText: 'Why Modern Image Codecs Matter' })).toBeVisible();
  });

  test('WebP vs AVIF comparison guide is accessible', async ({ page }) => {
    await page.goto(`${baseUrl}/blog/webp-vs-avif-2026-comparison`);
    await expect(page.locator('h1')).toContainText('WebP vs. AVIF: Complete Guide');
    await expect(page.locator('h2').filter({ hasText: 'Top 3 Differences Between WebP and AVIF' })).toBeVisible();
  });

  test('JPEG XL guide is accessible', async ({ page }) => {
    await page.goto(`${baseUrl}/blog/jpeg-xl-future-web-images`);
    await expect(page.locator('h1')).toContainText('JPEG XL: Complete Guide');
    await expect(page.locator('h2').filter({ hasText: 'Top 3 Features of JPEG XL' })).toBeVisible();
  });

  test('AVIF vs JPEG comparison page is accessible', async ({ page }) => {
    await page.goto(`${baseUrl}/blog/avif-vs-jpeg-web-performance-2026`);
    await expect(page.locator('h1')).toContainText('AVIF vs. JPEG: Which Compression Format');
    await expect(page.locator('h2').filter({ hasText: 'Deep Dive: AVIF' })).toBeVisible();
    await expect(page.locator('table')).toBeVisible();
  });

  test('Responsive setups use case guide is accessible', async ({ page }) => {
    await page.goto(`${baseUrl}/blog/responsive-image-setups-web-performance`);
    await expect(page.locator('h1')).toContainText('File Compression for Responsive Web Layouts');
    await expect(page.locator('h2').filter({ hasText: 'Step-by-Step Workflow Using CompressPro' })).toBeVisible();
  });

  test('SVG compression deep-dive is accessible', async ({ page }) => {
    await page.goto(`${baseUrl}/blog/svg-compression-complete-guide-2026`);
    await expect(page.locator('h1')).toContainText('The Complete Guide to SVG Compression');
    await expect(page.locator('h2').filter({ hasText: 'How to Compress SVG Effectively' })).toBeVisible();
  });

  test('Micro-answers are accessible and valid', async ({ page }) => {
    await page.goto(`${baseUrl}/blog/what-is-jpeg-xl-micro`);
    await expect(page.locator('h1')).toContainText('What is JPEG XL?');
    await expect(page.locator('h2').filter({ hasText: 'How Does JPEG XL Work?' })).toBeVisible();
  });
});
