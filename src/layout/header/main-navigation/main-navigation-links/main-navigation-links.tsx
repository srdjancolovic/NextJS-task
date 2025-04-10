'use client';

import AnimateHeight, { Height } from 'react-animate-height';
import { FC, useState } from 'react';

import ChevronDown from '@/components/icons/chevron-down/chevron-down';
import CustomLink from '@/components/custom-link/custom-link';
import classNames from 'classnames';
import { mainNavigationLinks } from '@/data/navigation-links-data';
import styles from '../main-navigation.module.scss';
import { useAppContext } from '@/app-context/app-context';

type MainNavigationLinksProps = {
    isInSidebarMenu?: boolean;
};

const MainNavigationLinks: FC<MainNavigationLinksProps> = ({
    isInSidebarMenu,
}) => {
    const [height, setHeight] = useState<Height>(0);
    const { closeSidebar } = useAppContext();

    const toggleSubMenuOnClickHandler = () => {
        setHeight(height === 0 ? 'auto' : 0);
    };

    const toggleSubMenuOnCHoverHandler = (hasSubmenu: boolean) => {
        if (hasSubmenu) {
            setHeight('auto');
        } else {
            setHeight(0);
        }
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
                            <div
                                onMouseEnter={() =>
                                    toggleSubMenuOnCHoverHandler(
                                        link.subMenu ? true : false
                                    )
                                }
                                onMouseLeave={() => setHeight(0)}
                            >
                                <CustomLink
                                    key={link.title}
                                    linkText={link.title}
                                    linkTo={link.linkTo}
                                    mobileSize={
                                        isInSidebarMenu ? 20 : undefined
                                    }
                                    handleClick={closeSidebar}
                                />
                            </div>
                            {link.subMenu && (
                                <div
                                    className={classNames(
                                        styles[
                                            'main-navigation__link-sub-menu-indicator'
                                        ],
                                        {
                                            [styles[
                                                'main-navigation__link-sub-menu-indicator--open'
                                            ]]: height !== 0,
                                        }
                                    )}
                                >
                                    <button
                                        onClick={toggleSubMenuOnClickHandler}
                                    >
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
                                    onMouseEnter={() => setHeight('auto')}
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
                                            handleClick={closeSidebar}
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
