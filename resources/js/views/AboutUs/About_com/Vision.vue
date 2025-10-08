<template>
    <section class="w-full bg-white font-[Poppins] mt-10">
        <div class="grid grid-cols-3 gap-6">
            <div>
                <div ref="Digital" class="space-y-2 lg:space-y-4 text-left">
                    <h3
                        class="text-[#00B5AC] font-semibold text-lg md:text-xl lg:text-2xl uppercase tracking-wide lg:tracking-widest"
                    >
                        What We Are?
                    </h3>
                    <h2
                        class="text-lg md:text-xl lg:text-2xl font-bold text-gray-900 leading-snug"
                    >
                        Your Digital Partner To Create Inspirational Design And
                        Robust Solution For Web, Mobile & Custom Software
                        Including IOT.
                    </h2>
                    <p
                        class="text-gray-400 font-[500] text-base md:text-md leading-relaxed"
                    >
                        Established a decade ago, TechMatrix is a leading mobile
                        and web app development company in India providing
                        custom solutions. Our expert designers, developers, and
                        platform specialists deliver excellence in web, iOS, and
                        Android app development, creating paths for large-scale
                        digital transformation — including IOT software
                        solutions.
                    </p>
                </div>
            </div>
            <div
                class="col-span-2 flex flex-col p-0 lg:p-6 sm:flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-10 lg:space-x-16 mr-0 xl:mr-15"
            >
                <!-- Vision Card -->
                <div ref="Vision" class="flex-1">
                    <div
                        class="relative bg-white rounded-2xl justify-between items-center shadow-lg hover:shadow-2xl p-8 sm:p-8 w-full transition-all duration-300 translate-y-50 lg:translate-y-40"
                    >
                        <div
                            class="absolute z-20 -top-5 -right-7 bg-[#00B5AC] cursor-pointer rounded-full p-6 flex items-center justify-center shadow-md"
                        >
                            <img
                                src="../../../assest/About_us/vision.webp"
                                alt="Our Vision"
                                class="w-6 h-6 lg:w-8 lg:h-8"
                            />
                        </div>

                        <h4
                            class="text-xl md:text-2xl xl:text-3xl font-bold text-gray-900 mb-3"
                        >
                            Our Vision
                        </h4>
                        <p
                            class="text-gray-400 text-md md:text-lg xl:text-xl font-[500]"
                        >
                            At TechMatrix, we ensure that along with the
                            company’s growth, our employees and clients prosper
                            by fostering a healthy, balanced culture of
                            innovation and collaboration.
                        </p>
                    </div>
                </div>

                <!-- Mission Card -->
                <div ref="Mission" class="flex-1">
                    <div
                        class="relative bg-white rounded-2xl justify-between items-center shadow-lg hover:shadow-2xl p-8 sm:p-8 w-full transition-all duration-300"
                    >
                        <div
                            class="absolute z-20 -top-5 -right-7 bg-[#00B5AC] cursor-pointer rounded-full p-6 flex items-center justify-center shadow-md"
                        >
                            <img
                                src="../../../assest/About_us/mission.webp"
                                alt="Our Mission"
                                class="w-6 h-6 lg:w-8 lg:h-8"
                            />
                        </div>

                        <h4
                            class="text-xl md:text-2xl xl:text-3xl font-bold text-gray-900 mb-3"
                        >
                            Our Mission
                        </h4>
                        <p
                            class="text-gray-400 text-md md:text-lg xl:text-xl font-[500]"
                        >
                            Sound Strategy, Intelligent Design and Powerful
                            Technology with dedication and responsibility to our
                            work, to our client, to our product and for all our
                            valuable users.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default {
    name: "VisionSection",
    mounted() {
        gsap.from(this.$refs.Digital, {
            x: -100,
            opacity: 0,
            duration: 1,
            scrollTrigger: {
                trigger: this.$refs.Digital,
                start: "top 80%", // when top of section hits 80% of viewport
                toggleActions: "play none none none",
            },
        });

        gsap.from(this.$refs.Vision, {
            y: 200,
            opacity: 0,
            duration: 1.5,
            easy: "power3.inOut",
            scrollTrigger: {
                trigger: this.$refs.Vision,
                start: "top 80%", // when top of section hits 80% of viewport
                toggleActions: "play none none none",
            },
        });
        gsap.from(this.$refs.Mission, {
            x: 200,
            opacity: 0,
            duration: 1.5,
            easy: "power3.inOut",
            scrollTrigger: {
                trigger: this.$refs.Digital,
                start: "top 80%", // when top of section hits 80% of viewport
                toggleActions: "play none none none",
            },
        });
    },
};
</script>
