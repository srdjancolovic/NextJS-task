import Image from 'next/image';
import Link from 'next/link';
import LinkArrowBold from '@/components/icons/link-arrow-bold/link-arrow-bold';
import LinkButton from '@/components/button/link-button/link-button';
import MainNavigationLinks from './main-navigation-links/main-navigation-links';
import SearchButton from '@/components/search-button/search-button';
import logo from '../../../../public/assets/logo/logo.svg';
import styles from './main-navigation.module.scss';

const MainNavigation = () => {
    return (
        <nav className={styles['main-navigation']}>
            <Link href="/">
                <Image src={logo} width={55} height={62} alt="Logo" />
            </Link>
            <div className={styles['main-navigation__links-cta']}>
                <div className={styles['main-navigation__links-wrapper']}>
                    <MainNavigationLinks />
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
