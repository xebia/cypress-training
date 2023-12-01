import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:8080/');
  await page.goto('http://localhost:8080/#/songs');
  await page.getByRole('link', { name: 'add' }).click();
  await page.getByLabel('Title').fill('Calm Down');
  
  await page.getByLabel('Artist').click();
  await page.getByLabel('Artist').fill('Selena');

  await page.getByLabel('Genre').click()
  await page.getByLabel('Genre').fill('pop');

  await page.getByLabel('Album', { exact: true }).click();
  await page.getByLabel('Album', { exact: true }).fill('Calm down Album')
  ;
  await page.getByLabel('Album Image Url').click();
  await page.getByLabel('Album Image Url').fill('http://google.com/caldown');
  await page.getByLabel('Album Image Url').click();
  await page.getByLabel('Album Image Url').fill('http://google.com/');

  await page.getByLabel('YouTube ID').click();
  await page.getByLabel('YouTube ID').fill('http://baby calm dwown');
  await page.getByLabel('YouTube ID').click();

  await page.getByLabel('Tab').click();
  await page.getByLabel('Tab').fill('tab name');
  
  await page.getByLabel('YouTube ID').click();
  await page.getByLabel('YouTube ID').fill('calm down');

  await page.getByLabel('Lyrics').click();
  await page.getByLabel('Lyrics').fill('lyrics');
  await page.getByRole('button', { name: 'Create Song' }).click();
  
});