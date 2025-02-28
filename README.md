# Practice task: Setup Allure reporter for CoffeeCart test framework

## Preparation:
1. Open the forked repo in VSCode.
2. Create a new branch: git checkout -b added_article_test
3. Run the installation commands `npm ci` & `npx playwright install`.

## Main task:
1. Install the `Allure adapter` and `command-line tool` using the instructions from the topic.
2. Add allure reporter to the `playwright.config.js` file.
3. Trigger the tests with `npx playwright test`.
4. Generate the report using `allure serve allure-results`. 
5. Pay attention to the tests hierarchy in the `Suites`, `Behaviours` and `Packages` tabs.
6. Add allure hierarchy attributes: `parentSuite`, `suite` and `subSuite` for each test.
7. Add `severity` attribute to each test. 
8. Delete the `allure-results` folder.
7. Trigger the tests with `npx playwright test`.
8. Generate the report using `allure serve allure-results`. 
9. Note that the hierarchy changed in the `Suites` tab, while `Behaviours` and `Packages` remains the same. 
10. Add allure hierarchy attributes: `epic`, `feature` and `user story` for each test.
11. Delete the `allure-results` folder.
12. Trigger the tests with `npx playwright test`.
13. Generate the report using `allure serve allure-results`. 
14. Note that the hierarchy changed in the `Behaviours` tab, while `Packages` remains the same. 
15. Check that the tests' severities are displayed in the Graphs tab > Severity. 


## Task Reporting: 
1. Add and commit all your updates. 
2. Push the code to the origin.
3. Create PR for your changes. 
4. Fix all the suggestions from the Code review until PR is approved.  

