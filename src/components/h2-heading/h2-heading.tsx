import { FC } from 'react';
import classNames from 'classnames';
import styles from './h2-heading.module.scss';

type H2HeadingProps = {
    text: string;
    alignment?: string;
};

const H2Heading: FC<H2HeadingProps> = ({ text, alignment = 'left' }) => {
    return (
        <h2
            className={classNames(
                styles['h2-heading'],
                styles[`h2-heading--align-${alignment}`]
            )}
        >
            {' '}
            {text}{' '}
        </h2>
    );
};

export default H2Heading;
