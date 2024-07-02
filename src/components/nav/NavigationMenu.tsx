import { useState } from "react";
import { Link } from "react-router-dom";
import s from "./NavigationMenu.module.css";

export const NavigationMenu = () => {
    const [isBurgerOpen, setIsBurgerOpen] = useState(false);

    const toggleBurgerMenu = () => {
        setIsBurgerOpen(!isBurgerOpen);
    };

    return (
        <nav className={s.nav}>
            <Link className={s.link} to="/"><img src="/img/logo.png" alt="logo" /></Link>
            <ul className={s.list}>
                <li className={s.item}><a className={s.link} href="#how_it_works">Как это работает</a></li>
                <li className={s.item}><a className={s.link} href="#three_block">3-й блок</a></li>
                <li className={s.item}><a className={s.link} href="#faq">Вопросы и ответы</a></li>
                <li className={s.item}><a className={s.link} href="#form">Форма</a></li>
            </ul>

            <button className={s.burger__menu_btn} onClick={toggleBurgerMenu}>
                <svg width="22" height="12" viewBox="0 0 22 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="22" height="2" fill="white" />
                    <rect y="10" width="22" height="2" fill="white" />
                </svg>
            </button>

            {isBurgerOpen && (
                <div className={s.burger__block}>
                    <div className={s.burger__logo_block}>
                        <Link className={s.link} to="/"><img src="/img/logo-black.png" alt="logo" /></Link>
                        <button className={s.cloce__burger} onClick={toggleBurgerMenu}><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.515625" y="16.071" width="22" height="2" transform="rotate(-45 0.515625 16.071)" fill="#191C1F" />
                            <rect x="1.92969" y="0.514771" width="22" height="2" transform="rotate(45 1.92969 0.514771)" fill="#191C1F" />
                        </svg>
                        </button>
                    </div>
                    <ul className={s.list__burger}>
                        <li className={s.item__burger}><a className={s.link__burger} href="#how_it_works">Как это работает<span><img src="/svg_icon/Vector_burger.svg" alt="logo" /></span></a></li>
                        <li className={s.item__burger}><a className={s.link__burger} href="#three_block">3-й блок<span><img src="/svg_icon/Vector_burger.svg" alt="logo" /></span></a></li>
                        <li className={s.item__burger}><a className={s.link__burger} href="#faq">Вопросы и ответы<span><img src="/svg_icon/Vector_burger.svg" alt="logo" /></span></a></li>
                        <li className={s.item__burger}><a className={s.link__burger} href="#form">Форма<span><img src="/svg_icon/Vector_burger.svg" alt="logo" /></span></a></li>
                    </ul>

                </div>
            )}
        </nav>
    );
};
