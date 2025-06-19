import React from 'react';
import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from '../app/hook.ts';
import { increment } from '../features/counter/counterSlice';

const HomePage: React.FC = () => {
    const { t } = useTranslation();
    const count = useAppSelector((state) => state.counter.value);
    const dispatch = useAppDispatch();

    return (
        <div>
            <h1>{t('welcome')}</h1>
            <p>Redux 카운트: {count}</p>
            <button onClick={() => dispatch(increment())}>+1</button>
        </div>
    );
};

export default HomePage;
