<template>
    <div
        ref="section"
        class="w-[60%] lg:w-[55%] m-auto text-center space-y-8 overflow-hidden"
    >
        <h1
            ref="title"
            class="text-3xl lg:text-4xl font-[400] font-[Poppins] mt-12"
        >
            <span class="text-[#00B5AC]">Industries</span> Specific Solution
        </h1>
        <p
            ref="content"
            class="text-gray-600 text-md font-[400] leading-relaxed px-2 mt-4"
        >
            In our portfolio, you can browse the latest products developed for
            our clients for different corporate purposes. Want To See More
            Website Designing & Web Development, Branding, SEO Works?
        </p>
    </div>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default {
    name: "SpecificSolution",
    mounted() {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: this.$refs.section,
                start: "top 80%",
                toggleActions: "play none none reverse",
            },
        });

        tl.from(
            this.$refs.title,
            {
                x: -100,
                opacity: 0,
                duration: 1.2,
                ease: "power3.out",
            },
            0
        );

        tl.from(
            this.$refs.content,
            {
                x: 100,
                opacity: 0,
                duration: 1.2,
                ease: "power3.out",
            },
            0
        );
    },
};
</script>
