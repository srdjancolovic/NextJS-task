'use client';

import classNames from 'classnames';
import styles from './language-switcher.module.scss';
import { useState } from 'react';

const LanguageSwitcher = () => {
    const [activeLang, setActiveLang] = useState<'NL' | 'FR'>('FR');

    return (
        <div className={styles['language-switcher']}>
            <button
                onClick={() => setActiveLang('NL')}
                className={classNames(styles['language-switcher__button'], {
                    [styles['language-switcher__button--active']]:
                        activeLang === 'NL',
                })}
            >
                NL
            </button>
            <button
                onClick={() => setActiveLang('FR')}
                className={classNames(styles['language-switcher__button'], {
                    [styles['language-switcher__button--active']]:
                        activeLang === 'FR',
                })}
            >
                FR
            </button>
        </div>
    );
};

export default LanguageSwitcher;
