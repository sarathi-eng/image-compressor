import { test, expect } from '@playwright/test';

test('homepage has title and links to blog', async ({ page }) => {
  await page.goto('http://localhost:3000');
  await expect(page).toHaveTitle(/CompressPro/);
  const blogLink = page.getByRole('link', { name: 'Blog', exact: true });
  await expect(blogLink).toBeVisible();
});

test('sitemap.xml is accessible', async ({ page }) => {
  const response = await page.goto('http://localhost:3000/sitemap.xml');
  expect(response?.status()).toBe(200);
  const content = await response?.text();
  expect(content).toContain('https://compresspro.alfo.online');
  expect(content).toContain('/blog/importance-of-image-compression-for-seo');
});

test('robots.txt is accessible', async ({ page }) => {
  const response = await page.goto('http://localhost:3000/robots.txt');
  expect(response?.status()).toBe(200);
  const content = await response?.text();
  expect(content).toContain('Sitemap: https://compresspro.alfo.online/sitemap.xml');
});

test('blog index page shows posts', async ({ page }) => {
  await page.goto('http://localhost:3000/blog');
  await expect(page.getByText('Image Optimization Blog')).toBeVisible();
  await expect(page.getByText('The Importance of Image Compression for SEO')).toBeVisible();
});

test('individual blog post page works', async ({ page }) => {
  await page.goto('http://localhost:3000/blog/importance-of-image-compression-for-seo');
  await expect(page.getByRole('heading', { name: 'The Importance of Image Compression for SEO' })).toBeVisible();
});

test('landing pages work', async ({ page }) => {
  await page.goto('http://localhost:3000/compress-png');
  await expect(page.getByRole('heading', { name: 'Compress PNG Online' })).toBeVisible();

  await page.goto('http://localhost:3000/compress-jpeg');
  await expect(page.getByRole('heading', { name: 'Compress JPEG Online' })).toBeVisible();

  await page.goto('http://localhost:3000/compress-webp');
  await expect(page.getByRole('heading', { name: 'Compress WebP Online' })).toBeVisible();
});
