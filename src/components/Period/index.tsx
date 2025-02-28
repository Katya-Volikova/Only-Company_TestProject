import s from './index.module.scss';

import ArrowLeft from './../../assets/icons/arrow-left.svg';
import ArrowRight from './../../assets/icons/arrow-right.svg';
import { useState, useEffect } from 'react';
import { PERIODS } from '../../data/data.tsx';
import gsap from 'gsap';
import { clsx } from 'clsx';
import { CircleWithPoints } from '../Circle';
import { SwiperCardProps } from '../SwiperCard';
import { Cards } from '../Cards';

export interface IPeriod {
    start: number,
    end: number,
    items: SwiperCardProps[];
}

interface IPeriodProps {
    onPeriodChange: (period: IPeriod) => void;
}

export function Period({ onPeriodChange }: IPeriodProps) {
    const [activePeriodIndex, setActivePeriodIndex] = useState(0);
    const [ activePeriod, setActivePeriod ] = useState<IPeriod>(PERIODS[0]);

    const animateNumber = (newNumberStart: number, newNumberEnd: number, setState: any) => {
        gsap.to(activePeriod, {
            start: newNumberStart,
            end: newNumberEnd,
            duration: 1,
            onUpdate: function () {
                setState(() => ({ start: Math.round(activePeriod?.start), end:  Math.round(activePeriod?.end), items: PERIODS[activePeriodIndex].items }
                ));
            }
        });
    };

    const change = (isNext?: boolean) => {
        if (isNext && activePeriodIndex !== PERIODS.length - 1) {
            setActivePeriodIndex(prev => prev+1);
        }
        else if (!isNext && activePeriodIndex !== 0) setActivePeriodIndex(prev => prev-1)
    }

    useEffect(() => {
        animateNumber(PERIODS[activePeriodIndex].start, PERIODS[activePeriodIndex].end, setActivePeriod)
    }, [activePeriodIndex]);

    useEffect(() => {
        onPeriodChange(activePeriod)
    }, [activePeriod]);

 return (
     <div>
         <CircleWithPoints
             points={PERIODS.length}
             activePoint={activePeriodIndex}
             onChangeActivePoint={setActivePeriodIndex}
         />

         <div className={s.container}>
                 <p className={s.title}>
                     {activePeriod.start}
                 </p>
                 <p className={clsx(s.title, s['pink-title'])}>
                     {activePeriod.end}
                 </p>
         </div>

         <div className={s.line} />

         <Cards items={activePeriod.items} className={s.cards}/>

         <div className={s.bottomWrapper}>
             <div>
                 <p className={s.count}>{`0${activePeriodIndex+1}/0${PERIODS.length}`}</p>
             </div>

             <div className={s.buttonWrapper}>
                 <button disabled={activePeriodIndex===0} className={s.button} onClick={() => change()}>
                     <ArrowLeft />
                 </button>
                 <button disabled={activePeriodIndex === PERIODS.length-1} className={s.button} onClick={() => change(true)}>
                     <ArrowRight />
                 </button>
             </div>
         </div>
     </div>
 );
}
