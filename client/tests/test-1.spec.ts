import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:8080/#/');
  await page.goto('http://localhost:8080/#/songs');
  await page.getByRole('link', { name: 'add' }).click();
  await page.getByLabel('Title').click();
  await page.getByLabel('Title').fill('Naveen');
  await page.getByLabel('Title').press('Tab');
  await page.getByLabel('Artist').fill('Naveen');
  await page.getByLabel('Genre').click();
  await page.getByLabel('Genre').fill('Pop');
  await page.getByLabel('Genre').press('Tab');
  await page.getByLabel('Album', { exact: true }).fill('NewNaveen');
  await page.getByLabel('Album Image Url').fill('/Naveen/Album');
  await page.getByLabel('YouTube ID').click();
  await page.getByLabel('YouTube ID').fill('youtube/naveen');
  await page.getByLabel('Tab').click();
  await page.getByLabel('Tab').fill('Spotify Naveen');
  await page.getByLabel('Lyrics').click();
  await page.getByLabel('Lyrics').fill('Naveen New gets going');
  await page.getByRole('button', { name: 'Create Song' }).click();
});