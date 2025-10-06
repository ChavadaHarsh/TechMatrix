<template>
    <section
        ref="getInfSection"
        class="w-full bg-white py-16 px-6 lg:px-24 flex flex-col lg:flex-row items-center justify-between gap-12 font-[Poppins]"
    >
        <!-- Left Content -->
        <div
            ref="leftContent"
            class="flex flex-col max-w-lg space-y-6 text-left"
        >
            <h2 class="text-3xl lg:text-4xl font-[400] text-gray-800">
                Get More With Us
            </h2>

            <!-- Tabs -->
            <div
                class="flex flex-row justify-between border-gray-300 text-md font-medium"
            >
                <div
                    class="flex flex-row justify-between border border-gray-300 text-md font-medium"
                >
                    <button
                        v-for="(tab, i) in tabs"
                        :key="i"
                        @click="activeTab = tab"
                        class="relative px-6 py-2 cursor-pointer overflow-hidden transition-all duration-500 group"
                        :class="[
                            activeTab === tab
                                ? 'text-white'
                                : 'text-gray-500 hover:text-teal-500',
                        ]"
                    >
                        <!-- Animated background -->
                        <span
                            class="absolute inset-0 bg-teal-500 text-white scale-x-0 origin-left transition-transform duration-500 ease-in-out"
                            :class="activeTab === tab ? 'scale-x-100' : ''"
                        ></span>

                        <!-- Text above animation -->
                        <span class="relative z-10">{{ tab }}</span>
                    </button>
                </div>
            </div>

            <!-- Description -->
            <p class="text-gray-600 font-[500] leading-relaxed">
                {{ tabDescriptions[activeTab] }}
            </p>

            <!-- Button -->
            <button
                class="relative overflow-hidden text-teal-500 font-semibold px-6 py-3 w-fit rounded-md border-2 border-teal-500 transition-all duration-500 ease-in-out transform hover:scale-90 group"
            >
                <!-- Animated background -->
                <span
                    class="absolute inset-0 bg-teal-500 scale-x-0 group-hover:scale-x-100 origin-right transition-transform duration-500 ease-in-out"
                ></span>

                <!-- Text -->
                <span
                    class="relative z-10 group-hover:text-white transition-colors duration-300"
                >
                    Get In Touch
                </span>
            </button>
        </div>

        <!-- Right Images -->
        <div
            ref="rightImages"
            class="flex flex-row items-center justify-center gap-6"
        >
            <div class="relative w-[180px] md:w-[230px] lg:w-[260px]">
                <img
                    src="../../../assest/index-4-261x484.webp"
                    alt="App 1"
                    class="w-full h-auto object-contain drop-shadow-2xl rounded-[2rem] border border-gray-200"
                />
            </div>
            <div class="relative w-[180px] md:w-[230px] lg:w-[260px]">
                <img
                    src="../../../assest/index-5-261x484.webp"
                    alt="App 2"
                    class="w-full h-auto object-contain drop-shadow-2xl rounded-[2rem] border border-gray-200"
                />
            </div>
        </div>
    </section>
</template>

<script>
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default {
    name: "GetInf",
    data() {
        return {
            tabs: ["PLAN", "DESIGN", "DEVELOP", "TESTING", "LAUNCH"],
            activeTab: "PLAN",
            tabDescriptions: {
                PLAN: "We first create detailed documentation of client requirements. We make sure that the client and our team will be on the same page.",
                DESIGN: "Then we design whole project on PSD/Figma and get it approved from our clients.",
                DEVELOP:
                    "After confirming about design, our development team works on web/mobile app.",
                TESTING:
                    "We test each and every module and make sure that the app is bug free. We also do code review for product quality.",
                LAUNCH: "Finally we debug and deploy on our server.",
            },
        };
    },
    mounted() {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: this.$refs.getInfSection,
                start: "top 90%",
                toggleActions: "play none none reverse",
            },
        });

        // 🔹 Left content animation (left → right)
        tl.from(this.$refs.leftContent, {
            x: -200,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
        });

        // 🔹 Right images animation (bottom → top)
        tl.from(
            this.$refs.rightImages,
            {
                y: 200,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
            },
            "-=0.5" // overlap slightly
        );
    },
};
</script>
