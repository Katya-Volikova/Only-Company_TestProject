import s from './index.module.scss';

export type SwiperCardProps = {
    title: string;
    description: string;
}

export function SwiperCard({title, description}: SwiperCardProps) {
 return (
     <div className={s.wrapper}>
         <p className={s.title}>{title}</p>
         <p className={s.description}>{description}</p>
     </div>
 );
 }
