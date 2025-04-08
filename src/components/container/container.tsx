import { FC } from 'react';
import classNames from 'classnames';
import styles from './container.module.scss';

type ContainerProps = {
    children: React.ReactNode;
    removePaddingRightOnMobile?: boolean;
};

const Container: FC<ContainerProps> = ({
    children,
    removePaddingRightOnMobile,
}) => {
    return (
        <div
            className={classNames(styles.container, {
                [styles['container--no-padding-right-on-mobile']]:
                    removePaddingRightOnMobile,
                [styles['container--default-padding']]:
                    !removePaddingRightOnMobile,
            })}
        >
            {children}
        </div>
    );
};

export default Container;
