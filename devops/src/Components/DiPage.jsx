import React from 'react';
import '../styles/Di.css';

export default function DiPage() {
    return (
        <div className="di-page">


            <header className="hero hero-no-accent">
                <div className="hero-background">
                    <img
                        src="/public/photoDi.jpg"

                        className="hero-portrait"
                    />
                </div>

                <div className="hero-content">
                    <h1 className="name">Динара Тинчурина</h1>
                    <p className="position">Frontend Developer</p>
                    <p className="year">2026</p>
                </div>
            </header>


            <main className="main-content">


                <section className="section about">
                    <h2 className="section-title cursive">Обо мне</h2>
                    <p className="lead">
                        Создаю современные, эмоциональные и продуманные интерфейсы.<br />
                        Обращаю внимание на детали, типографику и производительность.
                    </p>
                    <p>
                        Ответственная, организованная, всегда укладываюсь в дедлайны.<br />
                        Умею находить общий язык с дизайнерами, менеджерами и разработчиками бэкенда.
                        Быстро учусь, постоянно совершенствую свои навыки.
                    </p>
                </section>


                <section className="section skills">
                    <h2 className="section-title">Технологии</h2>
                    <div className="skills-grid">
                        <div className="skill">
                            <div className="skill-name">React  </div>
                            <div className="skill-desc">Next.js · Redux · ReactRoute</div>
                        </div>

                        <div className="skill">
                            <div className="skill-name">Vue</div>
                            <div className="skill-desc">Vue 3 · Composition API</div>
                        </div>
                        <div className="skill">
                            <div className="skill-name">TypeScript</div>
                        </div>
                        <div className="skill">
                            <div className="skill-name">JavaScript</div>
                            <div className="skill-desc">ESNext · Async · Performance</div>
                        </div>
                        <div className="skill">
                            <div className="skill-name">Figma</div>
                            <div className="skill-desc">Дизайн-системы · Прототипы</div>
                        </div>
                        <div className="skill">
                            <div className="skill-name">HTML / CSS</div>
                            <div className="skill-desc">SCSS · Анимации  </div>
                        </div>
                    </div>
                </section>
                <section className="section projects">
                    <h2 className="section-title cursive">Проекты</h2>
                    <div className="projects-grid">

                        <div className="project-card">
                            <img
                                src="/public/Odins.png"

                                className="project-image"
                            />
                            <h3 className="project-title">Odin`s Brew</h3>
                            <p className="project-desc">
                                Современный сайт кофейни в скандинавском минималистичном стиле.
                                Чистый дизайн, акцент на типографику, плавные микроанимации при наведении,
                                адаптивная вёрстка, тёмная/светлая тема, интеграция с меню онлайн-заказом, новости и блог.
                            </p>
                            <div className="project-tech">
                                React · Tailwind CSS ·  · Figma
                            </div>
                            <div className="project-links">

                                <a href="https://github.com/sky1768205/HTML-CSS-TINCHURINA" className="project-link">GitHub</a>
                            </div>
                        </div>

                        <div className="project-card">
                            <img
                                src="/public/Prompolimer.png"
                                className="project-image"
                            />
                            <h3 className="project-title">Prompolimerexport</h3>
                            <p className="project-desc">
                                Корпоративный сайт производственной компании полимерных изделий.
                                Многостраничный сайт с каталогом продукции.
                                С разделами «О компании», «Производство», «Сертификаты», адаптивный дизайн.

                            </p>
                            <div className="project-tech">
                                Djanjo · Python · HTML/CSS
                            </div>
                            <div className="project-links">
                                <a href="https://prompolimerexport.ru" className="project-link">Live Demo</a>
                                <a href="https://github.com/RachellGardner/RostTTTv2" className="project-link">GitHub</a>
                            </div>
                        </div>
                    </div>
                </section>


                <section className="section hobbies-languages">
                    <h2 className="section-title cursive">Увлечения и языки</h2>
                    <div className="two-columns">
                        <div className="column">
                            <h3>Интересы</h3>
                            <ul>
                                <li>История искусства и цивилизаций</li>
                                <li>Философия (эстетика, этика, смысл)</li>
                                <li>Современная фотография и визуальное искусство</li>
                                <li>Поэзия и литература XX–XXI веков</li>
                            </ul>
                        </div>

                        <div className="column">
                            <h3>Языки</h3>
                            <ul>
                                <li>Английский — Upper-Intermediate</li>
                                <li>Французский — в процессе изучения</li>
                                <li>Русский — родной</li>
                            </ul>
                        </div>
                    </div>
                </section>


            </main>
        </div>
    );
}