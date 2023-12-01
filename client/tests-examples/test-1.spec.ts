import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:8080/');
  await page.goto('http://localhost:8080/#/');
  await page.goto('http://localhost:8080/#/songs');
  await page.getByRole('link', { name: 'Login' }).click();
  await page.getByLabel('Email').click();
  await page.getByLabel('Email').fill('New');
  
  await page.getByLabel('Email').press('Tab');
  await page.getByLabel('Password').fill('New');
  await page.getByRole('button', { name: 'Login' }).click();
});