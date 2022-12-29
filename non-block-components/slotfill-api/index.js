import { registerPlugin } from '@wordpress/plugins';
import { __experimentalMainDashboardButton as MainDashboardButton } from '@wordpress/edit-post';

const MainDashboardButtonTest = () => (
    <MainDashboardButton>
        Custom main dashboard button content
    </MainDashboardButton>
);

registerPlugin( 'main-dashboard-button-test', {
    render: MainDashboardButtonTest,
} );