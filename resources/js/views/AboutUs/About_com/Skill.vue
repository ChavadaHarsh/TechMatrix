<template>
    <section class="w-full bg-white py-16 px-6 lg:px-20 font-[Poppins]">
        <!-- Heading -->
        <div class="space-y-2 mb-14 text-center">
            <h3
                ref="title"
                class="text-[#00B5AC] text-xl font-semibold uppercase tracking-widest"
            >
                Why TechMatrix?
            </h3>
            <h2
                ref="content"
                class="text-2xl md:text-3xl font-bold text-gray-900 tracking-widest"
            >
                Completely Disintermediate Excellent Skills
            </h2>
        </div>

        <!-- Features Grid -->
        <div
            ref="gridDev"
            class="px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 cursor-pointer"
        >
            <div
                ref="cards"
                v-for="(item, index) in features"
                :key="index"
                class="flex flex-col space-y-2 justify-between hover:bg-[#00B5AC] rounded-lg p-7 group"
            >
                <div class="flex flex-row justify-between">
                    <img
                        :src="item.icon"
                        :alt="item.title"
                        class="w-20 h-20 invert-[0] group-hover:invert group-hover:brightness-150 transition-all duration-500"
                    />
                    <h1
                        class="text-6xl text-white font-[700] group-hover:text-gray-300"
                    >
                        0{{ index + 1 }}
                    </h1>
                </div>
                <h4
                    class="text-xl font-[600] text-gray-900 group-hover:text-white"
                >
                    {{ item.title }}
                </h4>
                <p
                    class="text-gray-600 text-lg max-w-xs group-hover:text-white"
                >
                    {{ item.description }}
                </p>
            </div>
        </div>
    </section>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import work from "../../../assest/About_us/s1.webp";
import team from "../../../assest/About_us/s2.webp";
import development from "../../../assest/About_us/s3.webp";
import Customer from "../../../assest/About_us/s4.webp";
import Time from "../../../assest/About_us/s5.webp";
import Client from "../../../assest/About_us/s6.webp";

gsap.registerPlugin(ScrollTrigger);

export default {
    name: "WhyTechMatrix",

    data() {
        return {
            features: [
                {
                    icon: work,
                    title: "Professional Work",
                    description:
                        "In today’s competitive world, the role of the IT professional is very important one.",
                },
                {
                    icon: team,
                    title: "Team Work",
                    description:
                        "Teamwork can help companies to be more flexible.",
                },
                {
                    icon: development,
                    title: "Development Process",
                    description:
                        "The development process can be streamlined in much the same way.",
                },
                {
                    icon: Customer,
                    title: "Customer Centric Process",
                    description:
                        "Becoming a truly customer-centric process takes time, but you can start small.",
                },
                {
                    icon: Time,
                    title: "Time Management",
                    description:
                        "Review time and find out areas that are taking longer than anticipated.",
                },
                {
                    icon: Client,
                    title: "Client Relationship",
                    description:
                        "Understand your client’s goals and focus on communication.",
                },
            ],
        };
    },

    mounted() {
        this.animateSection();
    },

    methods: {
        animateSection() {
            gsap.from(this.$refs.title, {
                x: 100,
                opacity: 0,
                duration: 1.2,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: this.$refs.title,
                    start: "top 85%",
                    toggleActions: "play none none reverse",
                },
            });

            gsap.from(this.$refs.content, {
                x: -100,
                opacity: 0,
                duration: 1.2,
                delay: 0.3,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: this.$refs.content,
                    start: "top 85%",
                    toggleActions: "play none none reverse",
                },
            });

            const elements = Array.isArray(this.$refs.cards)
                ? this.$refs.cards
                : [this.$refs.cards];

            if (!elements.length) return;

            elements.forEach((el, i) => {
                gsap.from(el, {
                    opacity: 0,
                    x: 200,
                    y: 10,

                    duration: 1.5,
                    ease: "power1.inOut",
                    delay: i * 0.3,
                    scrollTrigger: {
                        trigger: this.$refs.gridDev,
                        start: "top 95%",
                        toggleActions: "play none none reverse",
                    },
                });
            });
        },
    },
};
</script>
