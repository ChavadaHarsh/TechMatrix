<template>
    <div
        ref="clientsSection"
        class="w-full space-y-6 mt-10 text-center font-[Poppins]"
    >
        <h1 ref="title" class="text-3xl lg:text-4xl font-[400] mt-12">
            Our <span class="text-[#00B5AC]">Clients</span>
        </h1>

        <p ref="subtitle" class="text-xl font-[400]">
            Some of the great clients we have worked with
        </p>

        <div
            ref="grid"
            class="grid grid-cols-2 md:grid-cols-5 gap-6 my-10 overflow-hidden"
        >
            <div
                v-for="(client, index) in clients"
                :key="index"
                class="client-item flex justify-center items-center p-4 bg-white hover:scale-105 transition-all duration-300 cursor-pointer"
            >
                <img
                    :src="client.logo"
                    :alt="client.name"
                    class="h-16 object-contain"
                />
            </div>
        </div>
    </div>
</template>

<script>
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import smartterra from "../../../assest/ClientsLogos/smartterra.webp";
import modi_holidays from "../../../assest/ClientsLogos/modi_holidays.webp";
import megnacool from "../../../assest/ClientsLogos/megnacool.webp";
import trucure from "../../../assest/ClientsLogos/trucure.webp";
import hariom from "../../../assest/ClientsLogos/hariom.webp";
import kashish_holiday from "../../../assest/ClientsLogos/kashish-holiday.webp";
import jay_ent from "../../../assest/ClientsLogos/jay_ent.webp";
import rombild from "../../../assest/ClientsLogos/rombild.webp";
import prime_trade from "../../../assest/ClientsLogos/prime_trade.webp";
import hunar_vastu from "../../../assest/ClientsLogos/hunar-vastu.webp";

gsap.registerPlugin(ScrollTrigger);

export default {
    name: "Clients",
    data() {
        return {
            clients: [
                { name: "SmartTerra", logo: smartterra },
                { name: "Modi Holidays", logo: modi_holidays },
                { name: "Megna Cool", logo: megnacool },
                { name: "TruCure", logo: trucure },
                { name: "HariOm", logo: hariom },
                { name: "Kashish Holiday", logo: kashish_holiday },
                { name: "Jay Enterprise", logo: jay_ent },
                { name: "Rombild", logo: rombild },
                { name: "Prime Trade", logo: prime_trade },
                { name: "Hunar Vastu", logo: hunar_vastu },
            ],
        };
    },
    mounted() {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: this.$refs.clientsSection,
                start: "top 80%",
                toggleActions: "play none none reverse",
            },
        });

        // 🔹 Title (right → left)
        tl.from(this.$refs.title, { x: 100, opacity: 0, duration: 0.8 });

        // 🔹 Subtitle (left → right)
        tl.from(
            this.$refs.subtitle,
            { x: -100, opacity: 0, duration: 0.2 },
            "-=0.5"
        );

        // 🔹 Client Logos stagger with alternating direction
        const items = gsap.utils.toArray(
            this.$refs.grid.querySelectorAll(".client-item")
        );

        gsap.set(items, { opacity: 0, x: 0 });

        tl.fromTo(
            items,
            {
                opacity: 0,
                x: (i) => (i % 2 === 0 ? 100 : -100), // even → right, odd → left
            },
            {
                opacity: 1,
                x: 0,
                duration: 0.6,
                stagger: 0.12,
                ease: "power3.out",
            },
            "+=0.15"
        );
    },
};
</script>
