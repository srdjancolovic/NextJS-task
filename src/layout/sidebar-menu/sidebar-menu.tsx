'use client';

import CustomLink from '@/components/custom-link/custom-link';
import LanguageSwitcher from '@/components/language-switcher/language-switcher';
import LinkArrowBold from '@/components/icons/link-arrow-bold/link-arrow-bold';
import LinkButton from '@/components/button/link-button/link-button';
import MainNavigationLinks from '../header/main-navigation/main-navigation-links/main-navigation-links';
import MobileHeader from '../header/mobile-header/mobile-header';
import classNames from 'classnames';
import { secondaryNavigationLinks } from '@/data/navigation-links-data';
import styles from './sidebar-menu.module.scss';
import { useAppContext } from '@/app-context/app-context';
import { useEffect } from 'react';

const SidebarMenu = () => {
    const { isSidebarOpen } = useAppContext();

    useEffect(() => {
        if (isSidebarOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [isSidebarOpen]);

    return (
        <div
            className={classNames(styles['sidebar-menu'], {
                [styles['sidebar-menu--is-open']]: isSidebarOpen,
            })}
        >
            <MobileHeader location="sidebar" />
            <div className={styles['sidebar-menu__content']}>
                <div className={styles['sidebar-menu__main-links']}>
                    <MainNavigationLinks isInSidebarMenu />
                </div>
                <div className={styles['sidebar-menu__secondary-links']}>
                    {secondaryNavigationLinks?.map((link) => (
                        <CustomLink
                            key={link.title}
                            linkText={link.title}
                            linkTo={link.linkTo}
                            mobileSize={14}
                        />
                    ))}
                </div>
                <div className={styles['sidebar-menu__cta']}>
                    <LinkButton
                        linkTitle="Je suis détenu(e)"
                        linkTo="/"
                        width="full"
                    >
                        {' '}
                        {<LinkArrowBold />}{' '}
                    </LinkButton>
                </div>
                <div className={styles['sidebar-menu__language-switcher']}>
                    <LanguageSwitcher />
                </div>
            </div>
        </div>
    );
};

export default SidebarMenu;
