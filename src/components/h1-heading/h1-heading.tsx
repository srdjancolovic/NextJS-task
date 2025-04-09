import { FC, ReactNode } from 'react';

import classNames from 'classnames';
import styles from './h1-heading.module.scss';

type H1HeadingProps = {
    children: ReactNode;
    alignment?: string;
    hasUnderlineText?: boolean;
};
const H1Heading: FC<H1HeadingProps> = ({
    children,
    alignment = 'left',
    hasUnderlineText,
}) => {
    return (
        <h1
            className={classNames(
                styles['h1-heading'],
                styles[`h1-heading--align-${alignment}`],
                {
                    [styles['h1-heading--underline']]: hasUnderlineText, // Corrected part
                }
            )}
        >
            {children}
        </h1>
    );
};

export default H1Heading;
