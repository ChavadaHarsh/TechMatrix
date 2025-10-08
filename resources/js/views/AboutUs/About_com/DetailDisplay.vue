<template>
    <div
        ref="container"
        class="w-full m-10 p-10 flex flex-cols-2 gap-40 justify-between items-center overflow-hidden"
    >
        <!-- Tabs Section -->
        <div class="w-[80%]" ref="leftSection">
            <!-- Tabs -->
            <div class="flex flex-row border-gray-300 text-md font-medium">
                <div
                    class="w-full flex flex-row border justify-between border-gray-300 text-md font-medium"
                >
                    <button
                        v-for="(tab, i) in tabs"
                        :key="i"
                        @click="changeTab(tab)"
                        class="relative px-6 py-2 cursor-pointer overflow-hidden transition-all duration-500 group"
                        :class="[
                            activeTab.title === tab.title
                                ? 'text-white'
                                : 'text-gray-500 hover:text-teal-500',
                        ]"
                    >
                        <span
                            class="absolute inset-0 bg-teal-500 scale-x-0 origin-left transition-transform duration-500 ease-in-out"
                            :class="
                                activeTab.title === tab.title
                                    ? 'scale-x-100'
                                    : ''
                            "
                        ></span>
                        <span class="relative z-10">{{ tab.title }}</span>
                    </button>
                </div>
            </div>

            <!-- Tab Content -->
            <div
                ref="tabContent"
                class="mt-6 space-y-3 opacity-0 translate-y-6"
            >
                <p class="text-base font-[500] text-gray-400 leading-relaxed">
                    {{ activeTab.content }}
                </p>

                <!-- Experiences Section -->
                <ul
                    v-if="activeTab.title === 'Experiences'"
                    class="space-y-4 text-gray-600 w-[80%]"
                >
                    <li
                        v-for="(item, idx) in activeTab.items"
                        :key="idx"
                        class="flex flex-col space-y-1 opacity-0 translate-x-[-30px]"
                        :ref="(el) => (experienceRefs[idx] = el)"
                    >
                        <div
                            class="flex justify-between text-sm font-[500] text-gray-400"
                        >
                            <span>{{ item.name }}</span>
                        </div>

                        <!-- Progress Bar -->
                        <div
                            class="relative w-full bg-gray-200 rounded-full h-2 mt-3"
                        >
                            <div
                                class="bg-teal-500 h-2 rounded-l-full transition-all duration-700 ease-in-out"
                                :style="{ width: item.percent + '%' }"
                                ref="bar"
                            ></div>

                            <!-- End Circle + Percent -->
                            <div
                                ref="circle"
                                class="absolute top-1/2 -translate-y-1/2 bg-white border-2 border-teal-500 rounded-full w-4 h-4 shadow-sm transition-all duration-700"
                                :style="{ left: item.percent + '%' }"
                            >
                                <span
                                    ref="percentText"
                                    class="absolute -top-6 left-1/2 -translate-x-1/2 text-sm font-[500] text-gray-400 whitespace-nowrap"
                                >
                                    {{ item.percent }}%
                                </span>
                            </div>
                        </div>
                    </li>
                </ul>

                <!-- Industries Section -->
                <ul
                    v-else-if="activeTab.title === 'Industries'"
                    class="grid grid-cols-2 gap-x-10 gap-y-3 text-gray-700 w-[80%]"
                >
                    <li
                        v-for="(item, idx) in activeTab.items"
                        :key="idx"
                        class="flex items-center text-sm font-[500] text-gray-400 opacity-0 translate-x-[-30px]"
                        :ref="(el) => (industryRefs[idx] = el)"
                    >
                        <span
                            class="w-2 h-2 bg-teal-500 rounded-full mr-2"
                        ></span>
                        {{ item }}
                    </li>
                </ul>

                <!-- Skills (Images) -->
                <div v-else class="grid grid-cols-4 gap-3" ref="skillsGrid">
                    <img
                        v-for="(img, idx) in activeTab.items"
                        :key="idx"
                        :src="img"
                        alt="Skill"
                        class="w-20 h-20 object-contain opacity-0 scale-75"
                        :ref="(el) => (skillRefs[idx] = el)"
                    />
                </div>
            </div>
        </div>

        <!-- Right Image -->
        <div
            class="w-1/2 flex justify-center items-center opacity-0 translate-x-20"
            ref="rightImage"
        >
            <img
                src="../../../assest/About_us/techmatrix_logo.webp"
                alt="Tech Matrix Logo"
                class="max-w-full h-auto"
            />
        </div>
    </div>
</template>

<script>
import { ref, onMounted, watch, nextTick } from "vue";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import image1 from "../../../assest/About_us/d1.webp";
import image2 from "../../../assest/About_us/d2.webp";
import image3 from "../../../assest/About_us/d3.webp";
import image4 from "../../../assest/About_us/d4.webp";
import image5 from "../../../assest/About_us/d5.webp";
import image6 from "../../../assest/About_us/d6.webp";
import image7 from "../../../assest/About_us/d7.webp";
import image8 from "../../../assest/About_us/d8.webp";
import image9 from "../../../assest/About_us/d9.webp";
import image10 from "../../../assest/About_us/d10.webp";
import image11 from "../../../assest/About_us/d11.webp";
import image12 from "../../../assest/About_us/d12.webp";
import image13 from "../../../assest/About_us/d13.webp";
import image14 from "../../../assest/About_us/d14.webp";

gsap.registerPlugin(ScrollTrigger);

export default {
    name: "DetailDisplay",
    setup() {
        const tabs = ref([
            {
                title: "Experiences",
                content:
                    "Tech Matrix is a well-established IT company in Rajkot. Having initiated operations in 2009, today Tech Matrix has emerged as one of the leading web and mobile development companies. We craft beautiful, engaging websites and deliver successful SEO campaigns.",
                items: [
                    { name: "Web App", percent: 90 },
                    { name: "iPhone App", percent: 85 },
                    { name: "Android App", percent: 85 },
                    { name: "IoT", percent: 80 },
                    { name: "Custom Software", percent: 75 },
                ],
            },
            {
                title: "Skills",
                content:
                    "We have a highly experienced team that can make every impossible task possible in the field of app and software development. Check out our skills below:",
                items: [
                    image1,
                    image2,
                    image3,
                    image4,
                    image5,
                    image6,
                    image7,
                    image8,
                    image9,
                    image10,
                    image11,
                    image12,
                    image13,
                    image14,
                ],
            },
            {
                title: "Industries",
                content:
                    "We are successfully serving the following industries.",
                items: [
                    "Education",
                    "Retail & E-commerce",
                    "Travel and Tourism",
                    "Auto",
                    "Ceramic",
                    "Textile",
                    "Healthcare & Medical",
                    "Media & Entertainment",
                    "Hospitality",
                    "Gaming",
                    "Astrology",
                    "Technology and Equipment",
                    "Machine & Production",
                    "Personal & Event Management",
                    "Job & Placement",
                ],
            },
        ]);

        const activeTab = ref(tabs.value[0]);
        const container = ref(null);
        const tabContent = ref(null);
        const rightImage = ref(null);
        const bar = ref(null);
        const circle = ref(null);
        const percentText = ref(null);

        const experienceRefs = ref([]);
        const industryRefs = ref([]);
        const skillRefs = ref([]);

        // Animate on scroll entry
        onMounted(() => {
            gsap.from(container.value, {
                opacity: 0,
                y: 50,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: container.value,
                    start: "top 80%",
                    onEnter: () => animateTab(),
                },
            });

            gsap.to(rightImage.value, {
                opacity: 1,
                x: 0,
                duration: 1,
                delay: 0.3,
                ease: "power3.out",
            });
        });

        // Animate tab change
        const changeTab = async (tab) => {
            activeTab.value = tab;
            await nextTick();
            animateTab();
        };

        const animateTab = () => {
            gsap.fromTo(
                tabContent.value,
                { opacity: 0, y: 30 },
                { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
            );

            // Animate list or images based on tab type

            experienceRefs.value.forEach((el, i) => {
                gsap.fromTo(
                    el,
                    { opacity: 0, x: -30 },
                    {
                        opacity: 1,
                        x: 0,
                        delay: i * 0.1,
                        duration: 0.5,
                        ease: "power2.out",
                    }
                );
            });
            if (activeTab.value.title === "Industries") {
                industryRefs.value.forEach((el, i) => {
                    gsap.fromTo(
                        el,
                        { opacity: 0, x: -30 },
                        {
                            opacity: 1,
                            x: 0,
                            delay: i * 0.05,
                            duration: 0.5,
                        }
                    );
                });
            } else if (activeTab.value.title === "Skills") {
                skillRefs.value.forEach((el, i) => {
                    gsap.fromTo(
                        el,
                        { opacity: 0, scale: 0.7 },
                        {
                            opacity: 1,
                            scale: 1,
                            delay: i * 0.05,
                            duration: 0.4,
                            ease: "back.out(1.7)",
                        }
                    );
                });
            }
        };

        return {
            tabs,
            activeTab,
            changeTab,
            container,
            tabContent,
            rightImage,
            experienceRefs,
            industryRefs,
            skillRefs,
        };
    },
};
</script>
