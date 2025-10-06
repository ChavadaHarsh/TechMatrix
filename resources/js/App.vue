<template>
    <div class="relative">
        <!-- Header -->
        <header
            :class="[
                'fixed top-0 left-0 w-full z-50 bg-white  transition-transform duration-500',
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

        <!-- Scroll To Top Button -->
        <button
            v-show="showScrollButton"
            @click="scrollToTop"
            class="fixed bottom-6 right-6 z-50 w-12 h-12 flex items-center cursor-pointer justify-center bg-[#00B5AC] text-white shadow-lg hover:bg-[#008b84] transition-all duration-300"
        >
            <!-- Up Arrow -->
            <span
                class="w-4 h-4 border-t-2 border-l-2 border-white rotate-45 translate-y-[2px]"
            ></span>
        </button>
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
            showScrollButton: false, // for scroll to top
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

            // Header hide on scroll down
            if (currentScroll > this.lastScroll && currentScroll > 80) {
                this.isHidden = true;
            } else {
                this.isHidden = false;
            }

            // Show button after 300px scroll
            this.showScrollButton = currentScroll > 300;

            this.lastScroll = currentScroll;
        },

        // Smooth scroll to top
        scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        },
    },
};
</script>
