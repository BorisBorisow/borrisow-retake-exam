const { test, expect } = require('@playwright/test');

test('Check add book page', async ({ page }) => {
    await page.goto('https://borrisow-retake-exam.onrender.com/add-book');
    const form = await page.$('list');
    expect(form).toBeFalsy();
  });
  