type NavLink = {
    title: string;
    linkTo: string;
    subMenu?: NavLink[];
};

export const mainNavigationLinks: NavLink[] = [
    {
        title: 'Conseil central',
        linkTo: '/',
    },
    {
        title: 'Surveillance',
        linkTo: '/',
        subMenu: [
            {
                title: 'CCSP',
                linkTo: '/',
            },
            {
                title: 'Commissions de surveillance',
                linkTo: '/',
            },
        ],
    },
    {
        title: 'Avis',
        linkTo: '/',
    },
    {
        title: 'Publications',
        linkTo: '/',
    },
    {
        title: 'Mécanisme de prévention',
        linkTo: '/',
    },
    {
        title: 'Je suis détenu(e)',
        linkTo: '/',
    },
];

export const secondaryNavigationLinks: NavLink[] = [
    {
        title: 'Actualités',
        linkTo: '/',
    },
    {
        title: 'Jurisprudence',
        linkTo: '/',
    },
    {
        title: 'Devenir membre',
        linkTo: '/',
    },
    {
        title: 'Contact',
        linkTo: '/',
    },
    {
        title: 'Liens utiles',
        linkTo: '/',
    },
];

export const legalNavigationLinks: NavLink[] = [
    {
        title: 'Police de confidentialité',
        linkTo: '/',
    },
    {
        title: 'Police de cookies',
        linkTo: '/',
    },
    {
        title: 'Termes et conditions',
        linkTo: '/',
    },
];
