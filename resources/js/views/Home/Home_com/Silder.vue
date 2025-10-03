<template>
    <div
        class="relative w-full h-[500px] lg:h-[600px] rounded-lg pl-10 lg:pl-20 pr-24 lg:pr-36 overflow-hidden"
    >
        <!-- Slides -->
        <div
            class="relative h-full cursor-pointer"
            @mouseenter="stopAutoPlay"
            @mouseleave="startAutoPlay"
        >
            <div
                v-for="(image, index) in banners"
                :key="index"
                class="absolute inset-0 transition-transform duration-700 ease-in-out"
                :style="{
                    transform: `translateY(${(index - currentIndex) * 100}%)`,
                    opacity: currentIndex === index ? 1 : 0.8,
                    zIndex: currentIndex === index ? 10 : 0,
                }"
            >
                <img
                    :src="image"
                    class="w-full h-full object-cover"
                    alt="Banner"
                />
            </div>
        </div>

        <!-- Indicators -->
        <div
            class="absolute z-30 flex flex-row gap-3 top-70 right-0 translate-x-38 lg:translate-x-26 -translate-y-20 lg:-translate-y-10 rotate-90 cursor-pointer duration-300"
        >
            <h3
                class="text-lg -translate-y-2 translate-x-10 font-medium text-gray-400 rotate-180"
            >
                <span class="text-[#00B5AC]"> 0{{ currentIndex + 1 }}</span
                >/0{{ banners.length }}
            </h3>
            <div class="h-1 w-64 translate-x-10 bg-gray-200"></div>
            <button
                v-for="(image, index) in banners"
                :key="'indicator-' + index"
                class="relative w-1 h-8 rounded-sm cursor-pointer duration-300 overflow-hidden group hover:bg-[#00B5AC]"
                :class="currentIndex === index ? 'bg-[#00B5AC]' : 'bg-gray-400'"
                @click="goToSlide(index)"
            >
                <!-- Hover underline effect -->
                <span
                    class="absolute bottom-0 left-0 h-[2px] bg-[#00B5AC] w-0 group-hover:w-full transition-all duration-500"
                ></span>
            </button>
        </div>
    </div>
</template>

<script>
import banner1 from "../../../assest/Silder/banner_01.png";
import banner2 from "../../../assest/Silder/banner_02.png";
import banner3 from "../../../assest/Silder/banner_03.png";
import banner4 from "../../../assest/Silder/banner_04.png";

export default {
    name: "Slider",
    data() {
        return {
            banners: [banner1, banner2, banner3, banner4],
            currentIndex: 0,
            interval: null,
        };
    },
    methods: {
        nextSlide() {
            this.currentIndex = (this.currentIndex + 1) % this.banners.length;
        },
        goToSlide(index) {
            this.currentIndex = index;
        },
        startAutoPlay() {
            this.interval = setInterval(this.nextSlide, 4000);
        },
        stopAutoPlay() {
            clearInterval(this.interval);
            this.interval = null;
        },
    },
    mounted() {
        this.startAutoPlay();
    },
    beforeUnmount() {
        this.stopAutoPlay();
    },
};
</script>
