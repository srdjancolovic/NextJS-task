import ChevronDown from '@/components/icons/chevron-down/chevron-down';
import CustomLink from '@/components/custom-link/custom-link';
import Image from 'next/image';
import Link from 'next/link';
import LinkArrowBold from '@/components/icons/link-arrow-bold/link-arrow-bold';
import LinkButton from '@/components/button/link-button/link-button';
import SearchButton from '@/components/search-button/search-button';
import classNames from 'classnames';
import logo from '../../../../public/assets/logo/logo.svg';
import { mainNavigationLinks } from '@/data/navigation-links-data';
import styles from './main-navigation.module.scss';

const MainNavigation = () => {
    return (
        <nav className={styles['main-navigation']}>
            <Link href="/">
                <Image src={logo} width={55} height={62} alt="Logo" />
            </Link>
            <div className={styles['main-navigation__links-cta']}>
                <div className={styles['main-navigation__links-wrapper']}>
                    {mainNavigationLinks?.map((link) => {
                        return (
                            <div
                                className={classNames(
                                    styles['main-navigation__link'],
                                    {
                                        [styles['main-navigation__link--hide']]:
                                            link.hideOnMainNav,
                                    }
                                )}
                                key={link.title}
                            >
                                <CustomLink
                                    key={link.title}
                                    linkText={link.title}
                                    linkTo={link.linkTo}
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
                                            />
                                        ))}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
                <div className={styles['main-navigation__cta']}>
                    <SearchButton position="header" />
                    <LinkButton linkTitle="Je suis détenu(e)" linkTo="/">
                        {' '}
                        {<LinkArrowBold />}{' '}
                    </LinkButton>
                </div>
            </div>
        </nav>
    );
};

export default MainNavigation;
