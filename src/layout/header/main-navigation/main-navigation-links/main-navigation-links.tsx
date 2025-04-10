import ChevronDown from '@/components/icons/chevron-down/chevron-down';
import CustomLink from '@/components/custom-link/custom-link';
import { FC } from 'react';
import classNames from 'classnames';
import { mainNavigationLinks } from '@/data/navigation-links-data';
import styles from '../main-navigation.module.scss';

type MainNavigationLinksProps = {
    isInSidebarMenu?: boolean;
};

const MainNavigationLinks: FC<MainNavigationLinksProps> = ({
    isInSidebarMenu,
}) => {
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
                                <ChevronDown />{' '}
                            </div>
                        )}
                        {link.subMenu && (
                            <div
                                className={styles['main-navigation__sub-links']}
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
                    </div>
                );
            })}
        </>
    );
};

export default MainNavigationLinks;
