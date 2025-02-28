import { Swiper as UISwiper, SwiperSlide, SwiperClass } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Pagination } from 'swiper/modules';
import { ReactNode } from 'react';
import { SwiperOptions } from 'swiper/types';
import { clsx } from 'clsx';

export type SwiperProps = {
    items: ReactNode[];
    onInit?: ((swiper: SwiperClass) => any) | undefined
    slideClassName?: string;
    swiperClassName?: string;
} & SwiperOptions;

export function Swiper({items, onInit, slideClassName, swiperClassName, ...rest}: SwiperProps) {
 return (
     <UISwiper modules={[Navigation, Pagination]} className={clsx(swiperClassName, 'mySwiper')} onInit={onInit} {...rest}>
         {!!items.length && items.map((item, index) =>
             <SwiperSlide className={slideClassName} key={index}>{item}</SwiperSlide>
         )}
     </UISwiper>
 );
 }
