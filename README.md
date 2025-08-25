# Setup Allure Reporter for CoffeeCart Test Framework

## Preparation

1. Open the forked repo in VSCode.
2. Create a new branch by running git checkout -b task_solution.
3. Run the installation commands:

    - `npm ci`
    - `npx playwright install`

## Task

1. Install the Allure Adapter and Command-Line Tool using the instructions provided in the theory section.
2. Add the Allure reporter to the `playwright.config.js` file.
3. Add `/allure-results/` to the `.gitignore` file.
4. Run the tests with `npx playwright test`.
5. Generate a test report using `allure serve allure-results`. Note the test hierarchy in the **Suites**, **Behaviours**, and **Packages** tabs.
6. Add Allure hierarchy attributes: `parentSuite`, `suite`, and `subSuite` for each test.
7. Add a `severity` attribute to each test.
8. Delete the `allure-results` folder.
9. Run the tests again with `npx playwright test`.
10. Regenerate a test report using `allure serve allure-results`. Note that the hierarchy in the **Suites** tab has changed, while **Behaviours** and **Packages** remained the same. .
11. Add Allure hierarchy attributes: `epic`, `feature`, and `user story` for each test.
12. Delete the `allure-results` folder.
13. Run the tests again with `npx playwright test`.
14. Regenerate a test report using `allure serve allure-results`. Note that the in the **Behaviours** tab has changed, while **Packages** remained the same.
15. Check that the tests' severities are displayed in the **Graphs** → **Severity** tab.

## Task Reporting

1. Add and commit all your updates.
2. Push the code to the origin.
3. Create a PR for your changes.
4. Keep implementing suggestions from code review until your PR is approved.