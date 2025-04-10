'use client';

import 'swiper/css';

import { FC, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import CustomLink from '../custom-link/custom-link';
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
    const slidesRef = useRef<HTMLDivElement[]>([]);

    //This is logic for slides to be equal height no matter the content inside slide
    //NOTE:Need to refresh page when switching responsive mode to refresh page height
    useEffect(() => {
        if (slidesRef.current.length) {
            const maxHeight = Math.max(
                ...slidesRef.current.map((slide) => slide.offsetHeight)
            );
            slidesRef.current.forEach((slide) => {
                slide.style.height = `${maxHeight}px`;
            });
        }
    }, [data]);

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
                {data?.map((post, index) => (
                    <SwiperSlide
                        key={post.title}
                        className={styles['news-slider__slide']}
                    >
                        <div
                            ref={(el) => {
                                if (el) slidesRef.current[index] = el;
                            }}
                        >
                            <Image
                                src={post.image}
                                width={492}
                                height={278}
                                alt="News slider image"
                            />
                            <span
                                className={
                                    styles['news-slider__slide-year-badge']
                                }
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
                                className={
                                    styles['news-slider__slide-mobile-cta']
                                }
                            >
                                Consulter <LinkArrow />
                            </Link>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default NewsSlider;
