<template>
    <div>
        <!-- Header -->
        <header
            :class="[
                'fixed top-0 left-0 w-full z-50 bg-white shadow-md transition-transform duration-500',
                isHidden ? '-translate-y-full' : 'translate-y-0',
            ]"
        >
            <Navigation />
        </header>

        <!-- Main Content -->
        <main class="pt-28 min-h-screen w-full">
            <router-view />
        </main>

        <!-- Footer -->
        <footer>
            <FooterSection />
        </footer>
    </div>
</template>

<script>
import Navigation from "./components/navigation.vue";
import FooterSection from "./components/FooterSection.vue";

export default {
    name: "AppHeader",
    components: { Navigation, FooterSection },
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

            if (currentScroll > this.lastScroll && currentScroll > 80) {
                this.isHidden = true;
            } else {
                this.isHidden = false;
            }

            this.lastScroll = currentScroll;
        },
    },
};
</script>
