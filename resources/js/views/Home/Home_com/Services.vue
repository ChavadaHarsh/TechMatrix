<template>
    <div
        class="w-full py-20 bg-amber-200 mt-10 flex flex-col justify-center items-center"
    >
        <div
            class="w-[95%] md:w-[80%] lg:w-[70%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
            <!-- Card Loop -->
            <div
                v-for="(service, index) in ServiceData"
                :key="index"
                class="bg-white rounded-2xl shadow-md hover:shadow-lg duration-300 p-6 flex flex-col items-center text-center"
            >
                <!-- Image -->
                <img
                    :src="service.img"
                    :alt="service.title"
                    class="w-20 h-20 object-contain mb-4"
                />

                <!-- Title -->
                <h3 class="text-lg font-semibold mb-2">{{ service.title }}</h3>

                <!-- Content -->
                <p class="text-gray-600 text-sm mb-4">
                    {{ service.content }}
                </p>
            </div>
        </div>
    </div>
</template>

<script>
import image1 from "../../../assest/ServicesIcon/mobile_app.webp";
import image2 from "../../../assest/ServicesIcon/web_app.webp";
import image3 from "../../../assest/ServicesIcon/customize_solution.webp";

export default {
    name: "Services",
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
                    but: "All Services ",
                },
            ],
        };
    },
};
</script>
