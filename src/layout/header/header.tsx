import Container from '@/components/container/container';
import MainNavigation from './main-navigation/main-navigation';
import Preheader from './preheader/preheader';
import styles from './header.module.scss';

const Header = () => {
    return (
        <header className={styles.header}>
            <Container>
                <Preheader />
                <MainNavigation />
            </Container>
        </header>
    );
};

export default Header;
