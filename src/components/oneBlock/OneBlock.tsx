import s from './OneBlock.module.css'
import '../../index.css'
import { NavigationMenu } from '../nav/NavigationMenu';

const OneBlock = () => {

    return (
        <header className={s.header}>
            <div className='container'>
                <NavigationMenu />
                <div className={s.block__zag}>
                    <h2 className={s.block__zag_h1}>Говорят, никогда не поздно сменить профессию</h2>
                    <p className={s.block__zag_p}>Сделай круто тестовое задание и у тебя получится</p>

                    <button className={s.block__zag_btn}>Проще простого</button>
                </div>

            </div>
        </header>
    );
};

export default OneBlock;
