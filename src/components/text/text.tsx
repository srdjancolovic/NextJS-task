import { FC, ReactNode } from 'react';

import classNames from 'classnames';
import styles from './text.module.scss';

type TextProps = {
    content: string;
    size?: number;
    weight?: number;
    color?: string;
    lineHeight?: number;
    hasUnderlineTabletDesktop?: boolean;
};

const Text: FC<TextProps> = ({
    content,
    size = 16,
    weight = 400,
    color = 'black',
    lineHeight = 100,
    hasUnderlineTabletDesktop = false,
}) => {
    const textClasses = classNames(
        styles.text,
        styles[`text--size-${size}`],
        styles[`text--weight-${weight}`],
        styles[`text--color-${color}`],
        styles[`text--line-height-${lineHeight}`],
        {
            [styles['text--with-underline-tablet-desktop']]:
                hasUnderlineTabletDesktop,
        }
    );

    return <p className={textClasses}>{content}</p>;
};

export default Text;
