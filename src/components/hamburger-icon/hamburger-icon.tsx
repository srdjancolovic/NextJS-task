'use client';

import { FC } from 'react';
import HamburgerButtonIcon from '../icons/hamburger-button-icon/hamburger-button-icon';
import classNames from 'classnames';
import styles from './hamburger-icon.module.scss';

type HamburgerIconProps = {
    onClick?: () => void;
};

const HamburgerIcon: FC<HamburgerIconProps> = ({ onClick }) => {
    return (
        <button
            className={styles.hamburger}
            onClick={onClick}
            aria-label="Toggle menu"
        >
            <HamburgerButtonIcon />
        </button>
    );
};

export default HamburgerIcon;
