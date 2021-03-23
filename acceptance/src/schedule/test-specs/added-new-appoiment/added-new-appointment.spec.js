import {sign_in} from '../../../../../e2e-core/src/authentication/components/sign-in';
import testData from './added-new-appointment.data';
import AddingAppointment from "../../../../../e2e-core/src/schedule/test-flows/AddingAppointment";
import ViewingAppointment from "../../../../../e2e-core/src/schedule/test-flows/ViewingAppointment";
import DeletingAppointment from "../../../../../e2e-core/src/schedule/test-flows/DeletingAppointment";

/* Focus: The spec name is a file name */
describe('AddingRegularAppointment', () => {
    before('Login Garoon testing site', () => {
        /* Sign in to Testing site scope */
        // In order login to Garoon site, use one of below options
        sign_in(testData.account);
        // or
        // new Authenticating(testData.account).login();
    });

    it('#sh1 add-regular-appointment should add an appointment successfully', () => {
        new AddingAppointment(testData.appointmentInfo).addRegularAppointment();

        new ViewingAppointment(testData.appointmentInfo).verifyAppointmentDetails();
    });

    after('Remove test data', () => {
        new DeletingAppointment(testData.appointmentInfo).deleteAppointmentOnDetailsPage();
    })
});
