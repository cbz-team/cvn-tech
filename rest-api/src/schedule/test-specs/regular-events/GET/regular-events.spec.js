import FactoryApi from "../../../../common/api/FactoryApi";
import AppIds from "../../../../../../e2e-core/src/shared/AppIds";
import ApiVerification from '../../../../common/api-verification/ApiVerification';

describe('GET schedule/events', () => {
    let expectedData, actualData, eventId, scheduleApi;

    before('Load API', () => {
        scheduleApi = new FactoryApi(AppIds.SCHEDULE);
    });

    before('Load testing data', () => {
        expectedData = require('./expected-response.data').default;
    });

    before('Prepare a new event', () => {
        const eventData = require('./created-event.requested.data').default;
        const createdEvent = scheduleApi.createEvent(eventData);

        expectedData.data =  createdEvent.data;
        eventId = createdEvent.data.id;
    });

    it('#restsh2 should get the created event successfully', () => {
        actualData = scheduleApi.getEventById(eventId);

        ApiVerification.verify(expectedData, actualData);
    });
});
