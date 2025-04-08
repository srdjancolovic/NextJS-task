import Container from '@/components/container/container';
import H2Heading from '@/components/h2-heading/h2-heading';
import NewsSlider from '@/components/news-slider/news-slider';
import styles from './news-section.module.scss';

const NewsSection = () => {
    return (
        <section className={styles['news-section']}>
            <Container removePaddingRightOnMobile>
                <div className={styles['news-section__content']}>
                    <H2Heading
                        text="Nos dernières actualités"
                        alignment="center"
                    />
                    <NewsSlider />
                </div>
            </Container>
        </section>
    );
};

export default NewsSection;
