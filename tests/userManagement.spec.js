const { test } = require('@playwright/test');

test('User Management Flow - OrangeHRM', async ({ page }) => {

  // Open application
  await page.goto('https://opensource-demo.orangehrmlive.com');

  // Login
  await page.fill('input[name="username"]', 'Admin');
  await page.fill('input[name="password"]', 'admin123');
  await page.click('button[type="submit"]');

  // Navigate to Admin module
  await page.click('text=Admin');

});
