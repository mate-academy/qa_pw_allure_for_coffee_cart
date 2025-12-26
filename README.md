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
3. Add `/allure-results/` and `/allure-report/` to the `.gitignore` file.
4. Add Allure hierarchy attributes: `parentSuite`, `suite`, and `subSuite` for each test.
5. Add a `severity` attribute to each test.
6. Run the tests with `npx playwright test`.
7. Generate a test report using `allure serve allure-results`. Note how the hierarchy in the **Suites** and  **Behaviours** tab looks like.
8. Add Allure hierarchy attributes: `epic`, `feature`, and `user story` for each test.
9. Delete the `allure-results` folder.
10. Run the tests again with `npx playwright test`.
11. Regenerate a test report using `allure serve allure-results`. Note how the content of the **Behaviours** tab has changed. 
12. Check that the tests' severities are displayed in the **Graphs** → **Severity** tab.

## Task Reporting

1. Add and commit all your updates.
2. Push the code to the origin.
3. Create a PR for your changes.
4. Keep implementing suggestions from code review until your PR is approved.