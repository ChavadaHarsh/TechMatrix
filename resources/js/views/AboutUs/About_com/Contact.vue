<template>
    <div class="w-full relative py-10">
        <!-- Background Image -->
        <img
            src="../../../assest/About_us/contact-abt.webp"
            alt="Background"
            class="w-full max-h-96 object-cover"
        />

        <!-- Overlay Content -->
        <div
            class="absolute top-1/3 xl:top-1/3 lg:-right-10 xl:-right-20 w-full flex flex-row items-center justify-center gap-20 lg:gap-40 xl:gap-40 text-center text-white bg-opacity-30"
        >
            <div
                ref="Inqury"
                class="text-md lg:text-lg xl:text-3xl flex flex-col justify-end w-1/3 text-white font-bold text-right mb-4"
            >
                <span>Have an inquiry or</span>
                <span> some feedback for us? </span>
                <span>contact us any time.</span>
            </div>
            <router-link to="/contact">
                <button
                    ref="Button"
                    class="relative overflow-hidden px-10 py-4 text-md lg:text-md xl:text-2xl bg-black text-white font-medium rounded-4xl cursor-pointer group transition-all duration-300 ease-in-out"
                >
                    <span class="relative z-10">Contact Us</span>
                    <span
                        class="absolute inset-0 bg-gray-600 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-in rounded-4xl"
                    ></span>
                </button>
            </router-link>
        </div>
    </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default {
    name: "Contact",
    setup() {
        const Inqury = ref(null);
        const Button = ref(null);

        onMounted(() => {
            gsap.from(Inqury.value, {
                x: -100,
                opacity: 0,
                duration: 1.5,
                ease: "power2.inOut",
                scrollTrigger: {
                    trigger: Inqury.value,
                    start: "top 98%",
                    toggleActions: "play none none none",
                },
            });

            gsap.from(Button.value, {
                x: 200,
                opacity: 0,
                duration: 1.5,
                ease: "power2.inOut",
                scrollTrigger: {
                    trigger: Button.value,
                    start: "top 98%",
                    toggleActions: "play none none none",
                },
            });
        });

        return { Inqury, Button };
    },
};
</script>
