<!-- components/HamburgerIcon.vue -->
<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        :class="`w-${size} h-${size}`"
        fill="none"
        viewBox="0 0 24 24"
        :stroke="color"
    >
        <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
        />
    </svg>
</template>

<script>
export default {
    name: "HamburgerIcon",
    props: {
        size: {
            type: [String, Number],
            default: 8, // Tailwind size (w-8 h-8)
        },
        color: {
            type: String,
            default: "currentColor", // inherits text color
        },
    },
};
</script>
