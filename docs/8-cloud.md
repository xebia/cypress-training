# Connecting to the Cypress Cloud

> Connecting to the Cypress Cloud (a.k.a. Dahsboard)

Cypress has a cloud service that you can use to store and analyse your testresults, called the 'Cypress Cloud'.
This service is free to use for open source projects, and has a free trial period for private projects.
Within this service, you can analyse your flaky tests, slow tests and more.

This exercise will focus on connecting your project to the Cypress Cloud.

## Exercise: Connecting to the Cypress Cloud

1. If you have not done it yet, create a free Cypress Cloud account -> <https://cloud.cypress.io/>
2. Create a project within your Cypress Cloud.
3. Configure your project to use the Cypress Cloud.
4. Run your tests from the commandline against the Cypress Cloud

## Exercise: run a failing test against the Cypress Cloud

I have created a flaky test for you. This test will fail sometimes, and pass sometimes.<br>
with the `Cypress._.times(50, (i) => {` we iterate this test 50 times. <br>
The iterator `i` is used to be able to flake the test.

Now run the test from your commandline against the Cypress Cloud.<br>
Your Cypress TestRunner will run the test on your local machine and push the results to the Cypress Cloud.<br>
There you can analyse the results.

<!-- div:title-panel -->
<!-- div:left-panel -->

<!-- panels:start -->
<!-- tabs:start -->
<!-- tab: flaky test -->

```javascript
function isOddOrEven(number) {
  if (number % 2 == 0) {
    return 'even';
  } else {
    return 'odd';
  }
}

describe('a flaky test', () => {
  Cypress._.times(50, (i) => {
    it('should fail sometimes', function () {
      expect(isOddOrEven(i)).to.equal('even');
    });
  });
});
```

<!-- tabs:end -->
