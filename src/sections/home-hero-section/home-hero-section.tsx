import Container from '@/components/container/container';
import H1Heading from '@/components/h1-heading/h1-heading';
import Image from 'next/image';
import SearchBar from '@/components/search-bar/search-bar';
import Text from '@/components/text/text';
import { homeHeroHeadingData } from '@/data/home-hero-data';
import imageFrame from '../../../public/assets/images/imageFrame.png';
import placeholderImage from '../../../public/assets/images/buildingImage.png';
import styles from './home-hero-section.module.scss';

const HomeHeroSection = () => {
    return (
        <section className={styles['home-hero-section']}>
            <Container>
                <div className={styles['home-hero-section__content']}>
                    <div className={styles['home-hero-section__text-search']}>
                        <H1Heading hasUnderlineText>
                            {homeHeroHeadingData?.mainTitle?.map((item) => (
                                <span
                                    key={item.text}
                                    data-underline={
                                        item.underline ? 'true' : 'false'
                                    }
                                >
                                    {item.text}
                                </span>
                            ))}
                        </H1Heading>
                        <Text
                            content={homeHeroHeadingData?.description}
                            size={20}
                            color="darkGray"
                            lineHeight={120}
                        />
                        <SearchBar />
                    </div>
                    <div className={styles['home-hero-section__image']}>
                        <Image
                            src={placeholderImage}
                            width={952}
                            height={1209}
                            alt="Image frame"
                            className={styles['home-hero-section__main-image']}
                        />
                        <Image
                            src={imageFrame}
                            width={952}
                            height={1209}
                            alt="Image frame"
                            className={
                                styles['home-hero-section__frame-for-image']
                            }
                        />
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default HomeHeroSection;
