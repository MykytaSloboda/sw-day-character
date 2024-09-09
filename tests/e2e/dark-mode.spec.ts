import { test, expect } from '@playwright/test';
test.describe('DarkModeToggle Component', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('http://127.0.0.1:3001');
        await page.emulateMedia({ colorScheme: 'light' });
      });
test('should display light mode icon by default', async ({ page }) => {
    const icon = await page.locator('[data-test-theme-mode] img');
    const src = await icon.getAttribute('src');
    expect(src).toContain('chewbacca-svgrepo-com.svg');
  });

  test('should toggle theme and icon on button click', async ({ page }) => {
    const button = page.locator('[data-test-theme-mode]');
    const icon = page.locator('[data-test-theme-mode] img');

    await button.click();

    let src = await icon.getAttribute('src');
    expect(src).toContain('darth-vader-svgrepo-com.svg');

    await button.click();

    src = await icon.getAttribute('src');
    expect(src).toContain('chewbacca-svgrepo-com.svg');
  });
});
