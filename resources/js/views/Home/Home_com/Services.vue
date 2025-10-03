<template>
    <div
        class="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-10 lg:gap-12"
    >
        <!-- Card Loop -->
        <div
            v-for="(service, index) in ServiceData"
            :key="index"
            class="bg-white group rounded-2xl min-w-56 shadow-[0_0_13px_-4px_rgb(0_0_0_/_17%)] transition duration-300 pt-12 pb-6 px-8 flex flex-col items-center text-center space-y-5"
        >
            <!-- Image (optional for last card) -->
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
                <!-- If it's 'See all services' -->
                <span
                    v-if="service.title === 'See all services'"
                    class="text-primary text-3xl font-semibold mt-"
                >
                    {{ service.title }}
                </span>

                <!-- Otherwise -->
                <span v-else class="font-semibold">
                    {{ service.title }}
                </span>
            </div>

            <Line />
            <!-- Content -->
            <p class="text-gray-600 text-md font-semibold leading-relaxed px-2">
                {{ service.content }}
            </p>

            <!-- Optional Button (for last card) -->
            <button
                v-if="service.but"
                class="relative mt-4 px-10 py-4 font-medium text-xl bg-[#00B5AC] text-white cursor-pointer overflow-hidden group"
            >
                {{ service.but }}

                <!-- before element -->
                <span
                    class="absolute inset-0 bg-[#151515] transition-all duration-300 group-hover:opacity-0 group-hover:scale-0"
                ></span>

                <!-- after element -->
                <span
                    class="absolute inset-0 border border-[#151515] opacity-0 scale-125 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100"
                ></span>
            </button>
        </div>
    </div>
</template>

<script>
import image1 from "../../../assest/ServicesIcon/mobile_app.webp";
import image2 from "../../../assest/ServicesIcon/web_app.webp";
import image3 from "../../../assest/ServicesIcon/customize_solution.webp";
import Line from "./Line_com.vue";

export default {
    name: "Services",
    components: {
        Line,
    },
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
};
</script>
