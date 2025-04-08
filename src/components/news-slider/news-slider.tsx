'use client';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Swiper, SwiperSlide } from 'swiper/react';

import CustomLink from '../custom-link/custom-link';
import Image from 'next/image';
import Link from 'next/link';
import LinkArrow from '../icons/link-arrow/link-arrow';
import Text from '../text/text';
import placeholderImage from '../../../public/assets/images/placeholderImage.png';
import styles from './news-slider.module.scss';

const NewsSlider = () => {
    return (
        <div>
            <Swiper
                grabCursor
                breakpoints={{
                    0: { spaceBetween: 20, slidesPerView: 'auto' },
                    650: { spaceBetween: 24, slidesPerView: 2 },
                    1280: { spaceBetween: 24, slidesPerView: 3 },
                }}
                className={styles['news-slider']}
            >
                <SwiperSlide className={styles['news-slider__slide']}>
                    {/* Here is only placeholder image because there is no image in POSTS response from dummyjson API */}
                    <Image
                        src={placeholderImage}
                        width={492}
                        height={278}
                        alt="News slider image"
                    />
                    <span className={styles['news-slider__slide-year-badge']}>
                        2025
                    </span>
                    <div className={styles['news-slider__slide-title']}>
                        <CustomLink
                            linkText="Communication sur la décision du Comité des Ministres du Conseil de l’Europe concernant le groupe L.B."
                            linkTo="/"
                            lineHeight={120}
                            size={20}
                        />
                    </div>
                    <div className={styles['news-slider__slide-date']}>
                        <Text content="10.12.2024" color="darkGray" size={16} />
                    </div>
                    <Link
                        href="/"
                        className={styles['news-slider__slide-mobile-cta']}
                    >
                        Consulter <LinkArrow />
                    </Link>
                </SwiperSlide>
                <SwiperSlide className={styles['news-slider__slide']}>
                    Slide 2
                </SwiperSlide>
                <SwiperSlide className={styles['news-slider__slide']}>
                    Slide 3
                </SwiperSlide>
                <SwiperSlide className={styles['news-slider__slide']}>
                    Slide 4
                </SwiperSlide>
                <SwiperSlide className={styles['news-slider__slide']}>
                    Slide 4
                </SwiperSlide>
                <SwiperSlide className={styles['news-slider__slide']}>
                    Slide 4
                </SwiperSlide>
                ...
            </Swiper>
        </div>
    );
};

export default NewsSlider;
