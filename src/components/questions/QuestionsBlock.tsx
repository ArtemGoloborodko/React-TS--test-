import { useSelector } from "react-redux";
import Accordion from "../accordion/Accordion"
import q from "./QuestionsBlock.module.css"

export const QuestionsBlock = () => {
    const cards = useSelector((state: any) => state.accordion.cards);
    return (
        <section id="faq" className={q.section}>
            <div className="container">
                <h2 className={`zag__h2 ${q.zag__margin}`}>Вопрос и ответы</h2>
                <div className={q.question__block}>

                    {cards.map((cards: any, index: any) => (
                        <Accordion key={index} title={cards.title} content={cards.description} />
                    ))}
                </div>
            </div>
        </section>
    )
}