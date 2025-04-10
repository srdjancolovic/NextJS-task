type FooterLabelTypes = {
    contactDetails: string;
    quickAccess: string;
    legal: string;
};

type ContactDetailsTypes = {
    address: string;
    email: string;
    phoneNumber: string;
};

export const footerLabels: FooterLabelTypes = {
    contactDetails: 'Coordonnées',
    quickAccess: 'Accès rapides',
    legal: 'Légal',
};

export const contactDetails: ContactDetailsTypes = {
    address: 'Rue de Louvain, 48/2, 1000 Bruxelles',
    email: 'info@ccsp-belgium.be',
    phoneNumber: '+32 (0)2 549 94 70',
};
