<template>
    <div
        class="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-10 lg:gap-12"
    >
        <!-- Card Loop -->
        <div
            v-for="(service, index) in ServiceData"
            :key="index"
            ref="serviceCards"
            class="bg-white rounded-2xl min-w-56 shadow-[0_0_13px_-4px_rgb(0_0_0_/_17%)] transition duration-300 pt-12 pb-6 px-8 flex flex-col items-center text-center space-y-5 group"
        >
            <!-- Image -->
            <div
                v-if="service.img"
                class="w-24 h-24 flex items-center justify-center relative z-20"
            >
                <img
                    :src="service.img"
                    :alt="service.title"
                    class="w-20 h-20 object-contain z-10"
                />
                <div
                    class="absolute -top-3 -left-0 border-l-[50px] rotate-15 z-0 border-l-transparent border-b-[80px] border-b-gray-300 border-r-[50px] border-r-transparent group-hover:rotate-0 transition-all duration-300"
                ></div>
            </div>

            <!-- Title -->
            <div class="text-sm text-gray-800">
                <span
                    v-if="service.title === 'See all services'"
                    class="text-primary text-3xl font-semibold"
                >
                    {{ service.title }}
                </span>
                <span v-else class="font-semibold">{{ service.title }}</span>
            </div>

            <Line />

            <!-- Content -->
            <p class="text-gray-600 text-md font-semibold leading-relaxed px-2">
                {{ service.content }}
            </p>

            <!-- Optional Button (for last card) -->
            <button
                v-if="service.but"
                class="relative mt-4 px-10 py-4 font-medium text-xl border-2 border-transparent bg-[#00B5AC] text-white cursor-pointer overflow-hidden transition-all duration-300 hover:border-[#151515] before:content-[''] before:absolute before:top-0 before:left-1/2 before:-translate-x-1/2 before:w-16 before:h-full before:bg-transparent before:transition-all before:duration-500 before:ease-in-out hover:before:bg-[#151515] hover:before:w-full hover:before:left-1/2 hover:before:-translate-x-1/2 after:content-[''] after:absolute after:inset-0 after:bg-transparent after:transition-all after:duration-500"
            >
                <span
                    class="relative z-10 transition-all duration-300 hover:text-white"
                >
                    {{ service.but }}
                </span>
            </button>
        </div>
    </div>
</template>

<script>
import image1 from "../../../assest/ServicesIcon/mobile_app.webp";
import image2 from "../../../assest/ServicesIcon/web_app.webp";
import image3 from "../../../assest/ServicesIcon/customize_solution.webp";
import Line from "./Line_com.vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default {
    name: "Services",
    components: { Line },
    data() {
        return {
            ServiceData: [
                {
                    img: image1,
                    title: "Mobile App",
                    content:
                        "iPhone App, Android App, iPad and tablet app, Smart Tv App.",
                },
                {
                    img: image2,
                    title: "Web App",
                    content:
                        "Website design, Development, Redesign website, ecommerce website, catalog.",
                },
                {
                    img: image3,
                    title: "Customize Solution",
                    content:
                        "Convert manual process into fully functional digital software in form of web and mobile app combo.",
                },
                {
                    title: "See all services",
                    content: "Browse our all services with their case studies.",
                    but: "All Services",
                },
            ],
        };
    },
    mounted() {
        // Animate each card from right to left on scroll
        this.$nextTick(() => {
            this.$refs.serviceCards.forEach((card, i) => {
                gsap.from(card, {
                    x: 150,
                    opacity: 0,
                    duration: 0.5,
                    ease: "power2.out",
                    delay: i * 0.2,
                    scrollTrigger: {
                        trigger: card,
                        start: "top 100%",
                        toggleActions: "play none none reverse",
                    },
                });
            });
        });
    },
};
</script>
