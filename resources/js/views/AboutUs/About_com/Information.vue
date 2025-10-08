<template>
    <div class="mt-20 p-10 flex items-center justify-center">
        <img
            ref="processImg"
            src="../../../assest/About_us/process-img.webp"
            alt=""
            class="w-[80%]"
        />
    </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default {
    name: "Information",
    setup() {
        const processImg = ref(null);

        onMounted(() => {
            gsap.from(processImg.value, {
                scrollTrigger: {
                    trigger: processImg.value, // element that triggers animation
                    start: "top 95%", // when top of element hits 80% of viewport
                    toggleActions: "play none none none", // play once
                },
                scale: 0, // start from 0 (shrunk)
                opacity: 0, // start invisible
                duration: 1, // animation duration
                ease: "back.out(1.7)",
            });
        });

        return { processImg };
    },
};
</script>

<style scoped>
/* Optional: smooth scaling */
</style>
