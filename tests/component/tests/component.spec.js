const { test, expect } = require('@playwright/test');

test('PageConfig', async ({ page }) => {
  await page.setContent(`
    <div class="my-component">
       <br>
    </div>
  `);

  await expect(page.locator('.my-component')).toHaveScreenshot();
});
