import React from 'react';
import { MembersSection, RelatedSettingsSection } from 'react-components';
import { c } from 'ttag';
import { PERMISSIONS } from 'proton-shared/lib/constants';

import Page from '../components/Page';

const { ADMIN, MULTI_USERS } = PERMISSIONS;

export const getMembersPage = () => {
    return {
        text: c('Title').t`Users`,
        route: '/settings/members',
        icon: 'contacts-group-people',
        permissions: [ADMIN, MULTI_USERS],
        sections: [
            {
                text: c('Title').t`Users`,
                id: 'members'
            },
            {
                text: c('Title').t`Related settings`,
                id: 'related-settings',
                hide: true
            }
        ]
    };
};

const MembersContainer = () => {
    return (
        <Page config={getMembersPage()}>
            <MembersSection />
            <RelatedSettingsSection
                list={[
                    {
                        icon: 'email-address',
                        text: c('Info')
                            .t`Go to the address settings if you want to create and manage addresses for your users.`,
                        link: c('Link').t`Address settings`,
                        to: '/settings/addresses'
                    }
                ]}
            />
        </Page>
    );
};

export default MembersContainer;
