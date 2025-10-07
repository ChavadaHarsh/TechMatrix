<template>
    <div
        ref="imageContainer"
        class="w-full flex justify-center items-center py-10 mt-10 bg-white overflow-hidden"
    >
        <img
            ref="image"
            src="../../../assest/About_us/text_cloud.webp"
            alt="Custom Illustration"
            class="w-full object-contain"
        />
    </div>
</template>

<script>
import { ref, onMounted, onBeforeUnmount } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default {
    name: "CustomImage",

    setup() {
        const image = ref(null);

        onMounted(() => {
            gsap.from(image.value, {
                scale: 0.5,
                opacity: 0,
                duration: 1.5,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: image.value,
                    start: "top 90%", // starts when image enters bottom of viewport
                    toggleActions: "play none none reverse",
                },
            });
        });

        onBeforeUnmount(() => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        });

        return { image };
    },
};
</script>
