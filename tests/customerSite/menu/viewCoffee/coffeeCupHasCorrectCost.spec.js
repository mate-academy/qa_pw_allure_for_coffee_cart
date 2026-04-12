import { test } from '../../../_fixtures/fixtures';
import { priceFormatStr } from '../../../../src/common/helpers/priceFormatters';
import { COFFEE_NAMES, COFFEE_PRICES } from '../../../../src/constants';
import {
  epic,
  feature,
  parentSuite,
  severity,
  story,
  subSuite,
  suite,
} from 'allure-js-commons';

let testParameters = [];

for (const [key, value] of Object.entries(COFFEE_NAMES)) {
  testParameters.push({ coffee: value, price: COFFEE_PRICES[key] });
}

testParameters.forEach(({ coffee, price }) => {
  test(`The ${coffee} cup has correct cost`, async ({ menuPage }) => {
    await parentSuite(`Customer site`);
    await suite('Menu');
    await subSuite('View coffee');
    await severity('critical');

    await epic('Customer site');
    await feature('Menu');
    await story('User is able to see correct cost for the coffee cup');

    const priceStr = priceFormatStr(price);

    await menuPage.open();

    await menuPage.assertCoffeeCupCostHasValue(coffee, priceStr);
  });
});
