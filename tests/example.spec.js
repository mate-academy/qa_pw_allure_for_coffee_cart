const { test, expect } = require('@playwright/test');

test.describe('Sample Test Suite', () => {
    test('Sample Test Case', async ({ page }) => {
        await page.goto('https://example.com');
        const title = await page.title();
        expect(title).toBe('Example Domain');
    });
});