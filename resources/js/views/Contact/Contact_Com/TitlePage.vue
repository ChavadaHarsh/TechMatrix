<template>
    <div
        class="w-full flex flex-col-2 pt-10 gap-30 items-start justify-center font-[Poppins]"
    >
        <div ref="title" class="flex flex-col gap-4 items-start pt-5">
            <h1
                class="text-3xl text-gray-800 xl:text-4xl font-[900] tracking-wider"
            >
                Contact Us
            </h1>
            <div class="flex font-[500]">
                <router-link to="/" class="cursor-pointer flex">
                    <span>
                        <img
                            src="../../../assest/About_us/home_icon.webp"
                            alt=""
                            class="h-6 w-6 mr-2"
                        />
                    </span>
                    <span
                        class="text-xl xl:text-2xl tracking-wider cursor-pointer"
                        >Home</span
                    >
                </router-link>
                <span class="text-xl xl:text-2xl px-2">&#62;</span>
                <router-link to="/contact" class="cursor-pointer flex">
                    <span
                        class="text-[#00B5AC] text-xl xl:text-2xl tracking-wider cursor-pointer"
                        >Contact Us</span
                    >
                </router-link>
            </div>
        </div>
        <img
            ref="image"
            class="w-1/3"
            src="../../../assest/Contact_page/banner_img.png"
            alt=""
        />
    </div>
</template>
<script>
import { ref, onMounted } from "vue";
import gsap from "gsap";

export default {
    name: "TitlePage",
    setup() {
        const title = ref(null);
        const image = ref(null);

        onMounted(() => {
            // Animate title from top
            gsap.from(title.value, {
                x: -300,
                opacity: 0,
                duration: 1.5,
                ease: "power2.inOut",
            });

            // Animate image from right
            gsap.from(image.value, {
                x: 300,
                opacity: 0,
                duration: 1.5,
                ease: "power2.inOut",
            });
        });

        return { title, image };
    },
};
</script>
