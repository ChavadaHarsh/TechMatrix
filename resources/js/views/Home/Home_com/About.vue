<template>
    <section
        class="w-full flex flex-col lg:flex-row items-center justify-between gap-14 px-6 lg:px-20 pt-8 pb-12 font-[Poppins] bg-white overflow-hidden"
    >
        <!-- Left Illustration -->
        <div ref="imageSection" class="flex-1 flex justify-center items-center">
            <img
                src="../../../assest/character.webp"
                alt="About Illustration"
                class="max-w-md lg:max-w-lg object-contain"
            />
        </div>

        <!-- Right Content -->
        <div
            ref="contentSection"
            class="flex-1 flex flex-col mt-10 space-y-6 text-gray-700"
        >
            <!-- Decorative Wavy Line -->
            <div class="relative mb-2">
                <div
                    class="w-24 h-[6px] bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22120%22 height=%226%22 viewBox=%220%200%20120%206%22><path d=%22M0 3 Q5 0 10 3 T20 3 T30 3 T40 3 T50 3 T60 3 T70 3 T80 3 T90 3 T100 3 T110 3 T120 3%22 stroke=%22%2300B5AC%22 stroke-width=%222%22 fill=%22none%22 stroke-linecap=%22round%22/></svg>')] bg-no-repeat bg-contain"
                ></div>
            </div>

            <!-- Heading -->
            <div>
                <h2
                    class="text-2xl lg:text-3xl font-[400] flex items-center gap-3"
                >
                    <span class="w-1 h-8 bg-gray-400 inline-block"></span>
                    Few Stats About Us
                </h2>
                <p class="mt-3 text-gray-400 font-[500] leading-relaxed">
                    TechMatrix – Providing the Right Technology Matrix is a team
                    of highly experienced app designers and developers creating
                    unique software for you.
                </p>
            </div>

            <!-- Stats Grid -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
                <div
                    v-for="(stat, i) in stats"
                    :key="i"
                    class="flex flex-col items-center justify-center bg-white shadow-md px-8 py-6 text-center transition-all duration-300 hover:shadow-lg rounded-xl"
                >
                    <div
                        class="text-3xl mb-2 text-[#00B5AC]"
                        v-html="stat.icon"
                    ></div>
                    <h3
                        class="text-sm font-semibold text-gray-600 uppercase tracking-wider"
                    >
                        {{ stat.title }}
                    </h3>
                    <p class="text-2xl font-bold text-[#00B5AC] mt-1">
                        {{ stat.value }}<span class="text-gray-600">+</span>
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default {
    name: "AboutStats",
    data() {
        return {
            stats: [
                {
                    title: "Project Completed",
                    value: 100,
                    icon: '<i class="fa-solid fa-mobile-screen-button"></i>',
                },
                {
                    title: "Website Developed",
                    value: 50,
                    icon: '<i class="fa-solid fa-globe"></i>',
                },
                {
                    title: "Few Stats About Us",
                    value: 15,
                    icon: '<i class="fa-solid fa-clock"></i>',
                },
                {
                    title: "Employees",
                    value: 10,
                    icon: '<i class="fa-solid fa-user"></i>',
                },
            ],
        };
    },
    mounted() {
        // Image animation - from left
        gsap.from(this.$refs.imageSection, {
            scrollTrigger: {
                trigger: this.$refs.imageSection,
                start: "top 85%",
                toggleActions: "play none none reverse",
            },
            x: -100,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
        });

        // Text and content animation - from right
        gsap.from(this.$refs.contentSection, {
            scrollTrigger: {
                trigger: this.$refs.contentSection,
                start: "top 85%",
                toggleActions: "play none none reverse",
            },
            x: 100,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
            delay: 0.2,
        });
    },
};
</script>
