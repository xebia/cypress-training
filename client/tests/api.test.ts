import { test, expect, request } from '@playwright/test';


test('give 200 response', async ({ request }) => {
    
    
    const responseCode = await request.get('http://localhost:8081/songs');

    console.log(responseCode);

    expect(responseCode.ok()).toBeTruthy;

    
    expect(await responseCode.json()).toContainEqual(expect.objectContaining({
      'id': 1,
      'title': 'Nevermind',
    }));
    
});
