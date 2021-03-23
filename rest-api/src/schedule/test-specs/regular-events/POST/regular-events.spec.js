import FactoryApi from '../../../../common/api/FactoryApi';
import AppIds from '../../../../../../e2e-core/src/shared/AppIds';
import ApiVerification from '../../../../common/api-verification/ApiVerification';

describe('POST schedule/events', () => {
    let eventData, expectedData, actualData, scheduleApi;

    before('Load API', () => {
        scheduleApi = new FactoryApi(AppIds.SCHEDULE);
    });

    before('Load testing data', () => {
        eventData = require('./requested.data').default;
        expectedData = require('./expected-response.data').default;
    });

    it('#restsh2 should create a public regular event successfully', () => {
        actualData = scheduleApi.createEvent(eventData);

        ApiVerification.verify(expectedData, actualData);
    });
});
