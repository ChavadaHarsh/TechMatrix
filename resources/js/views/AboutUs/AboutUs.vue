<template>
    <PageLayout>
        <section
            class="w-full flex flex-col lg:flex-row items-center justify-between gap-14 pt-8 pb-1 font-[Poppins] bg-white"
        >
            <!-- Left Content -->
            <div
                ref="content"
                class="flex-1 text-center lg:text-left space-y-2"
            >
                <h2 class="text-[32px] font-bold text-teal-600">
                    Technology Matrix
                </h2>
                <p class="text-gray-800 text-[30px] leading-relaxed">
                    From Idea To Innovation <br />
                    & Imagination To Fully Functional App.
                </p>
            </div>

            <!-- Right Illustration -->
            <div ref="image" class="flex-1 flex justify-center">
                <img
                    src="../../assest/About_us/banner.webp"
                    alt="About Us Illustration"
                    class="max-w-md lg:max-w-lg object-contain"
                />
            </div>
        </section>
    </PageLayout>
    <CustomImage />
</template>

<script>
import { ref, onMounted } from "vue";
import { gsap } from "gsap";
import PageLayout from "../../components/PageLayout.vue";
import CustomImage from "./About_com/CustomImage.vue";

export default {
    name: "AboutUs",
    components: { PageLayout, CustomImage },

    setup() {
        const content = ref(null);
        const image = ref(null);

        onMounted(() => {
            const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

            tl.from(content.value, {
                x: 200,
                opacity: 0,
                duration: 1.2,
                stagger: 0.2,
            }).from(
                image.value,
                {
                    opacity: 0,
                    scale: 0,
                    duration: 1.2,
                },
                "<" // overlap both animations for smooth transition
            );
        });

        return { content, image };
    },
};
</script>
