import { NavLink } from "react-router";

export default function IndexPage() {
    return (
        <div>
            <section className="relative min-h-screen flex items-center justify-center">
                <div className="absolute inset-0 -z-10">
                    <img src="/main.jpg" alt="NeoGoth Vogue" className="w-full h-full object-cover" />
                </div>

                <div
                    className="text-center px-6"
                >
                    <h1 className="text-7xl sm:text-8xl md:text-9xl font-bold tracking-tighter text-black drop-shadow-2xl">
                        Biography
                    </h1>
                    <p
                        className="mt-6 text-lg sm:text-xl md:text-2xl font-light text-black tracking-wide"
                    >
                        Our bio Pages
                    </p>
                </div>
            </section>

            <section className="bg-white py-24 lg:py-32">
                <div className="max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-20">

                    <div
                        className="text-center mb-20"
                    >
                        <h2 className="text-6xl sm:text-7xl md:text-9xl font-bold tracking-tight">
                            Link to meet
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-20 px-4 md:px-8">
                        <NavLink to='/di'>
                            <div className="flex flex-col items-center text-center">
                                <img src="/first.jpeg" alt="Di" className="w-full max-w-lg rounded-xl shadow-2xl" />
                                <div className="mt-6 max-w-lg">
                                    <h3 className="text-2xl font-bold">Di</h3>
                                </div>
                            </div>
                        </NavLink>

                        <NavLink to='/maria'>
                            <div className="flex flex-col items-center text-center">
                                <img src="/second.jpg" alt="Maria" className="w-full max-w-lg rounded-xl shadow-2xl" />
                                <div className="mt-6 max-w-lg">
                                    <h3 className="text-2xl font-bold">Maria</h3>
                                </div>
                            </div>
                        </NavLink>

                    </div>

                </div>
            </section>


        </div>
    );
}