import React from 'react';
import { useSelector } from 'react-redux';
import s from './HowItWorks.module.css';


export const HowItWorksList: React.FC = () => {
    const cards = useSelector((state: any) => state.info.cards);


    return (
        <ul className={s.list}>
            {cards.map((card: any, index:any) => (
                <li className={s.item} key={index}>
                    <img className={s.icon} src={card.icon} alt="icon" />
                    <div>
                        <strong className={s.zag__strong}>{card.strong}</strong>
                        <p className={s.description}>{card.description}</p>
                    </div>
                </li>
            ))}
        </ul>
    );
}

