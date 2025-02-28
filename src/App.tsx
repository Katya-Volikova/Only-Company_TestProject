import s from './App.module.scss'

import { Period, IPeriod } from './components/Period';
import { Title } from './components/Title';
import { Cards } from './components/Cards';
import { useState } from 'react';
import { PERIODS } from './data/data.tsx';

function App() {
    const [ activePeriod, setActivePeriod ] = useState<IPeriod>(PERIODS[0]);

  return (
    <div className={s.container}>
        <div className={s.wrapper}>
            <div className={s.absoluteWrapper}>
                <Title>
                    {`Исторические\nдаты`}
                </Title>
                <Period onPeriodChange={setActivePeriod}/>
                <div className={s.verticalLine}/>
                <div className={s.gorizontalLine}/>
            </div>

            <Cards items={activePeriod.items} className={s.cards}/>
        </div>
    </div>
  )
}

export default App
