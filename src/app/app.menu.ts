import { MenuItem } from '../fw/services/menu.service';

export let initialMenuItems: Array<MenuItem> = [
    {
        text: 'Dashboard',
        icon: 'glyphicon-dashboard',
        route: '/authenticated/dashboard',
        submenu: null
    },
    {
        text: 'Countries',
        icon: 'glyphicon-flag',
        route: null,
        submenu: [
            {
                text: 'Select',
                icon: 'glyphicon-expand',
                route: null,
                submenu: [
                    {
                        text: 'USA',
                        icon: 'glyphicon-flag',
                        route: '/authenticated/country-detail/USA',
                        submenu: null
                    },
                    {
                        text: 'India',
                        icon: 'glyphicon-flag',
                        route: '/authenticated/country-detail/India',
                        submenu: null
                    },
                    {
                        text: 'Switzerland',
                        icon: 'glyphicon-flag',
                        route: '/authenticated/country-detail/Switzerland',
                        submenu: null
                    }
                ]
            },
            {
                text: 'Top 3',
                icon: 'glyphicon-flag',
                route: '/authenticated/country-list/3',
                submenu: null
            },
            {
                text: 'Top 10',
                icon: 'glyphicon-flag',
                route: '/authenticated/country-list/10',
                submenu: null
            },
            {
                text: 'All',
                icon: 'glyphicon-flag',
                route: '/authenticated/country-list/0',
                submenu: null
            }
        ],
    },
    {
        text: 'Maintenance',
        icon: 'glyphicon-wrench',
        route: null,
        submenu: [
            {
                text: 'Country Maint',
                icon: 'glyphicon-th-list',
                route: '/authenticated/country-maint',
                submenu: null
            },
            {
                text: 'Settings',
                icon: 'glyphicon-cog',
                route: '/authenticated/settings',
                submenu: null
            }
        ]
    }
];
