import { useState } from 'react';
import a from "./Accordion.module.css"

interface AccordionProps {
    key: string;
    title: string;
    content: string;
}

const Accordion: React.FC<AccordionProps> = ({key, title, content }) => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div key={key} className={a.accordion}>
            <div className={a.accordion__header} onClick={toggleAccordion}>
                <h3 className={a.accardion__zag}>{title}</h3>
                <span className={isOpen ? a.cloce : a.open}><img src="/svg_icon/accord_btn.svg" alt="icon" /></span>
            </div>
            {isOpen && <p className={a.accordion__content}>{content}</p>}
        </div>
    );
};

export default Accordion;
