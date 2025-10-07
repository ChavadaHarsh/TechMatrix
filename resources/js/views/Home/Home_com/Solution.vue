<template>
    <section
        ref="section"
        class="w-full overflow-hidden py-16 px-6 lg:px-20 bg-white transition-all duration-300"
    >
        <div
            class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-12 transition-all duration-300"
        >
            <div
                v-for="(image, index) in images"
                :key="index"
                ref="gallery"
                class="overflow-hidden border-2 cursor-pointer border-gray-300 transition-all duration-300"
            >
                <img
                    :src="image"
                    alt="Solution Image"
                    class="w-full h-60 object-center hover:scale-[98%] transition-all duration-300"
                />
            </div>
        </div>
    </section>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// 👇 Import all 9 images
import WebSite from "../../../assest/Solution/Website_design/website-design-index.webp";
import MobileApp from "../../../assest/Solution/Mobiles_app/mobiles-apps.webp";
import Iot from "../../../assest/Solution/Iot_project/iot_banner.webp";
import CMS from "../../../assest/Solution/Cms_portal/cms-portal.webp";
import CustomSol from "../../../assest/Solution/CustomSol/custom-solution.webp";
import TravelPortal from "../../../assest/Solution/Travel_portal/travel-portal.webp";
import MobileGame from "../../../assest/Solution/Mobile_games/868mobiles-games.webp";
import Eduction from "../../../assest/Solution/Eduction/education.webp";
import Ecommerce from "../../../assest/Solution/E-commerce/ecommerce.webp";

gsap.registerPlugin(ScrollTrigger);
export default {
    name: "Solution",

    data() {
        return {
            images: [
                WebSite,
                MobileApp,
                Iot,
                CMS,
                CustomSol,
                TravelPortal,
                MobileGame,
                Eduction,
                Ecommerce,
            ],
        };
    },

    mounted() {
        this.animateGallery();
    },

    methods: {
        animateGallery() {
            const elements = Array.isArray(this.$refs.gallery)
                ? this.$refs.gallery
                : [this.$refs.gallery];

            if (!elements.length) return;

            elements.forEach((el, i) => {
                gsap.from(el, {
                    opacity: 0,
                    x: i % 2 === 0 ? 200 : -200,
                    y: i % 2 === 0 ? -100 : -100,
                    duration: 2,
                    ease: "elastic.in",
                    delay: i * 0.2,
                    scrollTrigger: {
                        trigger: this.$refs.section,
                        start: "top 95%",
                        toggleActions: "play none none reverse",
                    },
                });
            });
        },
    },
};
</script>
