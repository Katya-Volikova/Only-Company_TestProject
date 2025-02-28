import s from './index.module.scss';

import { useRef, useMemo } from 'react';

import { SwiperCard, SwiperCardProps } from '../SwiperCard';
import { Swiper as SwiperType} from 'swiper/types';
import { Swiper } from '../ui/Swiper';

import { clsx } from 'clsx';

interface ICardsProps {
    items: SwiperCardProps[];
    className?: string;
}

export function Cards({ items, className }: ICardsProps) {
    const prevBtnRef = useRef(null);
    const nextBtnRef = useRef(null);
    const swiperRef = useRef<SwiperType | null>(null);

    const cards = useMemo(() =>
        items?.map((item) =>
            <SwiperCard {...item} />), [items]
    )

    return (
        <div className={clsx(s.wrapper, className)}>
            <div className={s.buttons}>
                <button
                    ref={prevBtnRef}
                    className={clsx(s['nav-btn'], s.prev)}
                    onClick={() => swiperRef?.current?.slidePrev()}
                >
                    <img
                        className={s.icon}
                        src={'./src/assets/icons/arrow-left.svg'}
                    />
                </button>

                <button
                    ref={nextBtnRef}
                    className={clsx(s['nav-btn'], s.next)}
                    onClick={() => swiperRef?.current?.slideNext()}
                >
                    <img
                        className={s.icon}
                        src={'./src/assets/icons/arrow-right.svg'}
                    />
                </button>
            </div>

            <Swiper
                swiperClassName={s.swiperClassName}
                spaceBetween={100}
                slideClassName={s.slide}
                onInit={(swiper) => swiperRef.current = swiper}
                slidesPerView={'auto'}
                items={cards}
                navigation={{
                    prevEl: prevBtnRef.current,
                    nextEl: nextBtnRef.current,
                }}
            />
    </div>
    )
}
