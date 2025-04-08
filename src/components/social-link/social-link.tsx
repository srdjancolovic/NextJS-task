import { FC } from 'react';
import LinkedinIcon from '../icons/linkedin-icon/linkedin-icon';
import YouTubeIcon from '../icons/you-tube-icon/you-tube-icon';
import styles from './social-link.module.scss';

type SocialLinkProps = {
    type: string;
    linkTo: string;
    text: string;
};

const SocialLink: FC<SocialLinkProps> = ({ type, linkTo, text }) => {
    const getIcon = (type: string) => {
        switch (type) {
            case 'linkedin':
                return <LinkedinIcon />;
            case 'youtube':
                return <YouTubeIcon />;
        }
    };

    return (
        <a target="_blank" href={linkTo} className={styles['social-link']}>
            {getIcon(type)}
            {text}
        </a>
    );
};

export default SocialLink;
