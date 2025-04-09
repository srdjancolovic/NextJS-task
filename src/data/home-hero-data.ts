export type H1UnderlineTextTypes = {
    text: string;
    underline: boolean;
};

export type HeadingData = {
    mainTitle: H1UnderlineTextTypes[];
    description: string;
};

export const homeHeroHeadingData: HeadingData = {
    mainTitle: [
        { text: 'Garantir', underline: false },
        { text: 'les droits', underline: true },
        { text: 'et', underline: false },
        { text: 'la dignité humaine', underline: true },
        { text: 'des personnes détenues', underline: false },
    ],
    description:
        'Le Conseil central de surveillance pénitentiaire et 36 commissions de surveillance exercent une surveillance indépendante des prisons et du traitement réservé aux personnes détenues.',
};
