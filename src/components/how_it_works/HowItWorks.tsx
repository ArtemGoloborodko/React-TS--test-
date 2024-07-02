import { useSelector } from 'react-redux';
import s from './HowItWorks.module.css'
import { HowItWorksList } from './HowItWorksList';

export const HowItWorks = () => {

    const zag_how_it_works = useSelector((state: any) => state.text.zag_how_it_works);
    return (
        <section id="how_it_works" className={s.section}>
            <div className="container">
                <h2 className="zag__h2">{zag_how_it_works}</h2>
                <HowItWorksList />
            </div>
        </section>
    )
}
