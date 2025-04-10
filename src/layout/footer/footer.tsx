import { contactDetails, footerLabels } from '@/data/footer-data';
import {
    legalNavigationLinks,
    mainNavigationLinks,
    secondaryNavigationLinks,
} from '@/data/navigation-links-data';

import Container from '@/components/container/container';
import CustomLink from '@/components/custom-link/custom-link';
import Image from 'next/image';
import LanguageSwitcher from '@/components/language-switcher/language-switcher';
import Link from 'next/link';
import SocialLink from '@/components/social-link/social-link';
import Text from '@/components/text/text';
import logo from '../../../public/assets/logo/logo.svg';
import styles from './footer.module.scss';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Container>
                <div className={styles['footer__content']}>
                    <Link href="/">
                        <Image
                            src={logo}
                            alt="Logo"
                            className={styles['footer__logo']}
                        />
                    </Link>
                    <div className={styles['footer__data-layout']}>
                        <div className={styles['footer__data-layout-label']}>
                            <Text
                                content={footerLabels.contactDetails}
                                weight={500}
                                size={20}
                                lineHeight={135}
                                hasUnderlineTabletDesktop
                            />
                        </div>
                        <div className={styles['footer__data-layout-content']}>
                            <Text content={contactDetails.address} />
                            <CustomLink
                                linkText={contactDetails.email}
                                linkTo={`mailto:${contactDetails.email}`}
                            />
                            <CustomLink
                                linkText={contactDetails.phoneNumber}
                                linkTo={`tel:${contactDetails.phoneNumber}`}
                            />
                        </div>
                    </div>
                    <div className={styles['footer__data-layout']}>
                        <div className={styles['footer__data-layout-label']}>
                            <Text
                                content={footerLabels.quickAccess}
                                weight={500}
                                size={20}
                                lineHeight={135}
                                hasUnderlineTabletDesktop
                            />
                        </div>
                        <div className={styles['footer__links-columns']}>
                            <div className={styles['footer__links-group']}>
                                {mainNavigationLinks?.map((link) => {
                                    return (
                                        <div
                                            className={
                                                styles[
                                                    'footer__links-group--subgroup'
                                                ]
                                            }
                                            key={link.title}
                                        >
                                            <CustomLink
                                                key={link.title}
                                                linkText={link.title}
                                                linkTo={link.linkTo}
                                            />
                                            {link.subMenu?.map((subLink) => (
                                                <div
                                                    key={subLink.title}
                                                    className={
                                                        styles[
                                                            'footer__links-group--subgroup-links'
                                                        ]
                                                    }
                                                >
                                                    <CustomLink
                                                        linkText={subLink.title}
                                                        linkTo={subLink.linkTo}
                                                        color="light-gray"
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                    );
                                })}
                            </div>
                            <div className={styles['footer__links-group']}>
                                {secondaryNavigationLinks?.map((link) => (
                                    <CustomLink
                                        key={link.title}
                                        linkText={link.title}
                                        linkTo={link.linkTo}
                                        hide={link.hideInFooter}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className={styles['footer__data-layout']}>
                        <div className={styles['footer__data-layout-label']}>
                            <Text
                                content={footerLabels.legal}
                                weight={500}
                                size={20}
                                lineHeight={135}
                                hasUnderlineTabletDesktop
                            />
                        </div>
                        <div className={styles['footer__links-group']}>
                            {legalNavigationLinks?.map((link) => (
                                <CustomLink
                                    key={link.title}
                                    linkText={link.title}
                                    linkTo={link.linkTo}
                                    color="darkGray"
                                />
                            ))}
                        </div>
                    </div>
                </div>
                <div className={styles['footer__social-copyright-languages']}>
                    <div className={styles['footer__social']}>
                        <SocialLink
                            type="linkedin"
                            linkTo="/"
                            text="Linkedin"
                        />
                        <SocialLink type="youtube" linkTo="/" text="You Tube" />
                    </div>
                    <div className={styles['footer__copyright-languages']}>
                        <div
                            className={
                                styles['footer__copyright--hide-on-mobile']
                            }
                        >
                            <Text
                                content="©2025 CCSP Tout droits réservés."
                                color="darkGray"
                            />
                        </div>
                        <div className={styles['footer__languages']}>
                            <LanguageSwitcher />
                        </div>
                    </div>
                    <div
                        className={styles['footer__copyright--hide-on-desktop']}
                    >
                        <Text
                            content="©2025 CCSP Tout droits réservés."
                            color="darkGray"
                        />
                    </div>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;
