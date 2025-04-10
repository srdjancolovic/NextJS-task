import { FC } from 'react';
import Link from 'next/link';
import classNames from 'classnames';
import styles from './custom-link.module.scss';

type CustomLinkProps = {
    linkTo: string;
    linkText: string;
    size?: number;
    mobileSize?: number;
    weight?: number;
    color?: string;
    lineHeight?: number;
};

const CustomLink: FC<CustomLinkProps> = ({
    linkTo,
    linkText,
    size = 16,
    mobileSize,
    weight = 400,
    color = 'black',
    lineHeight = 100,
}) => {
    const linkClasses = classNames(
        styles['custom-link'],
        styles[`custom-link--size-${size}`],
        styles[`custom-link--mobile-size-${mobileSize}`],
        styles[`custom-link--weight-${weight}`],
        styles[`custom-link--color-${color}`],
        styles[`custom-link--line-height-${lineHeight}`]
    );
    return (
        <Link className={linkClasses} href={linkTo}>
            {' '}
            {linkText}{' '}
        </Link>
    );
};

export default CustomLink;
