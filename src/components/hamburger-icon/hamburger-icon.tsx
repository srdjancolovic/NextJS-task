'use client';

import { FC } from 'react';
import classNames from 'classnames';
import styles from './hamburger-icon.module.scss';

type HamburgerIconProps = {
    onClick?: () => void;
    isOpen?: boolean;
};

const HamburgerIcon: FC<HamburgerIconProps> = ({ onClick, isOpen }) => {
    return (
        <button
            className={classNames(styles['hamburger'], {
                [styles['is-open']]: isOpen,
            })}
            onClick={onClick}
            aria-label="Toggle menu"
        >
            <span
                className={classNames(
                    styles['hamburger__line'],
                    styles['hamburger__line--top']
                )}
            />
            <span
                className={classNames(
                    styles['hamburger__line'],
                    styles['hamburger__line--middle']
                )}
            />
            <span
                className={classNames(
                    styles['hamburger__line'],
                    styles['hamburger__line--bottom']
                )}
            />
        </button>
    );
};

export default HamburgerIcon;
