<template>
    <nav
        class="flex items-center m-auto w-[98%] lg:w-[60%] justify-between px-4 py-4 bg-white text-white"
    >
        <!-- Left Logo -->
        <!-- <div class="text-2xl font-bold">MyLogo</div> -->
        <img
            src="../assest/companyLog/CompanyLogWith.png"
            alt="TechMatrix Logo"
            class="h-16"
        />

        <!-- Right Hamburger Icon -->
        <button
            @click="toggleMenu"
            class="text-3xl focus:outline-none cursor-pointer hover:scale-105 hover:bg-[#00B5AC] rounded-md p-1 active:scale-95 duration-300"
        >
            <!-- Hamburger -->
            <MenuIcon color="black" />
        </button>

        <!-- Right Sidebar -->
        <div
            :class="[
                'fixed top-0 right-0 h-screen bg-[#00B5AC] text-white shadow-lg flex flex-col items-center transition-transform duration-300',
                isOpen ? 'translate-x-0 w-[14%]' : 'translate-x-full w-[14%]',
            ]"
        >
            <button
                class="self-end m-4 cursor-pointer hover:scale-105 hover:text-gray-200 active:scale-95 duration-300"
                @click="toggleMenu"
            >
                <CloseIcon />
            </button>

            <ul
                class="flex flex-col w-full h-screen gap-8 mt-3 font-[Poppins] text-xl font-medium cursor-pointer duration-300"
            >
                <li
                    v-for="(item, index) in menuItems"
                    :key="index"
                    class="w-full flex justify-center pb-4 border-b-2 border-white/10 relative group"
                >
                    <!-- Normal link -->
                    <router-link
                        v-if="!item.children"
                        :to="item.to"
                        @click="toggleMenu"
                        class="hover:text-black/75 transition-all duration-300 active:scale-90 -translate-y-1.5"
                    >
                        {{ item.label }}
                    </router-link>

                    <!-- Parent link with dropdown -->
                    <div v-else class="flex flex-col items-center">
                        <span
                            class="hover:text-black/75 transition-all duration-300 -translate-y-1.5"
                        >
                            {{ item.label }}
                        </span>
                        <Dropdown
                            :items="item.children"
                            @closeDropdown="toggleMenu"
                        />
                    </div>
                </li>
            </ul>
        </div>
    </nav>
</template>

< !-- Bussiness Logic -->

<script>
import CloseIcon from "../assest/icon/CloseIcon.vue";
import MenuIcon from "../assest/icon/MenuIcon.vue";
import Dropdown from "./navigation_com/dropdown.vue";

export default {
    name: "Navigation",
    components: {
        Dropdown,
        CloseIcon,
        MenuIcon,
    },
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
                { label: "About Us", to: "/about" },
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
        },
    },
};
</script>

<!-- <ul
                class="flex flex-col w-full h-screen gap-8 mt-3 font-[Poppins] text-xl font-medium cursor-pointer duration-300"
                @click="toggleMenu"
            >
                <li
                    class="w-full flex items-center justify-center pb-4 border-b-2 border-white/10 active:scale-90 duration-300"
                >
                    <router-link
                        href="#"
                        class="hover:text-black/75 -translate-y-1.5"
                        >Home</router-link
                    >
                </li>
                <li
                    class="w-full flex justify-center pb-4 border-b-2 border-white/10 active:scale-90 group relative"
                >
                    <router-link
                        href="#"
                        class="hover:text-black/75 hover: transition-all duration-300 -translate-y-1.5"
                        >Services</router-link
                    >

                    <Dropdown />
                </li>
                <li
                    class="w-full flex justify-center pb-4 border-b-2 border-white/10 active:scale-90 -translate-y-1.5"
                >
                    <router-link href="#" class="hover:text-black/75"
                        >Contact</router-link
                    >
                </li>
            </ul> -->
