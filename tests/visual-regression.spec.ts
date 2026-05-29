import { test, expect } from '@playwright/test';

const PAGES = [
  { name: 'home', path: '/' },
  { name: 'engagements', path: '/engagements' },
  { name: 'contact', path: '/contact' },
] as const;

for (const { name, path } of PAGES) {
  test.describe(`${name} page`, () => {
    test('renders above the fold', async ({ page }) => {
      await page.goto(path, { waitUntil: 'networkidle' });
      await page.waitForTimeout(800);
      await expect(page).toHaveScreenshot(`${name}-above-fold.png`, {
        fullPage: false,
        maxDiffPixelRatio: 0.02,
      });
    });

    test('renders full page', async ({ page }) => {
      await page.goto(path, { waitUntil: 'networkidle' });
      await page.waitForTimeout(1200);
      await expect(page).toHaveScreenshot(`${name}-full-page.png`, {
        fullPage: true,
        maxDiffPixelRatio: 0.02,
      });
    });
  });
}

test.describe('SEO', () => {
  test('home has meta tags', async ({ page }) => {
    await page.goto('/', { waitUntil: 'domcontentloaded' });
    const title = await page.title();
    expect(title.length).toBeGreaterThan(10);
    const description = await page.getAttribute('meta[name="description"]', 'content');
    expect(description).toBeTruthy();
    const ogImage = await page.getAttribute('meta[property="og:image"]', 'content');
    expect(ogImage).toContain('og.svg');
  });
});
