import { test, expect } from '@playwright/test';

test('should get song', async ({ request }) => {
  const newIssue = await request.get(`http://localhost:8081/songs`);
  expect(newIssue.ok()).toBeTruthy();
  console.log(newIssue);
  expect(await newIssue.json()).toContainEqual(expect.objectContaining({
    'id': 1,
    'title': 'Nevermind',
    'artist': 'Nirvana',
    'genre': 'Alternative Rock',
    'album': 'Nevermind',
    'albumImageUrl': 'https://is3-ssl.mzstatic.com/image/thumb/Features/d0/cc/62/dj.nanioukp.jpg/268x0w.jpg',
    'youtubeId': 'm-ofL_3EZyE',
    'lyrics': '',
    'tab': '',
    'createdAt': '2018-02-13T12:56:24.432Z',
    'updatedAt': '2018-02-13T12:56:24.432Z',
  }));
});