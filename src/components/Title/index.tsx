import s from './index.module.scss';
import { PropsWithChildren } from 'react';

export function Title({children}:PropsWithChildren) {
 return (
  <div className={s.wrapper}>
        <div className={s.stroke}/>
         <p className={s.title}>{children}</p>
    </div>
 );
 }
