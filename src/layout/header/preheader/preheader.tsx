import CustomLink from '@/components/custom-link/custom-link';
import { secondaryNavigationLinks } from '@/data/navigation-links-data';
import styles from './preheader.module.scss';

const Preheader = () => {
    return (
        <nav className={styles.preheader}>
            {secondaryNavigationLinks?.map((link) => (
                <CustomLink
                    key={link.title}
                    linkText={link.title}
                    linkTo={link.linkTo}
                    size={14}
                    color="darkGray"
                    hide={link.hideOnPreheader}
                />
            ))}
        </nav>
    );
};

export default Preheader;
