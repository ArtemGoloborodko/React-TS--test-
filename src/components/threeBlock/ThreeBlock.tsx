import t from './ThreeBlock.module.css';

export const ThreeBlock = () => {
    return (
        <section id="three_block" className={t.section}>
            <div className="container">
                <div className={t.block__three}>
                    <div className={t.three__left}>
                        <h3 className={t.three__zag}>Круто, ты дошел до третьего блока</h3>
                        <p className={`${t.three__text} ${t.three__text_margun}`}>63% опрошенных пользовались кредитами из-за того, что не могли покрыть непредвиденные расходы свыше 15 000 ₽.</p>
                        <p className={t.three__text}>Доступ к заработанным деньгам помогает отказаться от кредитов и экономить деньги на процентах и штрафах.</p>
                    </div>
                    <div className={t.three__right}></div>
                </div>
            </div>
        </section>
    )
}