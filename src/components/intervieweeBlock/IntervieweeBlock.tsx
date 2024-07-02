import { useSelector } from "react-redux";
import i from "./IntervieweeBlock.module.css"

export const IntervieweeBlock = () => {
    const cards = useSelector((state: any) => state.interviwee.cards);
    return (
        <section className={`${i.section} ${i.section__interviwee_color}`}>
            <div className="container">
                <div className={i.interviwee__block}>

                    {cards.map((cards: any, index: any) => (
                        <div key={index} className={i.interviwee__cards}>
                            <h4 className={i.interviwee__zag}>{cards.title}</h4>
                            <p className={i.interviwee__text}>{cards.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}