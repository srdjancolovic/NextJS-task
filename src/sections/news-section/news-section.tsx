import Container from '@/components/container/container';
import H2Heading from '@/components/h2-heading/h2-heading';
import LinkArrowBold from '@/components/icons/link-arrow-bold/link-arrow-bold';
import LinkButton from '@/components/button/link-button/link-button';
import NewsSlider from '@/components/news-slider/news-slider';
import { PostDataTypes } from '@/types/post-types';
import { getPostsData } from '@/lib/getPostsData';
import styles from './news-section.module.scss';

const NewsSection = async () => {
    const data = await getPostsData();

    /**
     * Here i added placehoder image that I hosted on free service just for demo purposes
     * Also, I hardcoded year and date because there is no such data in response
     */

    console.log('DATA', data);
    const dataForSlider = data?.map((post: PostDataTypes) => {
        return {
            id: post.id,
            title: post.title,
            year: 2025,
            date: '10.12.2024',
            image: 'https://i.postimg.cc/T20Y3qM6/placeholder-Image.png',
        };
    });

    console.log('NEW SLIDER DATA', dataForSlider);

    return (
        <section className={styles['news-section']}>
            <Container removePaddingRightOnMobile>
                <div className={styles['news-section__content']}>
                    <H2Heading
                        text="Nos dernières actualités"
                        alignment="center"
                    />
                    <NewsSlider data={dataForSlider} />
                </div>
                <div className={styles['news-section__cta']}>
                    <LinkButton
                        linkTitle="Voir toutes les actualités"
                        linkTo="/"
                    >
                        {' '}
                        {<LinkArrowBold />}{' '}
                    </LinkButton>
                </div>
            </Container>
        </section>
    );
};

export default NewsSection;
