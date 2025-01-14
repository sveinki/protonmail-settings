import React from 'react';
import { c } from 'ttag';
import { AddressesSection, RelatedSettingsSection, useOrganization } from 'react-components';

import Page from '../components/Page';

export const getAddressesPage = () => {
    return {
        text: c('Title').t`Addresses`,
        route: '/settings/addresses',
        icon: 'email-address',
        sections: [
            {
                text: c('Title').t`Addresses`,
                id: 'addresses'
            },
            {
                text: c('Title').t`Related settings`,
                id: 'related-settings',
                hide: true
            }
        ]
    };
};

const getList = ({ MaxMembers = 0, MaxAddresses = 0 }) => {
    if (MaxMembers > 1) {
        return [
            {
                icon: 'domains',
                text: c('Info')
                    .t`Go to the Domain settings if you want to create  and manage custom domains for your users.`,
                link: c('Link').t`Domain settings`,
                to: '/settings/domains'
            },
            {
                icon: 'contacts-group-people',
                text: c('Info')
                    .t`Go to User Settings if you want to create and manage the list of users in your organization.`,
                link: c('Link').t`Users settings`,
                to: '/settings/members'
            }
        ];
    }

    if (MaxAddresses > 1) {
        return [
            {
                icon: 'domains',
                text: c('Info')
                    .t`Go to the Domain settings if you want to create  and manage custom domains for your users.`,
                link: c('Link').t`Domain settings`,
                to: '/settings/domains'
            },
            {
                icon: 'email-address',
                text: c('Info')
                    .t`Upgrade to a multi-user plan if you want to create and manage the users of your organization.`,
                link: c('Link').t`Upgrade`,
                to: '/settings/subscription'
            }
        ];
    }

    return [
        {
            icon: 'domains',
            text: c('Info').t`Upgrade to a paid plan if you want to create and manage custom domains.`,
            link: c('Link').t`Upgrade`,
            to: '/settings/subscription'
        },
        {
            icon: 'email-address',
            text: c('Info')
                .t`Upgrade to a multi-user plan if you want to create and manage the users of your organization.`,
            link: c('Link').t`Upgrade`,
            to: '/settings/subscription'
        }
    ];
};

const AddressesContainer = () => {
    const [organization] = useOrganization();
    return (
        <Page config={getAddressesPage()}>
            <AddressesSection />
            <RelatedSettingsSection list={getList(organization)} />
        </Page>
    );
};

export default AddressesContainer;
