'use client';

import ChevronDown from '@/components/icons/chevron-down/chevron-down';
import CustomLink from '@/components/custom-link/custom-link';
import MainNavigationLinks from '../header/main-navigation/main-navigation-links/main-navigation-links';
import MobileHeader from '../header/mobile-header/mobile-header';
import classNames from 'classnames';
import { mainNavigationLinks } from '@/data/navigation-links-data';
import styles from './sidebar-menu.module.scss';
import { useAppContext } from '@/app-context/app-context';

const SidebarMenu = () => {
    const { isSidebarOpen } = useAppContext();

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
            </div>
        </div>
    );
};

export default SidebarMenu;
