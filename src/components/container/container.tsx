import { FC } from 'react';
import styles from './container.module.scss';

type ContainerProps = {
    children: React.ReactNode;
};

const Container: FC<ContainerProps> = ({ children }) => {
    return <div className={styles.container}>{children}</div>;
};

export default Container;
