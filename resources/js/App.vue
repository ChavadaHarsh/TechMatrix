<template>
    <header
        :class="[
            'sticky top-0 left-0 w-full z-50 bg-white  transition-transform duration-500 overflow-hidden',
            isHidden ? '-translate-y-full' : 'translate-y-0',
        ]"
    >
        <Navigation />
    </header>
    <main class="pt-4 h-screen w-full">
        <router-view />
    </main>
</template>

<script>
import Navigation from "./components/navigation.vue";

export default {
    name: "AppHeader",
    components: { Navigation },
    data() {
        return {
            lastScroll: 0,
            isHidden: false,
        };
    },
    mounted() {
        window.addEventListener("scroll", this.handleScroll);
    },
    beforeUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    },
    methods: {
        handleScroll() {
            const currentScroll = window.scrollY;
            if (currentScroll > this.lastScroll && currentScroll > 50) {
                this.isHidden = true; // hide on scroll down
            } else {
                this.isHidden = false; // show on scroll up
            }
            this.lastScroll = currentScroll;
        },
    },
};
</script>
