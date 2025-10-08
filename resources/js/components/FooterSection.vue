<template>
    <footer
        ref="footerSection"
        class="bg-[#1b1826] text-white pt-10 pb-4 px-6 lg:px-16 font-[Poppins]"
    >
        <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
            <!-- Left Section -->
            <div ref="left" class="space-y-4">
                <img
                    src="../assest/companyLog/footer_logo.png"
                    class="w-36 h-20 object-contain"
                    alt="Company Logo"
                />
                <p class="text-gray-400 text-base leading-relaxed">
                    {{ company.description }}
                </p>
            </div>

            <!-- Middle Section -->
            <div ref="middle" class="space-y-6">
                <div
                    v-for="(item, index) in contactInfo"
                    :key="index"
                    class="flex flex-col sm:flex-row gap-3 border-b border-gray-700 pb-3"
                >
                    <h3 class="text-[#00B5AC] font-medium uppercase text-sm">
                        {{ item.title }}
                    </h3>
                    <span class="text-gray-300 text-sm sm:text-base">
                        {{ item.value }}
                    </span>
                </div>

                <!-- Social Icons -->
                <div class="flex gap-5 mt-4">
                    <!-- Facebook -->
                    <a
                        href="https://facebook.com"
                        target="_blank"
                        class="p-2 rounded-full bg-[#00B5AC] hover:bg-[#009b94] transition duration-300"
                    >
                        <svg
                            fill="white"
                            class="w-5 h-5"
                            viewBox="-337 273 123.5 256"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M-260.9,327.8c0-10.3,9.2-14,19.5-14c10.3,0,21.3,3.2,21.3,3.2l6.6-39.2
                c0,0-14-4.8-47.4-4.8c-20.5,0-32.4,7.8-41.1,19.3
                c-8.2,10.9-8.5,28.4-8.5,39.7v25.7H-337V396h26.5v133h49.6V396h39.3l2.9-38.3h-42.2
                V327.8z"
                            ></path>
                        </svg>
                    </a>

                    <!-- LinkedIn -->
                    <a
                        href="https://linkedin.com"
                        target="_blank"
                        class="p-2 rounded-full bg-[#00B5AC] hover:bg-[#009b94] transition duration-300"
                    >
                        <svg
                            fill="white"
                            viewBox="0 0 24 24"
                            class="w-5 h-5"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <circle cx="4.983" cy="5.009" r="2.188"></circle>
                            <path
                                d="M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118
                1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657
                c0-3.27-.704-5.783-4.526-5.783-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66H9.237zm-6.142 0H6.87v12.139H3.095z"
                            ></path>
                        </svg>
                    </a>
                </div>
            </div>

            <!-- Right Section -->
            <div ref="right">
                <h3
                    class="uppercase text-gray-300 text-lg md:text-xl font-semibold mb-4 border-b border-gray-700 pb-3"
                >
                    What We Offer
                </h3>
                <ul class="space-y-3 text-gray-400">
                    <li
                        v-for="(service, index) in services"
                        :key="index"
                        class="group flex justify-between items-center border-b border-gray-700 pb-2 cursor-pointer transition-all duration-300 hover:text-[#00B5AC]"
                    >
                        <span class="relative">
                            {{ service.name }}
                            <span
                                class="absolute left-0 bottom-0 w-0 h-[2px] bg-[#00B5AC] transition-all duration-300 group-hover:w-full"
                            ></span>
                        </span>
                    </li>
                </ul>
            </div>
        </div>

        <!-- Bottom Bar -->
        <div
            ref="bottom"
            class="text-center text-gray-500 text-sm border-gray-800 mt-10 pt-4"
        >
            © {{ currentYear }}
            <span class="text-white font-medium">{{ company.name }}</span> –
            Providing the Right Technology Matrix. All rights reserved.
            <a href="#" class="text-[#00B5AC] hover:underline ml-1">
                Privacy Policy
            </a>
        </div>
    </footer>
</template>

<script>
import PageLayout from "./PageLayout.vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default {
    name: "FooterSection",
    components: { PageLayout },
    data() {
        return {
            currentYear: new Date().getFullYear(),
            company: {
                name: "TechMatrix",
                description:
                    "Our company has been developing high-quality and reliable corporate apps for more than 15 years. We are renowned professionals for web/mobile app development.",
            },
            contactInfo: [
                {
                    title: "Address",
                    value: "615, Nakshtra 8, Sadhu Vaswani Road, Rajkot",
                },
                { title: "Phones", value: "+91 8460928189, +91 9408488904" },
                { title: "E-Mails", value: "info@techmatrix.io" },
            ],
            services: [
                { name: "Mobile App" },
                { name: "Web App" },
                { name: "Customize Solutions" },
            ],
        };
    },
    mounted() {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: this.$refs.footerSection,
                start: "top 95%",
                toggleActions: "play none none reverse",
            },
        });

        tl.from(this.$refs.left, {
            x: 100,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
        })
            .from(
                this.$refs.middle,
                {
                    y: 100,
                    opacity: 0,
                    duration: 0.8,
                    ease: "power3.out",
                },
                "-=0.4"
            )
            .from(
                this.$refs.right,
                {
                    x: 100,
                    opacity: 0,
                    duration: 0.8,
                    ease: "power3.out",
                },
                "-=0.4"
            )
            .from(
                this.$refs.bottom,
                {
                    y: 50,
                    opacity: 0,
                    duration: 0.8,
                    ease: "power3.out",
                },
                "-=0.3"
            );
    },
};
</script>
