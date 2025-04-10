import Container from '@/components/container/container';
import MainNavigation from './main-navigation/main-navigation';
import MobileHeader from './mobile-header/mobile-header';
import Preheader from './preheader/preheader';
import SidebarMenu from '../sidebar-menu/sidebar-menu';
import styles from './header.module.scss';

const Header = () => {
    return (
        <header className={styles.header}>
            <Container>
                <Preheader />
                <MainNavigation />
            </Container>
            <div className={styles['header__mobile-navigation']}>
                <MobileHeader location="default" />
            </div>
            <div>
                <SidebarMenu />
            </div>
        </header>
    );
};

export default Header;
