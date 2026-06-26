import { test } from '../../../_fixtures/fixtures';
import { setAllureMetadata } from '../../../_helpers/allureTestMetadata';
import { totalPriceFormatStr } from '../../../../src/common/helpers/priceFormatters';
import { COFFEE_NAMES, COFFEE_PRICES } from '../../../../src/constants';

let testParameters = [];

for (const [key, value] of Object.entries(COFFEE_NAMES)) {
    testParameters.push({ coffee: value, price: COFFEE_PRICES[key] });
}

testParameters.forEach(({ coffee, price }) => {
    test(`Total cost is updated after clicking the ${coffee} cup`, async ({ menuPage }) => {
        await setAllureMetadata({
            parentSuite: 'Customer site',
            suite: 'Menu',
            subSuite: 'Add coffee',
            epic: 'Ordering coffee',
            feature: 'Menu',
            story: 'Add coffee from menu',
            severity: 'critical',
        });

        const totalPriceStr = totalPriceFormatStr(price);

        await menuPage.open();
        await menuPage.clickCoffeeCup(coffee);

        await menuPage.assertTotalCheckoutContainsValue(totalPriceStr);
    });
});
