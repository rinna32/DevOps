import React from 'react'

export default function MariaPage() {
    return (
        <div className="min-h-screen bg-white text-black flex flex-col items-center px-5 md:px-8 lg:px-12 py-12 font-sans">

            <h1 className="text-6xl sm:text-8xl md:text-9xl lg:text-[10rem] xl:text-[11rem] font-black leading-none tracking-[-0.03em] uppercase mb-16 md:mb-24 text-center">
                Maria
                <span className="block text-5xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] mt-[-0.12em]">
                    Snitko
                </span>
                <span className="block text-4xl sm:text-5xl md:text-6xl">.</span>
            </h1>

            <div className="w-full max-w-6xl flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-16 mb-24">
                <div className="w-full md:w-1/2">
                    <img
                        src="/mariia.jpeg"
                        alt=""
                        className="w-full h-auto object-cover"
                    />
                </div>

                <div className="w-full md:w-1/2 text-left space-y-4 md:pt-8">
                    <p className="text-2xl md:text-3xl font-bold">Maria Snitko</p>
                    <p className="text-lg md:text-xl">Frontend Developer (Full-Stack)</p>
                    <p className="text-lg md:text-xl">HTML, CSS, JavaScript, TypeScript</p>
                    <p className="text-lg md:text-xl">React, Next, Vue, Django, Git, ect.</p>
                    <p className="text-base md:text-lg mt-6 opacity-80">
                        Создаю быстрые, адаптивные и удобные веб-приложения с чистой архитектурой и продуманным UX.<br />
                    </p>
                </div>
            </div>

            <div className="w-200 h-100 flex flex-col md:flex-row-reverse items-center md:items-start gap-10 md:gap-16 mb-24">
                <div className="w-full md:w-1/2">
                    <img
                        src="/snow.jpg"
                        alt=""
                        className="w-full h-auto object-cover"
                    />
                </div>

                <div className="w-full md:w-1/2 text-left md:text-right space-y-4 md:pt-8">
                    <p className="text-2xl md:text-3xl font-bold">Hobbies</p>
                    <p className="text-lg md:text-xl">Painting</p>
                    <p className="text-lg md:text-xl">Snowbording</p>
                    <p className="text-lg md:text-xl">Reading</p>
                    <p className="text-lg md:text-xl">History and Crime</p>
                    <p className="text-base md:text-lg mt-6 opacity-80">
                        Профессионально катаюсь на сноуборде<br />
                        Выпустилась из художественной школы<br />
                        Люблю читать дарк-фэнтази и книги в стиле Пелевина<br />
                        Активно изучаю историю и тру крайм<br />
                    </p>
                </div>
            </div>

            <div className=" mt-40 w-full max-w-5xl text-center mb-16">
                <p className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
                    REAL MOMENTS
                </p>
                <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-80">
                    Few moments from my life<br />
                </p>
            </div>

            <div className="w-full max-w-6xl grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                <img src="/1.jpeg" alt="" className="w- h-auto object-cover " />
                <img src="/2.jpeg" alt="" className="w-full h-auto object-cover " />
                <img src="/3.jpeg" alt="" className="w-full h-auto object-cover" />
                <img src="/4.jpeg" alt="" className="w-full h-auto object-cover " />
            </div>

        </div>
    );
}