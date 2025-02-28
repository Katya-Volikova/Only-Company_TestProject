import { SwiperCardProps } from '../components/SwiperCard';
import { IPeriod } from '../components/Period';

export const SWIPER_ITEMS_2000_2003: SwiperCardProps[] = [
    {
        title: '2000',
        description: '13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды',
    },
    {
        title: '2001',
        description: 'Телескоп «Хаббл» обнаружил самую удалённую из всех обнаруженных галактик, получившую обозначение GN-z11',
    },
    {
        title: '2002',
        description: 'Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi',
    },
    {
        title: '2003',
        description: 'Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi',
    }
];

export const SWIPER_ITEMS_2004_2008: SwiperCardProps[] = [
    {
        title: '2004',
        description: '13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды',
    },
    {
        title: '2005',
        description: 'Телескоп «Хаббл» обнаружил самую удалённую из всех обнаруженных галактик, получившую обозначение GN-z11',
    },
    {
        title: '2006',
        description: 'Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi',
    },
    {
        title: '2007',
        description: 'Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi',
    },
    {
        title: '2008',
        description: 'Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi',
    }
];

export const SWIPER_ITEMS_2009_2010: SwiperCardProps[] = [
    {
        title: '2009',
        description: '13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды',
    },
    {
        title: '2010',
        description: 'Телескоп «Хаббл» обнаружил самую удалённую из всех обнаруженных галактик, получившую обозначение GN-z11',
    }
];

export const PERIODS: IPeriod[] = [
    {
        start: 2000,
        end: 2003,
        items: SWIPER_ITEMS_2000_2003,
    },
    {
        start: 2004,
        end: 2008,
        items: SWIPER_ITEMS_2004_2008,
    },
    {
        start: 2009,
        end: 2010,
        items: SWIPER_ITEMS_2009_2010,
    },
]
