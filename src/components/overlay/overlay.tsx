'use client';

import React from 'react';
import classNames from 'classnames';
import styles from './overlay.module.scss';
import { useAppContext } from '@/app-context/app-context';

const Overlay = () => {
    const { isSidebarOpen, closeSidebar } = useAppContext();

    return (
        <div
            className={classNames(styles.overlay, {
                [styles['overlay--shown']]: isSidebarOpen,
            })}
            onClick={closeSidebar}
        />
    );
};

export default Overlay;
