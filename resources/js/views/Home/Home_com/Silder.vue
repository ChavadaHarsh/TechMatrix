<template>
    <div class="relative w-full h-[600px] rounded-lg px-40 overflow-hidden">
        <!-- Slides -->
        <div class="relative h-full">
            <div
                v-for="(image, index) in banners"
                :key="index"
                class="absolute inset-0 transform transition-transform duration-300 ease-in-out"
                :class="{
                    'translate-y-0 z-10 opacity-100': currentIndex === index, // Active slide
                    'translate-y-full opacity-0': currentIndex !== index, // Hidden slide (starts below and moves up)
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
            class="absolute z-30 flex flex-row gap-3 top-100 right-8 -translate-y-1/2 rotate-90 cursor-pointer"
        >
            <div class="h-1 w-30 bg-gray-200"></div>
            <button
                v-for="(image, index) in banners"
                :key="'indicator-' + index"
                class="w-1 h-8 rounded-sm"
                :class="currentIndex === index ? 'bg-[#00B5AC]' : 'bg-gray-400'"
                @click="goToSlide(index)"
            ></button>
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
