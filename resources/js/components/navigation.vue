<template>
    <nav
        class="flex items-center w-full justify-between px-5 lg:px-10 py-4 bg-white text-white"
    >
        <!-- Left Logo -->
        <img
            src="../assest/companyLog/CompanyLogWith.png"
            alt="TechMatrix Logo"
            class="h-16"
            ref="logo"
        />

        <!-- Right Hamburger Icon -->
        <div ref="menuButton">
            <button
                @click="toggleMenu"
                class="text-3xl focus:outline-none cursor-pointer transalte-x-0 xl:-translate-x-30 hover:scale-105 hover:bg-[#00B5AC] rounded-md p-1 active:scale-95 duration-300"
            >
                <MenuIcon color="black" />
            </button>
        </div>

        <!-- Sidebar Menu -->
        <div
            :class="[
                'fixed top-0 right-0 h-screen bg-[#00B5AC] text-white shadow-lg flex flex-col items-center transition-transform duration-1000',
                isOpen ? 'translate-x-0 w-[14%]' : 'translate-x-full w-[14%]',
            ]"
            ref="menuContainer"
        >
            <button
                class="self-end m-4 cursor-pointer hover:scale-105 hover:text-gray-200 active:scale-95 duration-300"
                @click="toggleMenu"
            >
                <CloseIcon />
            </button>

            <ul
                ref="menuList"
                class="flex flex-col w-full h-screen gap-4 mt-3 font-[Poppins] text-lg font-medium cursor-pointer duration-300"
            >
                <li
                    v-for="(item, index) in menuItems"
                    :key="index"
                    class="menu-item w-full flex justify-center items-center pb-4 border-b-2 border-white/10 relative group opacity-0 translate-x-10"
                >
                    <router-link
                        v-if="!item.children"
                        :to="item.to"
                        @click="toggleMenu"
                        class="hover:text-black/75 transition-all duration-300 active:scale-90"
                    >
                        {{ item.label }}
                    </router-link>

                    <div v-else class="flex flex-col items-center">
                        <span
                            class="hover:text-black/75 transition-all duration-300"
                        >
                            {{ item.label }}
                        </span>
                        <Dropdown
                            class="transtation-all duration-1000"
                            :items="item.children"
                            @closeDropdown="toggleMenu"
                        />
                    </div>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
import CloseIcon from "../assest/icon/CloseIcon.vue";
import MenuIcon from "../assest/icon/MenuIcon.vue";
import Dropdown from "./navigation_com/dropdown.vue";
import gsap from "gsap";

export default {
    name: "Navigation",
    components: { Dropdown, CloseIcon, MenuIcon },
    data() {
        return {
            isOpen: false,
            menuItems: [
                { label: "Home", to: "/" },
                {
                    label: "Services",
                    children: [
                        "Website Design",
                        "Mobile Apps",
                        "IOT Projects",
                        "CMS Portal",
                        "Custom Solution",
                        "Travel Portal",
                        "Mobile Games",
                        "Education Solution",
                        "Ecommerce Solution",
                    ],
                },
                { label: "AboutUs", to: "/aboutUs" },
                { label: "Contact", to: "/contact" },
                {
                    label: "Products",
                    children: [
                        "Employee tracking & reporting system",
                        "Travel Portal",
                        "Ecommerce",
                        "Grocery app",
                    ],
                },
            ],
        };
    },
    methods: {
        toggleMenu() {
            this.isOpen = !this.isOpen;

            // Run GSAP animation when menu opens
            if (this.isOpen) {
                this.$nextTick(() => {
                    this.animateMenuItems();
                });
            }
        },

        gsapAnimation() {
            // Logo & button intro animation
            const tl = gsap.timeline();
            tl.from(this.$refs.logo, {
                duration: 1,
                opacity: 0,
                scale: 0.2,
                ease: "power3.out",
            }).from(this.$refs.menuButton, {
                duration: 1,
                rotate: 360,
                opacity: 0,
                scale: 0.5,
            });
        },

        animateMenuItems() {
            // Animate list items right-to-left
            gsap.fromTo(
                ".menu-item",
                {
                    opacity: 0,
                    x: 50,
                },
                {
                    opacity: 1,
                    x: 0,
                    stagger: 0.15, // delay between each
                    duration: 0.6,
                    ease: "power3.out",
                }
            );
        },
    },
    mounted() {
        this.gsapAnimation();
    },
};
</script>
