import { test } from '../../_fixtures/fixtures';
import { setAllureMetadata } from '../../_helpers/allureTestMetadata';

test(`New coffee can be added to the  Menu`, async ({}) => {
    await setAllureMetadata({
        parentSuite: 'Admin site',
        suite: 'Edit menu',
        subSuite: 'Add coffee',
        epic: 'Menu management',
        feature: 'Edit menu',
        story: 'Add new coffee',
        severity: 'normal',
    });

    // This is a fake example test.
});
