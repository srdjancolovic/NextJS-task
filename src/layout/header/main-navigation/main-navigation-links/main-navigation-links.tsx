'use client';

import AnimateHeight, { Height } from 'react-animate-height';
import { FC, useState } from 'react';

import ChevronDown from '@/components/icons/chevron-down/chevron-down';
import CustomLink from '@/components/custom-link/custom-link';
import classNames from 'classnames';
import { mainNavigationLinks } from '@/data/navigation-links-data';
import styles from '../main-navigation.module.scss';

type MainNavigationLinksProps = {
    isInSidebarMenu?: boolean;
};

const MainNavigationLinks: FC<MainNavigationLinksProps> = ({
    isInSidebarMenu,
}) => {
    const [height, setHeight] = useState<Height>(0);

    const [showSubMenu, setShowSubMenu] = useState<boolean>(false);

    const toggleSubMenuHandler = () => {
        setShowSubMenu(!showSubMenu);
        setHeight(height === 0 ? 'auto' : 0);
    };

    return (
        <>
            {mainNavigationLinks?.map((link) => {
                return (
                    <div
                        className={classNames(styles['main-navigation__link'], {
                            [styles['main-navigation__link--hide']]:
                                link.hideOnMainNav,
                        })}
                        key={link.title}
                    >
                        <div
                            className={styles['main-navigation__link-wrapper']}
                        >
                            <CustomLink
                                key={link.title}
                                linkText={link.title}
                                linkTo={link.linkTo}
                                mobileSize={isInSidebarMenu ? 20 : undefined}
                            />
                            {link.subMenu && (
                                <div
                                    className={
                                        styles[
                                            'main-navigation__link-sub-menu-indicator'
                                        ]
                                    }
                                >
                                    <button onClick={toggleSubMenuHandler}>
                                        <ChevronDown />
                                    </button>
                                </div>
                            )}
                        </div>
                        <AnimateHeight
                            duration={300}
                            height={height}
                            className={
                                styles['main-navigation__submenu-wrapper']
                            }
                        >
                            {link.subMenu && (
                                <div
                                    className={
                                        styles['main-navigation__sub-links']
                                    }
                                >
                                    {link.subMenu?.map((subLink) => (
                                        <CustomLink
                                            key={subLink.title}
                                            linkText={subLink.title}
                                            linkTo={subLink.linkTo}
                                            color="light-gray"
                                            mobileSize={
                                                isInSidebarMenu ? 20 : undefined
                                            }
                                        />
                                    ))}
                                </div>
                            )}
                        </AnimateHeight>
                    </div>
                );
            })}
        </>
    );
};

export default MainNavigationLinks;
