import SearchButton from '../search-button/search-button';
import styles from './search-bar.module.scss';

const SearchBar = () => {
    return (
        <div className={styles['search-bar']}>
            <input placeholder="Cherchez un mot-clé" type="text" />
            <div className={styles['search-bar__action']}>
                <SearchButton position="input" />
            </div>
        </div>
    );
};

export default SearchBar;
