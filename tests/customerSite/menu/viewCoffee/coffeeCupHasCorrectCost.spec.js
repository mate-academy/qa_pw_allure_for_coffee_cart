import { test } from '../../../_fixtures/fixtures';
import { setAllureMetadata } from '../../../_helpers/allureTestMetadata';
import { priceFormatStr } from '../../../../src/common/helpers/priceFormatters';
import { COFFEE_NAMES, COFFEE_PRICES } from '../../../../src/constants';

let testParameters = [];

for (const [key, value] of Object.entries(COFFEE_NAMES)) {
    testParameters.push({ coffee: value, price: COFFEE_PRICES[key] });
}

testParameters.forEach(({ coffee, price }) => {
    test(`The ${coffee} cup has correct cost`, async ({ menuPage }) => {
        await setAllureMetadata({
            parentSuite: 'Customer site',
            suite: 'Menu',
            subSuite: 'View coffee',
            epic: 'Ordering coffee',
            feature: 'Menu',
            story: 'View coffee prices',
            severity: 'normal',
        });

        const priceStr = priceFormatStr(price);

        await menuPage.open();

        await menuPage.assertCoffeeCupCostHasValue(coffee, priceStr);
    });
});
