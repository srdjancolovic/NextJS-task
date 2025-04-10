import { FC } from 'react';
import SearchIcon from '../../icons/search-icon/search-icon';
import classNames from 'classnames';
import styles from './search-button.module.scss';

type SearchButtonProps = {
    position: 'header' | 'input';
};

const SearchButton: FC<SearchButtonProps> = ({ position }) => {
    return (
        <button
            className={classNames(styles['search-button'], {
                [styles['search-button--header']]: position === 'header',
                [styles['search-button--input']]: position === 'input',
            })}
        >
            <SearchIcon />
        </button>
    );
};

export default SearchButton;
