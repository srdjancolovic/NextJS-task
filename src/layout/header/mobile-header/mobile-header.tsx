'use client';

import CloseIcon from '@/components/icons/close-icon/close-icon';
import { FC } from 'react';
import HamburgerIcon from '@/components/hamburger-icon/hamburger-icon';
import Image from 'next/image';
import Link from 'next/link';
import SearchIconGreen from '@/components/icons/search-icon-green/search-icon-green';
import classNames from 'classnames';
import logo from '../../../../public/assets/logo/logo.svg';
import styles from './mobile-header.module.scss';
import { useAppContext } from '@/app-context/app-context';

type MobileHeaderProps = {
    location: 'sidebar' | 'default';
};

const MobileHeader: FC<MobileHeaderProps> = ({ location }) => {
    const { closeSidebar, openSidebar } = useAppContext();

    return (
        <div
            className={classNames(styles['mobile-header'], {
                [styles['mobile-header--sidebar']]: location === 'sidebar',
                [styles['mobile-header--default']]: location === 'default',
            })}
        >
            <Link href="/">
                <Image
                    src={logo}
                    width={37}
                    height={42}
                    alt="Logo"
                    className={styles['mobile-header__logo']}
                />
            </Link>
            <div className={styles['mobile-header__actions']}>
                <button className={styles['mobile-header__search-icon']}>
                    <SearchIconGreen />
                </button>
                {location === 'default' && (
                    <HamburgerIcon onClick={openSidebar} />
                )}
                {location === 'sidebar' && (
                    <button onClick={closeSidebar}>
                        {' '}
                        <CloseIcon />
                    </button>
                )}
            </div>
        </div>
    );
};

export default MobileHeader;
