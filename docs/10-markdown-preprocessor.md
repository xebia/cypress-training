# Setup the Markdown Preprocessor

Installing and running the Markdown Preprocessor will help you understand the workings of Cypress,
experiment with the Cypress API and get a feel for the Cypress configuration.

## Install the Markdown PreProcessor

Follow the installation guide here:
<https://github.com/bahmutov/cypress-markdown-Preprocessor>

Try to understand at your own pace what you are doing at each step. Are you able to explain to your neighbour what you are doing?

## Exercise: Create a test in markdown and use the following snippet:

<!-- fiddle Example -->

```html
<div id="message"></div>
<script>
  const randomTime = Math.floor(Math.random() * 10) + 1;

  setTimeout(() => {
    document.getElementById('message').innerHTML = 'Hello';
  }, randomTime * 1000);
</script>
```

```js
cy.contains('#message', 'Hello', { timeout: 3000 });
```

<!-- fiddle.end -->

Questions:

- why is this test failing
- how can you make this test pass
