import {
    Home
} from 'react-feather';

export const MENUITEMS = [
    {
           title: 'HOME', icon: Home, type: 'sub', badgeType: 'primary', active: false, children: [
        
            // { path: '/pages/master/manageemployees', title: 'ManageEmployees', type: 'link' },
            { path: '/pages/managedebtors',title: 'Managedebtors',type: 'link'},
            // { path: '/pages/dashboard', title: 'Dashboard', type: 'link' }
        ]
    }
]