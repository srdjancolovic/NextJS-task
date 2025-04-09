import { FC, ReactNode } from 'react';

import Link from 'next/link';
import classNames from 'classnames';
import styles from './link-button.module.scss';

type LinkButtonProps = {
    linkTitle: string;
    linkTo: string;
    width?: string;
    color?: string;
    background?: string;
    children?: ReactNode;
};

const LinkButton: FC<LinkButtonProps> = ({
    linkTitle,
    linkTo,
    width = 'fit',
    color = 'white',
    background = 'green',
    children,
}) => {
    return (
        <Link
            href={linkTo}
            className={classNames(
                styles['link-button'],
                [styles[`link-button--width-${width}`]],
                [styles[`link-button--color-${color}`]],
                [styles[`link-button--background-${background}`]]
            )}
        >
            {linkTitle} {children}
        </Link>
    );
};

export default LinkButton;
