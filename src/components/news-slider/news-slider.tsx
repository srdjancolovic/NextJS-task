'use client';

import 'swiper/css';

import { Swiper, SwiperSlide } from 'swiper/react';

import CustomLink from '../custom-link/custom-link';
import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import LinkArrow from '../icons/link-arrow/link-arrow';
import { PostDataTypes } from '@/types/post-types';
import Text from '../text/text';
import styles from './news-slider.module.scss';

type NeWsSliderProps = {
    data: PostDataTypes[];
};

const NewsSlider: FC<NeWsSliderProps> = ({ data }) => {
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
                {data?.map((post) => (
                    <SwiperSlide className={styles['news-slider__slide']}>
                        {/* Here is only placeholder image because there is no image in POSTS response from dummyjson API */}
                        <Image
                            src={post.image}
                            width={492}
                            height={278}
                            alt="News slider image"
                        />
                        <span
                            className={styles['news-slider__slide-year-badge']}
                        >
                            {post.year}
                        </span>
                        <div className={styles['news-slider__slide-title']}>
                            <CustomLink
                                linkText={post.title}
                                linkTo={`/news/${post.id}`}
                                lineHeight={120}
                                size={20}
                            />
                        </div>
                        <div className={styles['news-slider__slide-date']}>
                            <Text
                                content={post.date}
                                color="darkGray"
                                size={16}
                            />
                        </div>
                        <Link
                            href={`/news/${post.id}`}
                            className={styles['news-slider__slide-mobile-cta']}
                        >
                            Consulter <LinkArrow />
                        </Link>
                    </SwiperSlide>
                ))}
                ...
            </Swiper>
        </div>
    );
};

export default NewsSlider;
