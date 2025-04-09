import Container from '@/components/container/container';
import H1Heading from '@/components/h1-heading/h1-heading';
import Text from '@/components/text/text';
import { homeHeroHeadingData } from '@/data/home-hero-data';
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
                        />
                        <div>Search input</div>
                    </div>
                    <div>Images</div>
                </div>
            </Container>
        </section>
    );
};

export default HomeHeroSection;
